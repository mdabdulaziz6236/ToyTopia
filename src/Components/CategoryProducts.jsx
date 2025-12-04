import React from "react";
import useToys from "../Hooks/useToys";
import {
  FaCube,
  FaPuzzlePiece,
  FaCar,
  FaDolly,
  FaCookie,
  FaGift,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const CategoryProducts = () => {
  const { toys } = useToys();

  // Data not ready yet → avoid swiper glitch
  if (!toys || toys.length === 0) return null;

  const categoryData = [...new Set(toys.map((toy) => toy.subCategory))].map(
    (cat) => {
      const count = toys.filter((toy) => toy.subCategory === cat).length;

      let icon;
      switch (cat) {
        case "Building Blocks":
          icon = <FaCube className="text-5xl text-pink-500" />;
          break;
        case "Dolls":
          icon = <FaDolly className="text-5xl text-yellow-500" />;
          break;
        case "Puzzles":
          icon = <FaPuzzlePiece className="text-5xl text-blue-500" />;
          break;
        case "Vehicles":
          icon = <FaCar className="text-5xl text-green-500" />;
          break;
        case "Stuffed Toys":
          icon = <FaGift className="text-5xl text-purple-500" />;
          break;
        case "Pretend Play":
          icon = <FaCookie className="text-5xl text-orange-500" />;
          break;
        default:
          icon = <FaCube className="text-5xl text-pink-500" />;
      }

      return { name: cat, count, icon };
    }
  );

  return (
    <div className="py-14 px-6">
      <h1
        className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold 
         bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-3"
      >
        Our Products
      </h1>

      <p className="text-center text-xl sm:text-2xl font-semibold text-blue-500 mb-10">
        Categories You'll Love
      </p>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        speed={900}
        grabCursor={true}
        autoplay={{
          delay: 900,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          480: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {categoryData.map((cat, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="group bg-white/70 backdrop-blur-xl m-3 p-8 rounded-2xl shadow-lg border border-gray-100 
                         hover:shadow-2xl hover:scale-105 transition-all duration-300 
                         flex flex-col items-center text-center"
            >
              <div
                className="w-20 h-20 rounded-full bg-linear-to-br from-pink-100 to-purple-100 
                              flex items-center justify-center mb-4 shadow-md 
                              group-hover:shadow-xl transition-all"
              >
                {cat.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-all">
                {cat.name}
              </h3>

              <p className="text-lg text-pink-500 mt-1 group-hover:text-pink-600 transition-all">
                {cat.count} Products
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategoryProducts;
