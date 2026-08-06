import { useState, useContext,useEffect,createContext } from "react";
import {shortUrl,getUrl} from '../services/shortUrl'


export const shortContext = createContext()


export function shortProvider({children}){
    const [url,setUrl] = useState('')
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)

    useEffect(()=>{
        getUrl()
       .then((data)=>setUrl(data))
       .catch((data)=>setError(true))
       .finally((data)=>setLoading(false))
       return url
    },[])

    const createUrl = async (data)=>{
        try{
            setLoading(true);
            setError(false);
            await shortUrl(data)
        }catch(err){
            setError(true);
            setUrl(null)
            throw err
        }
        finally{
            setLoading(false)
        }
    }
    const getTheUrl = async(data)=>{
        try{
            setLoading(true);
            setError(false);
            return  await getUrl(data)
            

        }catch(err){
            setError(true);
            setUrl(null)
            throw err
        }
        finally{
            setLoading(false)
        }
    }
    return (
        <shortContext.Provider value={{loading,url,getTheUrl,createUrl}}>
            {children}
        </shortContext.Provider>
      )

}


export function useShortUrl(){
    return useContext(shortContext)
}

