import React, { use, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";

const Profile = () => {
  const [nameError, setNameError] = useState("");
  const { user, logout, updateUser, setUser } = use(AuthContext);
  const handleLogout = () => {
    logout()
      .then(() => {
        alert("user Logged out");
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  const handleUpdateProfile = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    if (name.length < 5) {
      setNameError("Name should be more then 5 character.");
      return;
    } else {
      setNameError("");
    }
    const photoUrl = event.target.photoUrl.value;
    updateUser({
      displayName: name,
      photoURL: photoUrl,
    })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photoUrl });
        event.target.reset();
        toast.success("Profile updated");
      })
      .catch((error) => {
        toast.error(error);
        setUser(user);
      });
  };

  return (
    <div className="min-h-screen py-10 bg-white  flex justify-center items-center ">
      <title>Profile</title>
      <div className="card w-96 bg-linear-to-t/hsl from-indigo-500 to-teal-400 shadow-2xl p-6 ">
        <div className="flex flex-col items-center space-y-4">
          {/* User Photo */}
          <img
            src={user && user.photoURL}
            className="w-24 h-24 rounded-full border-4 border-primary"
          />

          {/* User Basic Info */}
          <h2 className="text-2xl font-bold text-center">
            {user && user.displayName}
          </h2>
          <p className="text-gray-600">{user && user.email}</p>

          {/* More Details */}
          <div className="divider"></div>
          <div className="w-full text-sm text-gray-700 space-y-2">
            <p>
              <span className="font-semibold">Email Verified:</span>{" "}
              {user && user.emailVerified ? (
                <span className="text-green-600">Yes ✅</span>
              ) : (
                <span className="text-red-500">No ❌</span>
              )}
            </p>
            <p>
              <span className="font-semibold">User ID:</span> {user && user.uid}
            </p>
            <p>
              <span className="font-semibold">Account Created:</span>{" "}
              {user && user.metadata?.creationTime}
            </p>
            <p>
              <span className="font-semibold">Last Sign-in:</span>{" "}
              {user && user.metadata?.lastSignInTime}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="divider"></div>
          <div className="w-full space-y-2">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              {/* {import.meta.env.VITE_name} */}
              <form onSubmit={handleUpdateProfile} className="card-body">
                <fieldset className="fieldset">
                  {/* name */}
                  <label className="label">Your Name</label>
                  <input
                    name="name"
                    type="text"
                    className="input"
                    placeholder="Enter Your Name"
                  />
                  {nameError && (
                    <p className="text-sm text-secondary text-center">
                      {nameError}
                    </p>
                  )}

                  {/* phot url */}
                  <label className="label">Photo URL</label>
                  <input
                    name="photoUrl"
                    type="text"
                    className="input"
                    placeholder="Enter Your Photo URL"
                  />
                  <button
                    type="submit"
                    className="btn hover:bg-indigo-500 hover:border-0 btn-neutral mt-5"
                  >
                    Update Profile
                  </button>
                </fieldset>
              </form>
            </div>
            {/*  logout */}
            <button
              onClick={handleLogout}
              className="btn btn-secondary text-[16px] font-bold hover:bg-white hover:text-black hover:border-0 w-full"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
