import cloudinary from 'cloudinary';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImage = async (file) => {
  try {
    if (!file || !file.originalname || !file.buffer) {
      throw new Error('Invalid file object');
    }

    const fileExtension = path.extname(file.originalname).toString();
    if (!fileExtension) {
      throw new Error('File does not have a valid extension');
    }

    
    const base64Data = file.buffer.toString('base64');
    const dataUri = `data:image/${fileExtension.slice(1)};base64,${base64Data}`;

    const result = await cloudinary.uploader.upload(dataUri, {
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
