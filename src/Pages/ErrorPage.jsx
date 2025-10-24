import React from "react";
import { Link } from "react-router";


const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-300 via-emerald-300 to-teal-300 text-gray-800">
      <h1 className="text-9xl font-extrabold text-pink-500 drop-shadow-lg">404</h1>
      <h2 className="text-3xl font-bold mt-4">Oops! Page Not Found</h2>
      
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-white text-teal-700 font-semibold rounded-xl shadow-md hover:bg-teal-600 hover:text-white transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
