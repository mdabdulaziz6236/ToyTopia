import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../Components/Loading";
import useToys from "../Hooks/useToys";
import { Star, DollarSign, User, Package } from "lucide-react"; // icons

const ToyDetails = () => {
  const [toy, setToy] = useState(null);
  const [successMsg, setSuccessMsg] = useState("");
  const { toys, loading } = useToys();
  const { id } = useParams();

  useEffect(() => {
    const toyDetails = toys.find((singleToy) => singleToy.toyId == id);
    setToy(toyDetails);
  }, [toys, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMsg("✅ You have successfully requested to try this toy!");
    e.target.reset();
    setTimeout(() => setSuccessMsg(""), 5000);
  };

  if (loading) return <Loading />;

  if (!toy)
    return (
      <p className="text-center text-red-600 text-xl font-semibold mt-20">
        Toy not found 😢
      </p>
    );

  return (
    <div className="w-11/12 mx-auto my-10">
      {/* Hero Section */}
      <div className="relative rounded-2xl overflow-hidden shadow-xl">
        <img
          src={toy.pictureURL}
          alt={toy.toyName}
          className="w-full h-[400px] object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">{toy.toyName}</h1>
          <p className="text-lg mt-2 text-gray-200">
            {toy.subCategory || "No category specified"}
          </p>
        </div>
      </div>

      {/* Toy Info Section */}
      <div className="mt-10 grid md:grid-cols-2 gap-10 bg-base-200 p-8 rounded-2xl shadow-lg">
        <div className="space-y-4 text-gray-700">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Toy Information
          </h2>

          <p className="flex items-center gap-2">
            <User className="text-blue-500" />
            <span className="font-semibold">Seller:</span> {toy.sellerName}
          </p>

          <p className="flex items-center gap-2">
            <i className="fa-solid fa-envelope text-green-600"></i>
            <span className="font-semibold">Email:</span> {toy.sellerEmail}
          </p>

          <p className="flex items-center gap-2">
            <DollarSign className="text-green-600" />
            <span className="font-semibold">Price:</span> ${toy.price}
          </p>

          <p className="flex items-center gap-2">
            <Star className="text-yellow-500" />
            <span className="font-semibold">Rating:</span> {toy.rating}
          </p>

          <p className="flex items-center gap-2">
            <Package className="text-purple-500" />
            <span className="font-semibold">Available Quantity:</span>{" "}
            {toy.availableQuantity}
          </p>

          <p className="leading-relaxed">
            <span className="font-semibold text-gray-800">Description:</span>{" "}
            {toy.description}
          </p>
        </div>

        {/* Try Now Form */}
        <div className="bg-white rounded-2xl p-6 shadow-md hover:border-3 border-pink-500">
          <h3 className="text-2xl font-semibold mb-4 text-center text-primary">
            Try This Toy Now 🎲
          </h3>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="input input-bordered w-3/4"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="input input-bordered w-3/4"
              required
            />
            <button
              type="submit"
              className="btn btn-primary w-1/2 hover:scale-105 transition-transform"
            >
              Try Now
            </button>
          </form>

          {successMsg && (
            <div className="mt-4 p-3 bg-green-100 border border-green-300 text-green-700 rounded-lg text-center animate-fade-in">
              {successMsg}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
