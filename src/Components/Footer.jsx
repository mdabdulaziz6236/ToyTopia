import React from "react";

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A2E] pt-8 lg:pt-10">
      <div className="w-11/12 mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0">
          {/* Logo & App Name */}
          <div className="flex flex-col md:flex-row items-center md:items-start md:w-1/4">
            <Link
              to="/"
              className="text-white font-bold md:text-xl lg:text-2xl"
            >
              Kids Toy Store
            </Link>
          </div>

          {/* Quick Links */}
          <div className="text-white md:w-1/4">
            <h2 className="text-lg lg:text-[18px] font-semibold mb-3">
              Quick Links
            </h2>
            <ul>
              <li className="mb-2 hover:text-purple-400">
                <Link to="/">Home</Link>
              </li>

              <li className="mb-2 hover:text-purple-400">
                <Link to="/login">Login</Link>
              </li>
              <li className="mb-2 hover:text-purple-400">
                <Link>Contact</Link>
              </li>
              <li className="mb-2 hover:text-purple-400">
                <Link>Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-white md:w-1/4">
            <h2 className="text-lg lg:text-[18px] font-semibold mb-3">
              Social Links
            </h2>
            <div className="flex items-center gap-3 text-3xl lg:text-4xl">
              <FaFacebookSquare className="hover:text-blue-600 cursor-pointer" />
              <FaInstagramSquare className="hover:text-pink-500 cursor-pointer" />
              <FaTwitterSquare className="hover:text-blue-400 cursor-pointer" />
              <FaLinkedin className="hover:text-blue-700 cursor-pointer" />
            </div>
          </div>

          {/* Newsletter */}
          <div className="text-white md:w-1/4">
            <h2 className="text-lg lg:text-[18px] font-semibold mb-3">
              Kids Toy Store
            </h2>
            <p className="mb-3 text-sm lg:text-base">
              Buy to our products for the kids with offers!
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-l-md bg-gray-300 text-black w-full"
              />
              <button className="bg-purple-600 hover:bg-purple-800 p-2 rounded-r-md font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* App Download Section */}

        {/* Bottom Section */}
        <div className="border-t border-gray-500 ">
          <p className="text-center text-white py-5 text-sm md:text-base">
            Copyright © 2025 - All rights reserved | Designed by Toy Topia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
