import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ children, className, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-pink-500 btn-primary  underline font-bold text-xl"
          : `${className} hover:bg-purple-500 font-semibold text-xl `
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLink;
