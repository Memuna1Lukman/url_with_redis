const API_URL = 'http://localhost:8000'

export async function createUsers(data){
    try{
        const response = await fetch (`${API_URL}/users/`,{
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(data),
        credentials: 'include'
    }) 
    const result = await response.json()
    if(!response.ok){
        let regMsg = 'Registration Failed'
        if(Array.isArray(result.detail)){
            regMsg = result.detail[0].msg
        }else if(typeof result.detail === 'string'){
            regMsg = result.detail
        }
        throw new Error(regMsg)
    }
    return result;
    }
    catch(err){
        console.log("the error is",err)
        throw err
    }
}

export async function loginUser(data){
    try{
        const formData = new URLSearchParams();
        formData.append('username', data.username || data.email);
        formData.append('password', data.password);
        const response = await fetch(`${API_URL}/auth/login/`,{
            method: 'POST',
            headers:{
                'Content-Type' : "application/x-www-form-urlencoded"
            },
            body:formData.toString(),
            credentials: 'include'
        })
        const result = await response.json()
        console.log(result)
        if(!response.ok){
            let logMsg = 'Login Failed'
            if(Array.isArray(result.detail)){
                logMsg = result.detail[0].msg
            }else if(typeof result.detail === 'string'){
                logMsg = result.detail
            }
            throw new Error(logMsg)
        }
        return result
    }
    catch(err){
        console.log("the error is",err)
        throw err
    }
}

export async function logoutUser(){
    try {
        const response = await fetch(`${API_URL}/auth/logout`,{
        method: 'POST',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        credentials: 'include'
    })
    if (!response.ok) {
            throw new Error('Backend logout failed');
    }
    return await response.json();
    }catch(err){
        console.log("the error is",err)
        throw err
    }
}

export async function getMe(){
    const response = await fetch(`${API_URL}/users/me`,{
        method: 'GET',
        credentials: 'include'
    })
    if (response.status === 401) {
        return null;
    }
    const result = await response.json()

    if(!response.ok) throw new Error ('Session expired');
    return result
}
