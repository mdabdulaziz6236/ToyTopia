import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import useToys from "../Hooks/useToys";
import {
  Star,
  User,
  Package,
  Heart,
  ArrowLeft,
  Mail,
  CheckCircle,
  Send,
} from "lucide-react";
import { toast } from "react-toastify";
import LoadingPage from "../Components/Loading";

const ToyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toys, loading } = useToys();

  const [toy, setToy] = useState(null);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (toys.length > 0) {
      const foundToy = toys.find(
        (t) => String(t.toyId) === String(id) || String(t._id) === String(id)
      );
      setToy(foundToy);
    }
  }, [toys, id]);

  useEffect(() => {
    if (toy) {
      const storedIds = JSON.parse(localStorage.getItem("wishlistIds")) || [];
      if (storedIds.includes(toy.toyId || toy._id)) {
        setIsInWishlist(true);
      }
    }
  }, [toy]);

  const handleAddToWishlist = () => {
    if (!toy) return;
    const toyIdentifier = toy.toyId || toy._id;
    const storedIds = JSON.parse(localStorage.getItem("wishlistIds")) || [];

    if (!storedIds.includes(toyIdentifier)) {
      storedIds.push(toyIdentifier);
      localStorage.setItem("wishlistIds", JSON.stringify(storedIds));
      setIsInWishlist(true);
      toast.success("Added to your Wishlist!");
    } else {
      toast.info("Already in your Wishlist");
    }
  };

  const handleRequestSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success("Request sent successfully!");
      e.target.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  if (loading || (!toy && loading)) {
    return <LoadingPage></LoadingPage>;
  }

  if (!toy) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-400">
          Toy not found
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 btn btn-outline btn-sm md:btn-md"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-6 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-primary mb-4 md:mb-6 transition-colors text-sm md:text-base"
        >
          <ArrowLeft size={18} className="mr-2" /> Back to Toys
        </button>

        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* LEFT: Image Section */}
          <div className="relative group">
            {/* Responsive  (desktop) */}
            <div className="overflow-hidden rounded-2xl shadow-xl bg-white h-64 sm:h-80 lg:h-[500px] w-full">
              <img
                src={toy.pictureURL}
                alt={toy.toyName}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs md:text-sm font-medium">
              {toy.subCategory}
            </div>
          </div>

          {/* RIGHT: Details Section */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-2xl py-3 sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                {toy.toyName}
              </h1>

              {/* Rating & Stock */}
              <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-3 mb-4 md:mb-6">
                <div className="flex items-center text-yellow-500 bg-yellow-50 px-2 py-1 rounded-lg text-sm md:text-base">
                  <Star size={16} className="md:w-[18px]" fill="currentColor" />
                  <span className="ml-1 font-bold text-gray-800">
                    {toy.rating}
                  </span>
                  <span className="text-gray-400 text-xs md:text-sm ml-1">
                    (120)
                  </span>
                </div>
                <div className="flex items-center text-green-600 bg-green-50 px-2 py-1 rounded-lg text-sm md:text-base">
                  <Package size={16} className="md:w-[18px]" />
                  <span className="ml-2 font-medium">
                    {toy.availableQuantity > 0 ? "In Stock" : "Out of Stock"}
                  </span>
                </div>
              </div>

              <div className="text-2xl md:text-3xl font-bold text-primary mb-4 md:mb-6">
                <span className="prose prose-sm md:prose-base text-gray-600">
                  Price:{" "}
                </span>{" "}
                ${toy.price}
              </div>

              <div className="prose prose-sm md:prose-base text-gray-600 mb-6 md:mb-8">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                  Description
                </h3>
                <p>{toy.description}</p>
              </div>

              {/* Seller Card */}
              <div className="flex items-center p-3 md:p-4 bg-white border border-gray-100 rounded-xl shadow-sm mb-8">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                  <User size={20} className="md:w-6 md:h-6" />
                </div>
                <div className="ml-3 md:ml-4 overflow-hidden">
                  <p className="text-xs md:text-sm text-gray-500">Sold by</p>
                  <p className="font-bold text-gray-900 text-sm md:text-base truncate">
                    {toy.sellerName}
                  </p>
                  <p className="text-xs text-gray-400 truncate">
                    {toy.sellerEmail}
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-3">
                <h3 className="text-2xl  font-extrabold text-gray-900 leading-tight">
                  {isInWishlist ? "Added" : "Add to Wishlist"}
                </h3>
                <button
                  onClick={handleAddToWishlist}
                  disabled={isInWishlist}
                  className={`p-2 md:p-3 rounded-full border shrink-0 ${
                    isInWishlist
                      ? "bg-red-50 border-red-200 text-red-500"
                      : "bg-white border-gray-200 text-gray-400 hover:text-red-500"
                  }`}
                >
                  <Heart
                    size={20}
                    className="md:w-6 md:h-6"
                    fill={isInWishlist ? "currentColor" : "none"}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Ultra-Modern Inquiry Form */}
        <div className="mt-16 bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
            {/* Left Side: Dark Elegant Sidebar */}
            <div className="lg:col-span-2 bg-[#0f172a] text-white p-10 flex flex-col justify-between relative overflow-hidden">
              {/* Abstract Background Shapes */}
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-20"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-blue-200 border border-white/10 mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  Live Response
                </div>

                <h3 className="text-3xl font-bold leading-tight mb-4">
                  Interested in this <br />{" "}
                  <span className="text-blue-400">Masterpiece?</span>
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Connect directly with the seller. Ask about the condition,
                  negotiate the price, or request more pictures.
                </p>
              </div>

              {/* Trust Badge at Bottom */}
              <div className="relative z-10 mt-10 bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="bg-green-500/20 p-2 rounded-full text-green-400">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Verified Seller</p>
                    <p className="text-xs text-slate-400">
                      Identity & Payment Verified
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Clean Form */}
            <div className="lg:col-span-3  p-5 bg-white relative">
              <form onSubmit={handleRequestSubmit} className="space-y-5">
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-gray-900">
                    Get in Touch
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Fill out the form below to start a conversation.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {/* Name Input */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="example@gmail.com"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                    Your Message
                  </label>
                  <textarea
                    placeholder="Hi, is this item still available?"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 h-32 resize-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className=" flex justify-center items-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-[50%] flex justify-center py-3.5 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all shadow-lg shadow-blue-500/30"
                  >
                    {isSubmitting ? (
                      <span className="loading loading-spinner"></span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Request
                        <Send
                          size={16}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
