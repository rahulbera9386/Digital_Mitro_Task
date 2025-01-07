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
    },
    upload_image:{
        url:"/api/file/upload",
        method:"post"
    },
    create_product:{
        url:"/api/product/create-product",
        method:"post"
    },
    all_products:{
        url:"/api/product/products",
        method:"get"
    },
    update_product:{
        url:"/api/product/update-product",
        method:"put"
    },
    delete_product:{
        url:"/api/product/delete-product",
        method:"delete"
    }

}




export default Axios;

export {summaryApi};