import uploadImage from "../utills/cloudinary.js";

const uploadProduct=async(req,res)=>{
    try{
        const file=req.file;
        //console.log(file)
        if (!req.file) {
            return res.status(400).send('No file uploaded');
          }
          //console.log(req.file.originalname)
        const imageUrl=await uploadImage(file);
        return res.status(200).json({message:"Image upload successfully",success:true,error:false,data:imageUrl});


    }
    catch(error)
    {
        return res.status(500).json({message:"There is an error while trying to upload image"})
    }
}
export {uploadProduct}