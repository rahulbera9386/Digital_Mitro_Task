
import { useEffect } from 'react';

import { Link } from 'react-router-dom';

const ProductCard = ({fetchProducts,products}) => {
    
    
   useEffect(()=>{
fetchProducts()
   },[])
  return (
    <div className="grid grid-cols-3 gap-8 p-8 mx-auto">
      {products?.map((product) => (
        <div
          key={product._id}
          className="max-w-sm rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 cursor-pointer"
        >
          <img
            src={product.image[0]} 
            alt={product.name}
            className="w-full h-64 object-cover"
          />
          <div className="p-6 bg-white">
            <h3 className="text-xl font-semibold text-gray-800 truncate">{product.name}</h3>
            <p className="text-sm text-gray-500 mt-2">{product.description}</p>
            <p className="mt-4 text-lg font-semibold text-gray-900">₹{product.price}</p>
            <button className="mt-4 w-full py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 focus:outline-none">
              <Link to={`/products/${product._id}`}>Details</Link>
              
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
