import cloudinary from 'cloudinary';
import path from 'path';
import dotenv from 'dotenv';
import dataUri from "datauri/parser.js"

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
 const dUri=new dataUri();
const uploadImage = async (file) => {
  try {
    

    const fileData = dUri.format(path.extname(file.originalname).toString(),file.buffer);
    

    
  

    const result = await cloudinary.uploader.upload(fileData, {
      folder: 'Digital_Mitro',
    });

    const imageUrl = result.secure_url;
    return imageUrl;
  } catch (error) {
    console.log('Error uploading image:', error);
    throw error;
  }
};

export default uploadImage;