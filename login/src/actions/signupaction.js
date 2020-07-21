import axios from 'axios'

export const userSignupReq = (userdata) =>{
    return dispatch =>{
        return axios.post("/api/users",userdata)
    }
}

export const isUserExists = (username) =>{
    return dispatch =>{
        return axios.get(`/api/users/${username}`,{
            params: {
                username: username
            }
        })
    }
}