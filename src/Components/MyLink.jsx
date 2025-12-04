import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ children, className, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `text-pink-500 underline font-bold 
             text-base sm:text-lg md:text-xl 
             px-3 py-2 rounded-lg transition-all duration-300`
          : `${className} 
             font-semibold 
             text-base sm:text-lg md:text-[18px] 
             px-3 py-2 rounded-lg 
             hover:bg-purple-500 hover:text-white 
             transition-all duration-300`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLink;
