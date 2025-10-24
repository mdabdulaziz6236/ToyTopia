import React, { useEffect, useState } from "react";
import useToys from "../Hooks/useToys";
import { Trash2, DollarSign } from "lucide-react";
import Loading from "../Components/Loading";

const Wishlist = () => {
  const { toys, loading } = useToys();
  const [wishlistToys, setWishlistToys] = useState([]);

  useEffect(() => {
    const storedIds = JSON.parse(localStorage.getItem("wishlistIds")) || [];
    const filteredToys = toys.filter((toy) => storedIds.includes(toy.toyId));
    setWishlistToys(filteredToys);
  }, [toys]);

  const handleRemove = (id) => {
    const storedIds = JSON.parse(localStorage.getItem("wishlistIds")) || [];
    const updatedIds = storedIds.filter((toyId) => toyId !== id);
    localStorage.setItem("wishlistIds", JSON.stringify(updatedIds));
    setWishlistToys(wishlistToys.filter((toy) => toy.toyId !== id));
  };

  const totalPrice = wishlistToys.reduce((sum, toy) => sum + toy.price, 0);

  if (loading) return <Loading />;

  if (wishlistToys.length === 0)
    return (
      <div className="text-center py-20 text-xl text-gray-600">
        🛒 Your wishlist is empty!
      </div>
    );

  return (
    <div className="w-11/12 flex justify-center flex-col items-center mx-auto py-10">
      <div >
        <div>
        <h1 className="text-3xl font-bold text-center mb-8 text-pink-600">
        💖 Your Wishlist
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {wishlistToys.map((toy) => (
          <div
            key={toy.toyId}
            className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center hover:scale-105 transition"
          >
            <img
              src={toy.pictureURL}
              alt={toy.toyName}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h2 className="text-lg font-semibold mt-3">{toy.toyName}</h2>
            <p className="text-gray-500">${toy.price}</p>
            <button
              onClick={() => handleRemove(toy.toyId)}
              className="mt-3 btn btn-sm btn-error text-white flex items-center gap-1"
            >
              <Trash2 size={16} /> Remove
            </button>
          </div>
        ))}
      </div>
      </div>

     
      </div>
      <div className="flex justify-center items-center lg:w-1/2 md:w-1/3 w-full">
         <div className="text-center mt-10 bg-pink-100 p-5 rounded-lg shadow-md">
        <h3 className="text-xl font-bold flex justify-center  items-center gap-2">
          <DollarSign className="text-green-600" />
          Total Price: ${totalPrice.toFixed(2)}
        </h3>
      </div>
     </div>
    </div>
  );
};

export default Wishlist;
