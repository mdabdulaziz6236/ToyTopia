import React from "react";
import useToys from "../Hooks/useToys";
import { FaCube, FaPuzzlePiece, FaCar, FaDolly, FaCookie, FaGift } from "react-icons/fa";
import { Link } from "react-router";

const CategoryProducts = () => {
  const { toys } = useToys();

  // Get unique categories and their count
  const categoryData = [...new Set(toys.map((toy) => toy.subCategory))].map((cat) => {
    const count = toys.filter((toy) => toy.subCategory === cat).length;

    // Pick an icon based on category name
    let icon;
    switch (cat) {
      case "Building Blocks":
        icon = <FaCube className="text-6xl  text-secondary  mb-2" />;
        break;
      case "Dolls":
        icon = <FaDolly className="text-6xl  text-secondary mb-2" />;
        break;
      case "Puzzles":
        icon = <FaPuzzlePiece className="text-6xl text-secondary  mb-2" />;
        break;
      case "Vehicles":
        icon = <FaCar className="text-6xl text-secondary  mb-2" />;
        break;
      case "Stuffed Toys":
        icon = <FaGift className="text-6xl text-secondary  mb-2" />;
        break;
      case "Pretend Play":
        icon = <FaCookie className="text-6xl  text-secondary mb-2" />;
        break;
      default:
        icon = <FaCube className="text-6xl text-secondary  mb-2" />;
    }

    return { name: cat, count, icon };
  });

  return (
    <div className="py-10 px-5">
      <h1 className="font-bold  text-pink-500 sm:text-5xl md:text-6xl text-7xl text-center mb-2">
        Our Products
      </h1>
      <h2 className="text-xl text-blue-500 sm:text-2xl md:text-3xl font-semibold text-center mb-8">
        Categories You'll Love
      </h2>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {categoryData.map((cat, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center p-5 rounded-xl shadow-lg shadow-pink-500 bg-white  transition-transform duration-300"
          >
            {cat.icon}
            <Link className="font-bold hover:underline hover:text-red-500 text-green-500  text-3xl">{cat.name}</Link>
            <p className="text-xl text-purple-500 mt-1">{cat.count} Products</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
