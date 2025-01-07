import { useState } from "react";
import DeleteProductCard from "./DeleteProductCard";

const AllProductsCard = ({ products,fetchProducts }) => {
  const [productId, setProductId] = useState("");
  const [isDeleteOpen,setIsDeleteOpen]=useState(false);
  console.log("productId",productId)

  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <div
          key={product._id}
          className="rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
        >
          <div className="relative">
            <img
              src={product.image[0]}
              alt={product.name}
              className="w-full h-60 object-cover transition-transform duration-300 transform hover:scale-110"
            />
          </div>

          <div className="bg-white p-4">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2 hover:text-indigo-600 transition-all duration-200">
              {product.name}
            </h2>
            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
            <p className="text-xl font-bold text-indigo-600">₹{product.price}</p>

            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => setProductId(product._id)}
                className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition-all duration-200"
              >
                Edit
              </button>
              <button
                onClick={() => {setProductId(product._id);setIsDeleteOpen(true)}}
                className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 transition-all duration-200 cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
      {
isDeleteOpen && (
    <DeleteProductCard close={()=>setIsDeleteOpen(false)} data={productId} fetchProducts={fetchProducts}/>
)
      }
    </div>
  );
};

export default AllProductsCard;
