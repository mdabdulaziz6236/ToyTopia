import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ children, className, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-pink-500 btn-primary  underline font-bold"
          : `${className} hover:bg-blue-500 font-bold  `
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLink;
