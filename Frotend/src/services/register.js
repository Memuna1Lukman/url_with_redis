API_URL = 'http://localhost:8000'

async function createUsers(data){
    try{
        const response = await fetch (`${API_URL}/users/`,{
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(data)
    }) 
    const data = await response.json()
    if(!response.ok){
        let regMsg = 'Registration Failed'
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

async function loginUser(data){
    try{
        const response = await fetch(`${API_URL}/auth/login/`,{
            method: 'POST',
            headers:{
                'Content-Type' : "application/json"
            },
            body:JSON.stringify(data),
            credentials: 'include'
        })
        const data = await response.json()
    if(!response.ok){
        let logMsg = 'Login Failed'
        if(Array.isArray(data.detail)){
            logMsg = data.detail[0].msg
        }else if(typeof data.detail === 'string'){
            logMsg = data.detail
        }
        throw new Error(logMsg)
    }

    }
    catch(err){
        console.log(err)
    }
}

