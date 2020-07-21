import axios from 'axios'

const setAuthorizationToken = (token) =>{
    if(token){
        axios.defaults.headers.common['Authorization'] = `Alex ${token}`;
    }
    else{
        delete axios.defaults.headers.common['Authorization']
    }
}

export default setAuthorizationToken