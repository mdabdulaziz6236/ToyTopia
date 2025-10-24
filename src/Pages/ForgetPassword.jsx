import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../Firebase/Firebase.config";
import { toast } from "react-toastify";

const auth = getAuth(app);

const ForgetPassword = () => {
  const [email, setEmail] = useState(() => {
    return localStorage.getItem("forgetEmail") || "";
  });
  const handleResetPassword = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setEmail("");
        e.target.reset();
        window.location.href = "https://mail.google.com";
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage)
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-green-200 via-emerald-200 to-teal-200 ">
      <div className="max-w-sm my-15 mx-auto mt-10 p-6 bg-base-200 rounded">
        <title>Forget password</title>
        <h2 className="text-2xl font-bold mb-4 text-center">Forget Password</h2>

        <form onSubmit={handleResetPassword}>
          <input
            type="email"
            className="input input-bordered w-full mb-3"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
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
