import React from 'react';
import img from "../assets/1.jpg";

const Sale = () => {
  return (
    <div className="relative">
      
      <img
        src={img}
        alt="sale_image"
        className="w-full h-auto "
      />
      
      
      <div className="absolute top-[92px] left-[92px] max-w-[500px]  p-3  flex flex-col  space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          December sale is on! <span className="text-orange-500">with big Discount...</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-700">
          Sale! Up to <span className="text-orange-500 font-bold text-5xl">50%</span> off
        </p>
        <button className="p-3 w-2/4 text-white font-semibold rounded  bg-orange-600 transition">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Sale;
