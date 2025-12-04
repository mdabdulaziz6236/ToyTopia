import { Link } from "react-router";
import Loading from "./Loading";
import useToys from "../Hooks/useToys";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Heart, Star } from "lucide-react";

const PopularToys = () => {
  const { toys } = useToys();
  const [wishlistIds, setWishlistIds] = useState([]);
  useEffect(() => {
    const storedIds = JSON.parse(localStorage.getItem("wishlistIds")) || [];
    setWishlistIds(storedIds);
  }, []);

  const handleAddToWishlist = (toy) => {
    const storedIds = JSON.parse(localStorage.getItem("wishlistIds")) || [];
    if (storedIds.includes(toy.toyId)) {
      return;
    } else {
      storedIds.push(toy.toyId);
      toast.success("Added to Wishlist");
    }

    localStorage.setItem("wishlistIds", JSON.stringify(storedIds));
    setWishlistIds(storedIds);
  };
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {toys.slice(0, 12).map((toy) => (
          <div
            key={toy.toyId || toy._id}
            className="bg-white rounded-xl shadow-sm hover:shadow-xl border border-gray-200 hover:border-blue-200 transition-all duration-300 group flex flex-col overflow-hidden"
          >
            <div className="relative h-52 overflow-hidden bg-gray-100">
              <img
                src={toy.pictureURL}
                alt={toy.toyName}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              {toy.availableQuantity < 20 && (
                <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                  Low Stock
                </span>
              )}

              {/* Wishlist Button Logic */}
              <button
                onClick={() => handleAddToWishlist(toy)}
                className={`absolute top-3 right-3 p-2 rounded-full shadow-md transition-all duration-300 z-10 ${
                  wishlistIds.includes(toy.toyId)
                    ? "bg-red-50 text-red-500 opacity-100"
                    : "bg-white/80 backdrop-blur-sm text-gray-400 hover:bg-blue-600 hover:text-white opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
                }`}
              >
                <Heart
                  size={18}
                  className="transition-colors"
                  fill={
                    wishlistIds.includes(toy.toyId) ? "currentColor" : "none"
                  }
                />
              </button>
            </div>

            <div className="p-5 flex flex-col flex-1">
              <div className="text-xs font-bold text-blue-600 mb-2 uppercase tracking-wide">
                {toy.subCategory}
              </div>

              <h3 className="font-bold text-gray-900 text-lg mb-1 leading-tight line-clamp-1 group-hover:text-blue-600 transition-colors">
                {toy.toyName}
              </h3>

              <div className="flex items-center gap-1 mb-4">
                <Star className="w-4 h-4 text-orange-400 fill-current" />
                <span className="text-sm font-semibold text-gray-700">
                  {toy.rating}
                </span>
                <span className="text-xs text-gray-400 ml-1">
                  ({Math.floor(Math.random() * 100) + 10} sold)
                </span>
              </div>

              <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <span className="text-xs text-gray-400 block font-medium">
                    Price
                  </span>
                  <span className="text-xl font-extrabold text-gray-900">
                    ${toy.price}
                  </span>
                </div>

                <Link to={`/toyDetails/${toy.toyId}`}>
                  <button className="btn btn-sm hover:bg-purple-500 bg-pink-500  text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                    View More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex pt-11  justify-center items-center">
        <Link to="/all-items">
          <button className="btn btn-lg bg-pink-500 text-white  hover:bg-yellow-300 hover:text-black border-none rounded-full px-8 font-bold shadow-lg transform hover:scale-105 transition-all duration-300">
            View All
          </button>
        </Link>
      </div>
    </>
  );
};

export default PopularToys;
