import React, { use, useState } from "react";
// import { useNavigate } from 'react-router';
import { AuthContext } from "../Provider/AuthContext";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const { createUser, setUser, updateUser } = use(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    if (name.length < 5) {
      setNameError("Name should be more then 5 character.");
      return;
    } else {
      setNameError("");
    }
    const email = event.target.email.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(email)) {
      setEmailError("");
    } else {
      setEmailError(
        " Please enter a valid email address (e.g., user@example.com)"
      );
      return;
    }
    const photoUrl = event.target.photoUrl.value;
    const password = event.target.password.value;
    const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (regex.test(password)) {
      setPasswordError("");
    } else {
      setPasswordError(
        "Password must include uppercase, lowercase and be at least 6 characters long!"
      );
      return;
    }
    console.log({ name, photoUrl, email, password });

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateUser({
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photoUrl });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
          toast.success("Register Successful.")
        // alert("register successfully");
      })
      .catch((error) => {
        // const errorCode = error.code
        const errorMessage = error.message;
        console.log("errorMessage:", errorMessage);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="font-semibold text-3xl text-center mt-5">
          Register your account
        </h1>
        {/* {import.meta.env.VITE_name} */}
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* name */}
            <label className="label">Your Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Enter Your Name"
              required
            />
            {nameError && (
              <p className="text-sm text-secondary text-center">{nameError}</p>
            )}
            {/* email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            {emailError && (
              <p className="text-sm text-secondary text-center">{emailError}</p>
            )}
            {/* phot url */}
            <label className="label">Photo URL</label>
            <input
              name="photoUrl"
              type="text"
              className="input"
              placeholder="Enter Your Photo URL"
              required
            />

            {/* password */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />
            {passwordError && (
              <p className="text-sm text-secondary text-center">
                {passwordError}
              </p>
            )}

            <button type="submit" className="btn btn-neutral mt-5">
              Sign Up
            </button>
          </fieldset>
          <p className="font-semibold text-center">
            Already have an account ? Please{" "}
            <Link
              to="/login"
              className="text-green-500 font-semibold  hover:underline hover:text-pink-500"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
