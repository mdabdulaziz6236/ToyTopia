import React from "react";
import { AuthContext } from "./AuthContext";
import app from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authData = {
    createUser,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};
export default AuthProvider;
