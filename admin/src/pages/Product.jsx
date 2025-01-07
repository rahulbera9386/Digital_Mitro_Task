import { useState } from "react"
import CreateProductModal from "../components/CreateProductModal"


const Product = () => {
  const [isProductOpen,setIsProductOpen]=useState(false)
  return (
    <div className="flex flex-col min-h-screen">
      {/* Creete Products */}
      <div className="flex justify-between items-center p-4 bg-white shadow-md rounded-sm">
        <h1 className="text-2xl font-semibold text-gray-800">Products</h1>
        <button className="px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md focus:outline-none" onClick={()=>setIsProductOpen(true)}>
          Create Product
        </button>
      </div>
      {/* All Products Card */}
      <div>

      </div>
      {
        isProductOpen &&(
          <CreateProductModal close={()=>setIsProductOpen(false)}/>
        )
      }

    </div>
  )
}

export default Product
