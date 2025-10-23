// src/Pages/ToyDetails.jsx
import React, { useEffect, useState } from "react";
import {  useParams } from "react-router";
import Loading from "../Components/Loading";
import useToys from "../Hooks/useToys";

const ToyDetails = () => {
  const [toy, setToy] = useState(null);
  const [successMsg, setSuccessMsg] = useState("");
  const {toys, loading} = useToys();
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

 if(loading ){
  return <Loading></Loading>
 }
  return (
    <div className="max-w-5xl mx-auto my-12 p-8 bg-base-200 rounded-2xl shadow-xl">
      {/* Toy Details Section */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src={toy.pictureURL}
          alt={toy.toyName}
          className="w-full md:w-1/2 h-80 object-cover rounded-xl shadow-lg"
        />
        <div className="space-y-3 md:w-1/2">
          <h2 className="text-3xl font-bold text-primary">{toy.toyName}</h2>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Seller:</span> {toy.sellerName}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Email:</span> {toy.sellerEmail}
          </p>

          <div className="flex justify-between items-center py-2">
            <p className="text-xl font-semibold text-green-600">
              Price: ${toy.price}
            </p>
            <p className="text-yellow-500 font-semibold">
              ⭐ Rating: {toy.rating}
            </p>
          </div>

          <p className="text-gray-700">
            <span className="font-semibold">Available Quantity:</span>{" "}
            {toy.availableQuantity}
          </p>
          <p className="text-gray-700 leading-relaxed">
            <span className="font-semibold">Description:</span> {toy.description}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Sub Category:</span>{" "}
            {toy.subCategory}
          </p>
        </div>
      </div>

      {/* Try Now Form */}
<div className="mt-10 flex flex-col  mx-auto bg-white p-6 rounded-xl shadow-md max-w-md">
  <h3 className="text-2xl font-semibold mb-4 text-center text-primary">
    Try This Toy Now
  </h3>

  <form onSubmit={handleSubmit} className="space-y-1">
    <fieldset className="fieldset flex flex-col items-center ">
    
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
    </fieldset>

    <div className="flex justify-center">
      <button type="submit" className="btn btn-primary w-1/2">
        Try Now
      </button>
    </div>
  </form>

  {successMsg && (
    <p className="text-green-600 font-medium mt-4 text-center">
      {successMsg}
    </p>
  )}
</div>

    </div>
  );
};

export default ToyDetails;
