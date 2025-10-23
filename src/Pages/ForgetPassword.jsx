// ForgetPassword.jsx
import { useLocation } from "react-router";
import { useState, useEffect } from "react";

const ForgetPassword = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Redirect to Gmail after clicking reset button
    window.location.href = "https://mail.google.com";
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-base-200 rounded">
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
  );
};

export default ForgetPassword;
