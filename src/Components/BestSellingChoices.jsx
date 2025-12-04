import React from "react";
import useToys from "../Hooks/useToys";
import { Link } from "react-router";

const BestSellingChoices = () => {
  const { toys } = useToys();

  // Sort toys by rating descending and pick top 6
  const bestToys = [...toys].sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <div className="py-10">
      <h1 className="font-bold text-3xl  text-blue-500 sm:text-5xl md:text-6xl lg:text-7xl text-center mb-2">
        Our Products
      </h1>
      <h2 className="text-xl text-pink-500 sm:text-2xl md:text-3xl font-semibold text-center mb-8">
        Best Selling Choices
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {bestToys.map((toy) => (
        <div
          key={toy.toyId}
          className="group  relative p-3 bg-base-300 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
        >
          <img
            src={toy.pictureURL}
            alt={toy.toyName}
            className="h-48 w-full object-cover rounded-xl"
          />

          <h3 className=" text-xl lg:text-2xl font-bold mt-4 text-gray-800 group-hover:text-pink-600 transition-colors">
            {toy.toyName}
          </h3>

          <div className="flex justify-between items-center py-3 text-gray-700">
            <p className="font-semibold">
              Price: <span className="text-pink-600">${toy.price}</span>
            </p>

            <p className="text-sm font-medium">
              Available: {toy.availableQuantity}
            </p>
          </div>

          <div className="flex justify-between items-center text-gray-600">
            <p className="flex items-center gap-1 font-medium">
              {toy.rating} ⭐
            </p>
            <Link to={`/toyDetails/${toy.toyId}`}>
              <button className="btn btn-sm hover:bg-purple-500 bg-pink-500  text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                View More
              </button>
            </Link>
          </div>

          {/* decoration effect */}
          <div className="absolute inset-0 rounded-2xl border border-transparent  transition-all duration-300 pointer-events-none"></div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellingChoices;
