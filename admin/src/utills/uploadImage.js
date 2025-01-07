import Axios, { summaryApi } from "../api/summaryApi.js";





const uploadImage=async(file)=>{
    try{
        const formData=new FormData();
        formData.append("image",file)
      const response=await Axios({...summaryApi.upload_image,data:formData})
  return response;
    }
    catch(error)
    {
      console.log(error)
    }
  }


  export default uploadImage;