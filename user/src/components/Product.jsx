import { useEffect } from 'react'
import axios  from 'axios'
import { setProducts } from '../redux/product';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './ProductCard';

const Product = () => {
const dispatch=useDispatch();
const {products}=useSelector(state=>state.product)

const Base_Url=import.meta.env.VITE_BACKEND_URL;
//console.log(Base_Url)

const fetchProducts=async()=>{
    try{
        const response=await axios.get(`${Base_Url}/api/product/products`);
        console.log(response)
        if(response.data.success)
        {
            dispatch(setProducts(response.data.data))

        }

    }
    catch(error)
    {
        console.log(error);
    }
}
useEffect(()=>{
fetchProducts()
},[dispatch])




  return (
    <div>
    <h1 className='text-center text-4xl font-semibold text-orange-500'>All Products</h1>
    <div className='w-[113px] h-1 shadow-md rounded-md bg-orange-500 mx-auto mt-2'></div>
    <div className='mt-8'>
        <ProductCard fetchProducts={fetchProducts} products={products}/>

    </div>
    </div>
  )
}

export default Product
