import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";

const Login = () => {
  const {login,setUser} = use(AuthContext)
  const navigate = useNavigate()
    const [passwordError, setPasswordError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [error,setError] = useState('')
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(email)) {
      setEmailError("");
    } else {
      setEmailError(
        " Please enter a valid email address (e.g., user@example.com)"
      );
      return;
    }
    const password = e.target.password.value;
    const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    if (regex.test(password)) {
      setPasswordError("");
    } else {
      setPasswordError(
        "Password must include uppercase, lowercase and be at least 6 characters long!"
      );

      return;
    }
    login(email,password)
    .then(userCredential =>{
        const user = userCredential.user
        
        alert('user sign in' , user.name)
        setUser(user)
        navigate('/') 
    }).catch(error => {
        // const errorCode = error.code 
        const errorMessage = error.message
        setError(errorMessage)
    })
    console.log(email, password);
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="font-semibold text-3xl text-center mt-5">
          Login your account
        </h1>
        <form onSubmit={handleLogIn} className="card-body">
          <fieldset className="fieldset">
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

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-5">
              Login
            </button>
          </fieldset>
          <p className="font-semibold text-center">
            Dont’t Have An Account ?{" "}
            <Link
              to="/register"
              className="text-green-500 font-semibold  hover:underline hover:text-pink-500"
            >
              Register
            </Link>
          </p>
          {error ? (
            <p className="text-center text-secondary font-semibold">{error}</p>
          ):""}
        </form>
      </div>
    </div>
  );
};

export default Login;
