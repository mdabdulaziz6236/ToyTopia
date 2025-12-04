import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";
import {
  FaUserEdit,
  FaSignOutAlt,
  FaCamera,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

const Profile = () => {
  const { user, logout, updateUser, setUser } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [nameError, setNameError] = useState("");

  const handleLogout = () => {
    logout()
      .then(() => toast.success("Successfully Logged Out"))
      .catch((err) => toast.error(err.message));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photoUrl.value;

    if (name.length < 5) {
      setNameError("Name must be at least 5 characters");
      return;
    }
    setNameError("");
    setLoading(true);

    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        toast.success("Profile Updated!");
        setIsEditing(false);
      })
      .catch((err) => toast.error(err.message))
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-linear-to-br from-purple-50 via-white to-pink-50 py-10">
      <title>Profile</title>
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="relative z-10 w-full max-w-2xl bg-white/60 backdrop-blur-xl border border-white/50 shadow-2xl rounded-3xl overflow-hidden p-8 md:p-12">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          {/* Left Side: Photo & Status */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative group">
              <div className="absolute -inset-1  rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg"
                src={user?.photoURL || ""}
                alt="Profile"
              />
              {/* Verification Badge */}
              <div className="absolute bottom-2 right-2 bg-white rounded-full p-1 shadow-md">
                {user?.emailVerified ? (
                  <FaCheckCircle
                    className="text-green-500 text-xl"
                    title="Verified"
                  />
                ) : (
                  <FaTimesCircle
                    className="text-red-500 text-xl"
                    title="Not Verified"
                  />
                )}
              </div>
            </div>

            <div className="text-center">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Joined
              </p>
              <p className="text-sm font-semibold text-gray-600">
                {user?.metadata?.creationTime?.slice(4, 16)}
              </p>
            </div>
          </div>

          {/* Right Side: Info or Form */}
          <div className="flex-1 w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-pink-600 to-purple-600">
                {isEditing ? "Edit Profile" : "My Profile"}
              </h2>
              {!isEditing && (
                <button
                  onClick={handleLogout}
                  className="btn btn-sm btn-outline btn-error rounded-full"
                >
                  <FaSignOutAlt /> Logout
                </button>
              )}
            </div>

            {!isEditing ? (
              // === VIEW MODE ===
              <div className="space-y-4 animate-fade-in-up">
                <div className="bg-white/50 p-4 rounded-2xl border border-white/60 shadow-sm">
                  <p className="text-xs text-gray-500 uppercase font-bold">
                    Full Name
                  </p>
                  <p className="text-xl font-semibold text-gray-800">
                    {user?.displayName}
                  </p>
                </div>

                <div className="bg-white/50 p-4 rounded-2xl border border-white/60 shadow-sm">
                  <p className="text-xs text-gray-500 uppercase font-bold">
                    Email Address
                  </p>
                  <p className="text-lg text-gray-700">{user?.email}</p>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setIsEditing(true)}
                    className="btn w-full bg-linear-to-r from-pink-500 to-purple-600 border-none text-white shadow-lg hover:shadow-pink-500/30 hover:scale-[1.02] transition-transform rounded-xl text-lg capitalize"
                  >
                    <FaUserEdit className="mr-2" /> Update Profile
                  </button>
                </div>
              </div>
            ) : (
              // === EDIT MODE ===
              <form
                onSubmit={handleUpdate}
                className="space-y-5 animate-fade-in-up"
              >
                {/* Name Input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-gray-600">
                      Full Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={user?.displayName}
                    className="input input-bordered w-full rounded-xl focus:outline-none focus:border-pink-500 bg-white/70"
                    placeholder="Enter full name"
                  />
                  {nameError && (
                    <p className="text-red-500 text-xs mt-1">{nameError}</p>
                  )}
                </div>

                {/* Photo Input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-gray-600">
                      Photo URL
                    </span>
                  </label>
                  <div className="relative">
                    <FaCamera className="absolute left-4 top-3.5 text-gray-400" />
                    <input
                      type="text"
                      name="photoUrl"
                      defaultValue={user?.photoURL}
                      className="input input-bordered w-full pl-10 rounded-xl focus:outline-none focus:border-pink-500 bg-white/70"
                      placeholder="https://example.com/photo.jpg"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="btn flex-1 bg-gray-200 border-none text-gray-700 hover:bg-gray-300 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn flex-1 bg-linear-to-r from-pink-500 to-purple-600 border-none text-white shadow-lg rounded-xl"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="loading loading-spinner loading-sm"></span>
                    ) : (
                      "Save Changes"
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
