import React, { useState, useEffect } from "react";

import { FaShoppingCart } from "react-icons/fa";
import useToys from "../Hooks/useToys";
import { Link } from "react-router";
import LoadingPage from "./Loading";

const SpecialOffer = () => {
  const { toys, loading } = useToys();

  // 2. Select the Special Product (Targeting ID 7: Mini Drone)
  const offerToy = toys.find((toy) => toy.toyId === 7);

  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0)
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0)
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (loading) {
    return <LoadingPage></LoadingPage>;
  }

  if (!offerToy) return null;

  const discountPercentage = 50;
  const originalPrice = offerToy.price;
  const discountedPrice = (
    originalPrice -
    (originalPrice * discountPercentage) / 100
  ).toFixed(2);

  return (
    <div className="w-full py-10 md:py-20 px-4 bg-base-100">
      <div className="max-w-7xl mx-auto">
        {/* Main Card */}
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-violet-600 via-pink-500 to-orange-400 shadow-2xl">
          {/* Abstract Background Shapes */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-60 h-60 md:w-80 md:h-80 rounded-full bg-white opacity-10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 md:w-80 md:h-80 rounded-full bg-yellow-300 opacity-20 blur-3xl"></div>

          {/* Flex Container: Column on Mobile, Row on Desktop */}
          <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 z-10 relative gap-8 md:gap-0">
            {/* === Left Side: Text Content === */}
            <div className="w-full md:w-1/2 space-y-6 text-white text-center md:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider border border-white/30 shadow-sm">
                <span className="text-yellow-300">⚡ Deal of the Day</span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Get{" "}
                <span className="text-yellow-300">
                  {discountPercentage}% OFF
                </span>{" "}
                <br />
                On {offerToy.toyName}
              </h2>

              {/* Description */}
              <p className="text-base md:text-lg text-white/90 max-w-md mx-auto md:mx-0">
                {offerToy.description} Limited stock available! Only{" "}
                <span className="font-bold text-yellow-200">
                  {offerToy.availableQuantity}
                </span>{" "}
                units left.
              </p>

              {/* Timer */}
              <div className="flex justify-center md:justify-start gap-3 md:gap-4 pt-2">
                <div className="flex flex-col items-center bg-white/20 backdrop-blur-md rounded-xl p-2 md:p-3 w-16 md:w-20 border border-white/20">
                  <span className="text-xl md:text-3xl font-bold">
                    {timeLeft.hours}
                  </span>
                  <span className="text-[10px] md:text-xs uppercase">
                    Hours
                  </span>
                </div>
                <div className="flex flex-col items-center bg-white/20 backdrop-blur-md rounded-xl p-2 md:p-3 w-16 md:w-20 border border-white/20">
                  <span className="text-xl md:text-3xl font-bold">
                    {timeLeft.minutes}
                  </span>
                  <span className="text-[10px] md:text-xs uppercase">Mins</span>
                </div>
                <div className="flex flex-col items-center bg-white/20 backdrop-blur-md rounded-xl p-2 md:p-3 w-16 md:w-20 border border-white/20">
                  <span className="text-xl md:text-3xl font-bold text-yellow-300">
                    {timeLeft.seconds}
                  </span>
                  <span className="text-[10px] md:text-xs uppercase">Secs</span>
                </div>
              </div>

              {/* Button */}

              <Link to={`/toyDetails/${offerToy.toyId}`}>
                <button className="btn btn-lg bg-white text-pink-600 hover:bg-yellow-300 hover:text-black border-none rounded-full px-8 font-bold shadow-lg transform hover:scale-105 transition-all duration-300">
                  See Details
                </button>
              </Link>
            </div>

            {/* Right Side: Image & Price Tag */}
            <div className="w-full md:w-1/2 flex justify-center relative mt-6 md:mt-0">
              {/* Product Image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 animate-[bounce_3s_infinite]">
                <img
                  src={offerToy.pictureURL}
                  alt={offerToy.toyName}
                  className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white/30"
                />
              </div>

              {/* Floating Price Tag */}
              <div className="absolute bottom-4 right-4 md:bottom-10 md:right-10 lg:right-20 bg-white/90 backdrop-blur-sm p-3 md:p-4 rounded-2xl shadow-xl transform rotate-12 border-2 border-pink-500 z-20">
                <p className="text-gray-500 text-xs md:text-sm line-through font-bold">
                  ${originalPrice}
                </p>
                <p className="text-2xl md:text-3xl font-extrabold text-pink-600">
                  ${discountedPrice}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
