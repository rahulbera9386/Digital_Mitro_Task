import uploadImage from "../utills/cloudinary.js";

const uploadProduct=async(req,res)=>{
    try{
        const file=req.file;
        const imageUrl=await uploadImage(file);
        return res.status(200).json({message:"Image upload successfully",success:true,error:false});


    }
    catch(error)
    {
        return res.status(500).json({message:"There is an error while trying to upload image"})
    }
}
export {uploadProduct}