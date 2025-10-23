import React, { use } from "react";
import MyContainer from "./MyContainer";
import MyLink from "./MyLink";

import { AuthContext } from "../Provider/AuthContext";
import { Link, useNavigate } from "react-router";
import Loading from "./Loading";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = use(AuthContext);
  const links = (
    <>
      <li>
        <MyLink to={"/"}>Home</MyLink>
      </li>
      <li>
        <MyLink to={"/Login"}>Login</MyLink>
      </li>
      <li>
        <MyLink to={"/register"}>Register</MyLink>
      </li>
      {user && (
        <li>
          <MyLink to={"/profile"}>Profile</MyLink>
        </li>
      )}
    </>
  );
  const handleLogout = () => {
    logout()
      .then(() => {
        console.log("Logout successful, navigating...");
        navigate("/");
        toast.success("user Logged out");

        // alert("user Logged out");
      })
      .catch((error) => {
        console.log("this is logged out error:", error);
      });
  };

  return (
    <div className=" bg-gradient-to-r from-indigo-500 to-teal-400 drop-shadow-lg sticky top-0 z-50">
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
          <Link
            to="/"
            className=" text-2xl hover:text-shadow-fuchsia-100 hover:underline font-bold"
          >
            ToyTopia
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-5">
            {user ? (
              <img
                className="w-12 rounded-full"
                src={user.photoURL}
                alt={user.displayName || "User"}
                title={user.displayName || "User"} // <-- This shows the name on hover
              />
            ) : (
              ""
            )}

            {user ? (
              <Link onClick={handleLogout} className="btn btn-primary px-5">
                Logout
              </Link>
            ) : (
              <Link to="/login" className="btn btn-primary px-5">
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
