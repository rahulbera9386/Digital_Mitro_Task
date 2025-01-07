import React from "react";

const Hero = () => {
  return (
    <section className="h-[80vh] flex flex-col items-center justify-center text-center text-white">
      <p className="text-orange-500 text-lg font-medium leading-9">
        Fresh & Organic
      </p>
      <h1 className="text-7xl font-bold my-4">Delicious Seasonal Fruits</h1>
      <div className="flex gap-6 mt-6">
        <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600">
          Fruit Collection
        </button>
        <button className="px-6 py-3 border border-white text-white font-semibold rounded-lg shadow-lg hover:bg-gray-100 hover:text-orange-500">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default Hero;
