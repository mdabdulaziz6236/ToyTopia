import React, { use, useState } from "react";
import MyContainer from "./MyContainer";
import MyLink from "./MyLink";

import { AuthContext } from "../Provider/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { User } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = use(AuthContext);
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const links = (
    <>
      <li>
        <MyLink to={"/"}>Home</MyLink>
      </li>
      <li>
        <MyLink to={"/all-items"}>All Toys</MyLink>
      </li>
      {user && (
        <li>
          <MyLink to={"/wishlist"}>WishList</MyLink>
        </li>
      )}


      <li>
        <MyLink to={"/about-us"}>About Us</MyLink>
      </li>
      <li>
        <MyLink to={"/contact"}>Contact</MyLink>
      </li>
      <li>
        <MyLink to={"/faq"}>FAQ</MyLink>
      </li>
    </>
  );
  const handleLogout = () => {
    logout()
      .then(() => {
        navigate(location?.state || "/");
        toast.success("user Logged out");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <div className=" bg-white drop-shadow-lg sticky top-0 z-50">
      <MyContainer className="navbar">
        <div className="navbar-start">
          <div className="dropdown z-50">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box  mt-3 w-52 p-2 shadow z-50"
            >
              {links}
            </ul>
          </div>
          <div className="pr-3">
            <img
              src="https://img.icons8.com/?size=100&id=CKfSpNCJfuKL&format=png"
              className="md:w-12 w-10 h-10 md:h-12"
              alt=""
            />
          </div>
          <Link
            to="/"
            className=" md:text-2xl text-xl lg:text-2xl text-pink-500 hover:text-purple-500 hover:underline font-bold"
          >
            ToyTopia
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-5 items-center relative">
            {user ? (
              <div className="relative">
                {/* Profile Picture */}
                <img
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-12 h-12 border border-gray-500 bg-blue-300 rounded-full cursor-pointer"
                  src={user.photoURL}
                  alt={user.displayName || "User"}
                />

                {/* Dropdown */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    {/* User Info */}
                    <div className="p-4 border-b border-gray-100">
                      <p className="font-semibold text-gray-800">
                        {user.displayName || "User"}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        {user.email}
                      </p>
                    </div>

                    {/* Profile Link */}
                    <Link
                      to="/profile"
                      className="flex  items-center gap-2 px-4  rounded my-1 text-gray-700  font-medium"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <User className="text-primary font-bold" size={18} />
                      Profile
                    </Link>

                    <button
                      onClick={handleLogout}
                      className=" btn  w-full  btn-sm bg-secondary text-left my-1 hover:bg-purple-500 rounded font-semibold"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="btn text-white hover:border-0 font-semibold bg-pink-500 hover:bg-purple-500 px-4 py-2"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;
