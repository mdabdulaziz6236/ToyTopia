import React, { useEffect, useState } from "react";
import useToys from "../Hooks/useToys";
import {
  Search,
  Filter,
  X,
  ChevronDown,
  Star,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router";
import { toast } from "react-toastify";

const AllToys = () => {
  const [wishlistIds, setWishlistIds] = useState([]);
  const { toys, loading } = useToys();

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("default");
  const [priceRange, setPriceRange] = useState(500);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);

  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerPage(5);
      } else if (width >= 1024 && width < 1280) {
        setItemsPerPage(20);
      } else if (width >= 1280) {
        setItemsPerPage(15);
      } else {
        setItemsPerPage(20);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setProducts(toys);
    setFilteredProducts(toys);
  }, [toys]);

  useEffect(() => {
    let tempProducts = [...products];

    if (searchQuery) {
      tempProducts = tempProducts.filter((product) =>
        product.toyName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== "All") {
      tempProducts = tempProducts.filter(
        (product) => product.subCategory === selectedCategory
      );
    }

    tempProducts = tempProducts.filter(
      (product) => product.price <= priceRange
    );

    if (sortOption === "price-asc") {
      tempProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      tempProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === "rating") {
      tempProducts.sort((a, b) => b.rating - a.rating);
    }

    setFilteredProducts(tempProducts);
    setCurrentPage(1);
  }, [products, searchQuery, selectedCategory, sortOption, priceRange]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const categories = ["All", ...new Set(products.map((p) => p.subCategory))];

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const storedIds = JSON.parse(localStorage.getItem("wishlistIds")) || [];
    setWishlistIds(storedIds);
  }, []);

  const handleAddToWishlist = (toy) => {
    const storedIds = JSON.parse(localStorage.getItem("wishlistIds")) || [];
    if (storedIds.includes(toy.toyId)) return;

    storedIds.push(toy.toyId);
    toast.success("Added to Wishlist");

    localStorage.setItem("wishlistIds", JSON.stringify(storedIds));
    setWishlistIds(storedIds);
  };

  return (
    <div className=" min-h-screen font-sans">
      <title>All Toys</title>
      <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-8">
        <div className="flex flex-col lg:flex-row gap-3">

          {/* --- SIDEBAR (Desktop) --- */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-gray-900 text-lg">Filters</h3>
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setPriceRange(500);
                    setSearchQuery("");
                  }}
                  className="text-xs text-blue-600 hover:underline"
                >
                  Reset
                </button>
              </div>

              <div className="mb-8">
                <h4 className="text-sm font-bold text-gray-800 mb-3 uppercase tracking-wider">
                  Categories
                </h4>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center cursor-pointer group">
                      <input
                        type="radio"
                        name="category"
                        className="peer sr-only"
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat)}
                      />
                      <div className="w-4 h-4 border border-gray-300 rounded-full mr-3 peer-checked:border-blue-600 peer-checked:bg-blue-600 flex items-center justify-center transition-all">
                        <div className="w-1.5 h-1.5 bg-white rounded-full opacity-0 peer-checked:opacity-100"></div>
                      </div>
                      <span
                        className={`text-sm ${
                          selectedCategory === cat
                            ? "text-blue-600 font-bold"
                            : "text-gray-600 group-hover:text-gray-900"
                        }`}
                      >
                        {cat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wider">
                    Max Price
                  </h4>
                  <span className="text-sm font-medium text-blue-600">${priceRange}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="500"
                  step="10"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>
            </div>
          </aside>

          {/* --- MOBILE FILTER BUTTON + SORT  --- */}
          <div className="flex justify-between mb-1 lg:hidden">
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md active:scale-95 transition"
            >
              <Filter size={18} />
              Filters
            </button>

            <select
              className="appearance-none bg-white border border-gray-300 text-gray-700 py-2 pl-4 pr-10 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-medium"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="default">Recommended</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
          <div className="flex justify-center mb-1 lg:hidden">
              <div className="relative  ">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
              </div>
          </div>

          {/* --- MOBILE FILTER DRAWER --- */}
          {isMobileFilterOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                onClick={() => setIsMobileFilterOpen(false)}
              ></div>
              

              <div className="fixed inset-y-0 right-0 w-80 bg-white shadow-2xl p-6 overflow-y-auto transform transition-transform duration-300">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-xl">Filter & Sort</h3>
                  <button
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <X className="h-6 w-6 text-gray-600" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold mb-3">Categories</h4>
                    {categories.map((cat) => (
                      <label
                        key={cat}
                        className="flex items-center gap-3 py-2 border-b border-gray-50 last:border-0 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="mobile-cat"
                          checked={selectedCategory === cat}
                          onChange={() => setSelectedCategory(cat)}
                          className="accent-blue-600 w-5 h-5"
                        />
                        <span className="text-gray-700">{cat}</span>
                      </label>
                    ))}
                  </div>
                  <div>
                    <h4 className="font-bold mb-3">Max Price: ${priceRange}</h4>
                    <input
                      type="range"
                      min="0"
                      max="500"
                      value={priceRange}
                      onChange={(e) => setPriceRange(Number(e.target.value))}
                      className="w-full accent-blue-600"
                    />
                  </div>
                </div>

                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="w-full mt-8 bg-blue-600 text-white py-3 rounded-lg font-bold shadow-lg shadow-blue-200"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}

          {/* --- MAIN PRODUCT GRID --- */}
          <main className="flex-1">

            <div className="flex justify-between mb-6 hidden lg:flex">
              <div className="relative  md:w-80">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
              </div>

              <div className="relative group">
                <select
                  className="appearance-none bg-white border border-gray-300 text-gray-700 py-2 pl-4 pr-10 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-medium hover:border-blue-400 transition-colors"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="default">Recommended</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-500 pointer-events-none" />
              </div>
            </div>

            {/* PRODUCT GRID */}
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-white p-4 rounded-xl shadow h-96 animate-pulse"
                  >
                    <div className="bg-gray-200 h-48 w-full rounded-lg mb-4"></div>
                    <div className="h-4 bg-gray-200 w-3/4 mb-2 rounded"></div>
                    <div className="h-4 bg-gray-200 w-1/2 rounded"></div>
                  </div>
                ))}
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
                <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">
                  No items found
                </h3>
                <p className="text-gray-500">Try adjusting filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {currentItems.map((toy) => (
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
                            wishlistIds.includes(toy.toyId)
                              ? "currentColor"
                              : "none"
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
            )}

            {filteredProducts.length > itemsPerPage && (
              <div className="mt-12 flex flex-col items-center gap-4">
                <div className="flex items-center gap-2 bg-white p-2 rounded-xl shadow-sm border border-gray-200">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (number) => {
                      if (
                        number === 1 ||
                        number === totalPages ||
                        (number >= currentPage - 1 &&
                          number <= currentPage + 1)
                      ) {
                        return (
                          <button
                            key={number}
                            onClick={() => handlePageChange(number)}
                            className={`w-10 h-10 flex items-center justify-center rounded-lg font-bold text-sm transition-all ${
                              currentPage === number
                                ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                                : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                            }`}
                          >
                            {number}
                          </button>
                        );
                      } else if (
                        number === currentPage - 2 ||
                        number === currentPage + 2
                      ) {
                        return (
                          <span key={number} className="px-1 text-gray-400">
                            ...
                          </span>
                        );
                      }
                      return null;
                    }
                  )}

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                <div className="text-sm text-gray-400 font-medium">
                  Page {currentPage} of {totalPages}
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
