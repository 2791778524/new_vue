import axios from "axios";
 let request = axios.create({
    timeout: 5000,
})
request.interceptors.request.use((config)=>{
    return config
})
request.interceptors.response.use((res)=>{
    if(res.status === 200){
        return res.data
    } else {
        return Promise.reject(new Error('faile'))
    }
})
export default request
