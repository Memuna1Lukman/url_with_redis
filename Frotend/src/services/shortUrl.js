const API_URL = 'http://localhost:8000'

export async function shortUrl(data){
    try{
       const  response = await fetch(`${API_URL}/shorturl/`,{
        method: 'POST',
        headers: {
            'Content-Type' : "application/json"
        },
        body: JSON.stringify(data),
        credentials: 'include', 
       })
       const result = await response.json()
       if(!response.ok){
        let regMsg = 'Url Failed'
        if(Array.isArray(result.detail)){
            regMsg = result.detail[0].msg
        }else if(typeof result.detail === 'string'){
            regMsg = result.detail
        }
        throw new Error(regMsg)
        }
       // Return the created URL to the hook. Without this, callers receive
       // undefined and the URL card disappears after the request completes.
       return result
    }
    catch(err){
        console.log(err)
        throw err
    }
}
export async function getUrl(){
    const response = await fetch(`${API_URL}/shorturl/`,{
        method:'GET',
        headers: {'Content-Type' : 'application/json'},
        credentials:"include"
    })
    if(response.status == 401){
        return null
    }
    const result= await response.json()
    if (!response.ok) throw new Error('Session Expired')
    return result
}
