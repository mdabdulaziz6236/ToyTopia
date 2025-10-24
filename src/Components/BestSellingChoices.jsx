import React from "react";
import useToys from "../Hooks/useToys";
import { Link } from "react-router";

const BestSellingChoices = () => {
  const { toys } = useToys();

  // Sort toys by rating descending and pick top 6
  const bestToys = [...toys].sort((a, b) => b.rating - a.rating).slice(0, 6);

  return (
    <div className="py-10">
      <h1 className="font-bold  text-blue-500 sm:text-5xl md:text-6xl text-7xl text-center mb-2">
        Our Products
      </h1>
      <h2 className="text-xl text-pink-500 sm:text-2xl md:text-3xl font-semibold text-center mb-8">
        Best Selling Choices
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {bestToys.map((toy) => (
          <div
            key={toy.toyId}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={toy.pictureURL}
              alt={toy.toyName}
              className="h-48 w-full object-cover"
            />
            <div className="p-3 flex justify-between items-center">
             <div>
               <h3 className="text-lg font-semibold ">{toy.toyName}</h3>
              <p className="text-yellow-500 font-bold ">⭐ {toy.rating}</p>
             </div>
              <div>
                <p className="text-gray-700 font-semibold">${toy.price}</p>
              <p className="text-gray-500 text-sm mt-1">
                {toy.availableQuantity} Available
              </p>
              </div>
              
            </div>
            <div className="flex justify-center items-center pb-4">
              <Link to={`/toyDetails/${toy.toyId}`}>
              <button className="btn btn-sm bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                View More
              </button>
            </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellingChoices;
