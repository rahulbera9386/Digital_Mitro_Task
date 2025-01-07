import { useEffect, useState } from "react";
import CreateProductModal from "../components/CreateProductModal";
import AllProductsCard from "../components/AllProductsCard";
import Axios, { summaryApi } from "../api/summaryApi";
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from "../redux/products";

const Product = () => {
  const [isProductOpen, setIsProductOpen] = useState(false);
  const dispatch=useDispatch();
  const {products}=useSelector(state=>state.product);
  console.log("products",products)

  const fetchProducts = async () => {
    try {
      const response = await Axios({...summaryApi.all_products});
      //console.log(response.data.data);
      if(response.data.success)
      {
        dispatch(setProducts(response.data.data))
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Create Product */}
      <div className="flex justify-between items-center p-4 bg-white shadow-md rounded-sm">
        <h1 className="text-2xl font-semibold text-gray-800">Products</h1>
        <button
          className="px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md focus:outline-none"
          onClick={() => setIsProductOpen(true)}
        >
          Create Product
        </button>
      </div>
      
      
      <div>
        <AllProductsCard  products={products} fetchProducts={fetchProducts}/>
      </div>

      {isProductOpen && (
        <CreateProductModal close={() => setIsProductOpen(false)} fetchProducts={fetchProducts}/>
      )}
    </div>
  );
};

export default Product;
