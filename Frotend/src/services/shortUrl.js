API_URL = 'http://localhost:8000'

async function shortUrl(data){
    try{
       const  response = await fetch(`${API_URL}/shorturl`,{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
       })
       const data = await response.json()
       if(!response.ok){
        let regMsg = 'Url Failed'
        if(Array.isArray(data.detail)){
            regMsg = data.detail[0].msg
        }else if(typeof data.detail === 'string'){
            regMsg = data.detail
        }
        throw new Error(regMsg)
        }
    }
    catch(err){
        console.log(err)
    }
}
async function getUrl(){
    const response = await fetch(`${API_URL}/{short_url}`,{
        method:'GET',
        headers: {'Content-Type' : 'application/json'},
        credentials:"include"
    })
    if(response.response == 401){
        return null
    }
    const result= await response.json()
    if (!response.ok) throw new Error('Session Expired')
    return result
}