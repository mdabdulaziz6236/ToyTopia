import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-base-200">
      <span className="loading loading-spinner loading-lg text-primary"></span>
      <p className="mt-4 text-lg font-semibold text-gray-600">Loading...</p>
    </div>
  );
};

export default Loading;
