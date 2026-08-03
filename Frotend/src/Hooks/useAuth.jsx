import { useState, useContext,useEffect,createContext } from "react";
import {loginUser,createUsers,getMe } from '../services/register'


export const AuthContext = createContext();

export default function AuthProvider({children}) {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        setLoading(true)
        getMe()
        .then ((data)=>setUser(data))
        .catch(()=>setUser(null))
        .finally(()=>setLoading(false))
    },[])
    const login = async (data)=>{
        try {
        const userData = await loginUser(data)
        setUser(userData)
        } catch (err) {
        throw err; // This forces the error to reach your Login.jsx catch block!
       }
    }
    const register = async (data)=>{
        await createUsers(data)
        await login({"username":data.username,"email" : data.email,"password":data.password})
    }
    const logout = async () =>{
        setUser(null)
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