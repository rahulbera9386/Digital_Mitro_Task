import React, { useEffect } from 'react'
import { RxCross2 } from 'react-icons/rx'
import Axios, { summaryApi } from '../api/summaryApi'
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const DeleteProductCard = ({close,data,fetchProducts}) => {
console.log("data",data)
const navigate=useNavigate()
const deleteProduct=async()=>{
    try{
        const response=await Axios({...summaryApi.delete_product,data:{data}});
        if(response.data.success)
        {
            toast.success(response.data.message);
            close();
            fetchProducts()
        }

    }
    catch(error)
    {
        console.log(error)
    }
}



  return (
    <div className='bg-black bg-opacity-50 flex justify-center items-center fixed inset-0'>
<div className='bg-white p-6 shadow-md rounded-lg'>
    <div className='flex justify-end'>
        <RxCross2 size={24} onClick={()=>close()} className='cursor-pointer'/>
    </div>
    <div className='mt-4 flex flex-col '>
        <p className='text-lg font-medium '>Are You sure want to delete Product?</p>
        <div className='mt-4 flex items-center gap-4'>
        <button className='bg-blue-600 text-white text-sm px-3 py-2.5 rounded-md font-medium cursor-pointer' onClick={()=>navigate("/dashboard/product")}>
            Cancel
        </button>
        <button className='bg-red-600 text-white text-sm px-3 py-2.5 rounded-md font-medium' onClick={deleteProduct}>Confirm</button>
        </div>
        
    </div>

</div>
    </div>
  )
}

export default DeleteProductCard
