


import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams(); 
  const Base_Url = import.meta.env.VITE_BACKEND_URL;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [currentImageIndex, setCurrentImageIndex] = useState(0); 

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`${Base_Url}/api/product/get-product/${id}`);
        if (response.data && response.data.data) {
          setProduct(response.data.data);
        } 
      } catch (error) {
        console.error('Error fetching product details:', error);
        
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.image.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.image.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

 

  return (
    <div className="container mx-auto px-6 py-12">
      {product ? (
        <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-lg p-8 max-w-4xl mx-auto">
          
          
          <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
            <div className="relative w-full h-96">
              <img
                src={product.image[currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              />
              
              <button
                onClick={handlePrevImage}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70"
              >
                &#60;
              </button>
              <button
                onClick={handleNextImage}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70"
              >
                &#62;
              </button>
            </div>
          </div>

          
          <div className="w-full md:w-1/2 md:pl-8">
            <h1 className="text-3xl font-semibold text-gray-900">{product.name}</h1>
            <p className="text-gray-600 mt-4">{product.description}</p>

            <div className="mt-6 flex items-center gap-4">
              <span className="text-xl font-semibold text-gray-800">₹{product.price}</span>
            </div>

            <div className="mt-8 flex gap-6">
              <button className="bg-blue-500 text-white py-3 px-8 rounded-lg hover:bg-blue-600 transition duration-200">
                Add to Cart
              </button>
              <button className="bg-gray-200 text-gray-700 py-3 px-8 rounded-lg hover:bg-gray-300 transition duration-200">
                Wishlist
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">No product details available.</p>
      )}
    </div>
  );
};

export default ProductDetail;
