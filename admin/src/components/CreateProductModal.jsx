import { useState } from "react";
import { RxCross2 } from "react-icons/rx";


import axios from "axios";
import Axios, { summaryApi } from './../api/summaryApi.js';
import { toast } from 'sonner';
//import { useNavigate } from 'react-router-dom';
const CreateProductModal = ({ close ,fetchProducts}) => {
const [data,setData]=useState({
    name:"",
    description:"",
    price:"",
    image:[]
})
//const navigate=useNavigate()


const handleChange=(e)=>{
    const {name,value}=e.target;
    setData({...data,[name]:value})
}
console.log(data)
const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('image', file);
  
      try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/file/upload`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
    )
    setData((prev)=>{
        return{
            ...prev,image:[...prev.image,response.data.data]
        }
    })
      } catch (error) {
        console.error('Error uploading file', error.response?.data || error);
      }
    }
  };
  

const handleSubmit=async(e)=>{
  e.preventDefault();
    try{
      const response=await Axios({...summaryApi.create_product,data:data})
      //console.log(response)
      if(response.data.success)
      {
        toast.success(response.data.message);
        setData({
          name:"",
          price:"",
          description:"",
          image:[]
        })
        //navigate("/dashboard/product")
        close();
        fetchProducts()
        toast.success("Image Upload Successfull")
      }
      else
      {
        toast.error(response.data.message)
      }

    }
    catch(error)
    {
      console.log(error)

    }
}




  return (
    <div className="flex items-center justify-center bg-opacity-50 bg-black inset-0 fixed">
      <div className="min-w-[400px] bg-white p-4 rounded-md">
        <div className="flex justify-between items-center mb-4">
          <h1 className="font-medium text-xl ">Create a Product</h1>
          <RxCross2 onClick={close} size={24} className="cursor-pointer" />
        </div>
        {/* Product Info */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter product name"
              className="w-full border rounded p-2"
              value={data.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Description:</label>
            <textarea
              rows={3}
              name="description"
              placeholder="Enter product description"
              className="w-full border rounded p-2"
              value={data.description}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Price:</label>
            <input
              type="text"
              name="price"
              placeholder="Enter product price"
              className="w-full border rounded p-2"
              value={data.price}
              onChange={handleChange}
            />
          </div>

          <div>
            <div>
              <label className="block mb-1 font-medium">Image:</label>
              <input type="file" accept="image/*" name="image" className="w-full border rounded p-2" onChange={handleImageChange}/>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {data.image.map((img, index) => (
                <img key={index} src={img} alt="Product" className="w-16 h-16 object-cover rounded" />
              ))}
            </div>
            </div>
            
          
          
          <button type="submit" className="w-full bg-blue-700 mt-4 rounded-md text-2xl font-medium text-white p-1">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateProductModal;
