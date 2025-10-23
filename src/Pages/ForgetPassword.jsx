import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../Firebase/Firebase.config";

const auth = getAuth(app)
console.log(auth)

const ForgetPassword = () => {
  const [email, setEmail] = useState(() => {
    return localStorage.getItem("forgetEmail") || "";
  });
  const handleResetPassword = (e) => {
    e.preventDefault();
    // Redirect to Gmail after clicking reset button
    // window.location.href = "https://mail.google.com";
    console.log(email)
    sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    // ..
    console.log("go your email")
  })
  .catch((error) => {
    
    const errorMessage = error.message;
    console.lgo(errorMessage)
    // ..
  });

  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-pink-300 ">
      <div className="max-w-sm my-15 mx-auto mt-10 p-6 bg-base-200 rounded">
        <title>Forget password</title>
        <h2 className="text-2xl font-bold mb-4 text-center">Forget Password</h2>

        <form onSubmit={handleResetPassword}>
          <input
            type="email"
            className="input input-bordered w-full mb-3"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit" className="btn btn-primary w-full">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
