import React, {  useState } from 'react';
// import { useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import { Link } from 'react-router';

const Register = () => {
    const [nameError, setNameError] = useState("");
//   const navigate = useNavigate()
//   const { createUser, setUser, updateUser } = use(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    if (name.length < 5) {
      setNameError("Name should be more then 5 character.");
      return;
    } else {
      setNameError("");
    }
    const photoUrl = event.target.photoUrl.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log({ name, photoUrl, email, password });
    }
    return (
        <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="font-semibold text-3xl text-center mt-5">
          Register your account
        </h1>
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
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-5">
             Google Login
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