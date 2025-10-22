import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ children, className, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-pink-500 underline "
          : `${className} font-semibold text-xl `
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLink;
