import React, {  useState } from "react";
import { AuthContext } from "./AuthContext";
import app from "../Firebase/Firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // const [user, setUser] = useState({
  //   name: "MD. ABDUL AZIZ",
  //   email: 'md.abdulaziz6236@gmail.com'
  // })
  console.log(user && user.name);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  
  const authData = {
    createUser,
    user,
    setUser,
    login,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};
export default AuthProvider;
