import axios from "axios"
const baseUrl=import.meta.env.VITE_BACKEND_BASE_URL;
console.log(baseUrl)

const Axios=axios.create({
    baseURL:baseUrl,
    headers:{
        "Content-Type":"application/json"
    }
})



const summaryApi={
    register:{
        url:"/api/user/register",
        method:"post"
    },
    login:{
        url:"/api/user/login",
        method:"post"
    }

}




export default Axios;

export {summaryApi};