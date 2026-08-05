import { useState, useContext,useEffect,createContext } from "react";
import {loginUser,createUsers,getMe,logoutUser } from '../services/register'


export const AuthContext = createContext();

export default function AuthProvider({children}) {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        let isMounted = true;
        setLoading(true)
        getMe()
        .then ((data)=>{
            if(isMounted) setUser(data)
        })
        .catch(()=>{
            if (isMounted) setUser(null);
        })
        .finally(()=>{
            if (isMounted) setLoading(false);
        })
        return () => { isMounted = false; };
    },[])
    const login = async (data)=>{
        try {
                setLoading(true)
                await loginUser(data)
                const profileData = await getMe()

                setUser(profileData)
                return profileData
        } catch (err) {
            setUser(null);
            throw err; // This forces the error to reach your Login.jsx catch block!
       } finally {
            setLoading(false);
        }
    }
    const register = async (data)=>{
        try{
            setLoading(true);
            await createUsers(data)
            await login({ username: data.email, password: data.password });
        }
        catch(err){
            setUser(null)
            throw err
        }
         finally {
            setLoading(false);
        }
    }
    const logout = async () =>{
        try{
            setLoading(true)
            await logoutUser()

        }catch(err){
            console.log("the error is",err)
            throw err
        }finally{
            setUser(user)
            setLoading(false)
        }
    }

  return (
    <AuthContext.Provider value={{user,login,register,loading,logout}}>
        {children}
    </AuthContext.Provider>
  )
}

export function useAuth(){
    return useContext(AuthContext)
}