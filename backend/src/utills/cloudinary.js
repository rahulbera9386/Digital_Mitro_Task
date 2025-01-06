import cloudinary from "cloudinary";
import dataUri from "datauri";
import path from "path";


import dotenv  from 'dotenv';


dotenv.config({})
//console.log(process.env.CLOUDINARY_API_SECRET)
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET

})




const uploadImage=async(file)=>{
    try{
       const dUri=new dataUri();
        if (!file || !file.originalname || !file.buffer) {
            throw new Error('Invalid file object');
          }
        const fileData=dUri.format(path.extname(file.originalname).toString(),file.buffer)
        const result=await cloudinary.uploader.upload(fileData.content,{
            folder:"Digital_Mitro"
        });
        const imageUrl=result.secure_url;
        return imageUrl;

    }
    catch(error)
    {
console.log(error)
    }
}

export default uploadImage