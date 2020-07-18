import axios from 'axios'

export const userSignupReq = (userdata) =>{
    return dispatch =>{
        return axios.post("/api/users",userdata)
    }
}