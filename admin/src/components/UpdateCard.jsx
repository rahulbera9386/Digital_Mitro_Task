import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from 'react-redux';
import { toast } from 'sonner';
import axios from 'axios';
import Axios, { summaryApi } from "../api/summaryApi";

const UpdateCard = ({ close, fetchProducts, data: productId }) => {
  const { products } = useSelector(state => state.product);

  
  const productDetails = products.find(product => product._id === productId);

  const [data, setData] = useState({
    name: productDetails?.name || "",
    description: productDetails?.description || "",
    price: productDetails?.price || "",
    image: productDetails?.image || []
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  
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
        });
        setData(prev => ({
          ...prev,
          image: [...prev.image, response.data.data]
        }));
        toast.success("Image uploaded successfully!");
      } catch (error) {
        console.error('Error uploading image:', error);
        toast.error("Failed to upload image.");
      }
    }
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios({...summaryApi.update_product,data:{productId,...data}})
      if (response.data.success) {
        toast.success(response.data.message);
        fetchProducts(); 
        close(); 
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error updating product:', error);
      toast.error("Failed to update product.");
    }
  };

  return (
    <div className="bg-black flex justify-center items-center fixed bg-opacity-50 inset-0">
      <div className="bg-white p-6 rounded-md min-w-[400px]">
        <div className="flex justify-between items-center mb-4">
          <h1 className="font-medium text-xl">Update Product</h1>
          <RxCross2 onClick={close} size={24} className="cursor-pointer" />
        </div>

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

          <div className="mb-4">
            <label className="block mb-1 font-medium">Image:</label>
            <input
              type="file"
              accept="image/*"
              name="image"
              className="w-full border rounded p-2"
              onChange={handleImageChange}
            />
            <div className="mt-2 flex flex-wrap gap-2">
              {data.image.map((img, index) => (
                <img key={index} src={img} alt="Product" className="w-16 h-16 object-cover rounded" />
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 mt-4 rounded-md text-2xl font-medium text-white p-1"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCard;
