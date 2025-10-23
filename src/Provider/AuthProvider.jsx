import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import app from "../Firebase/Firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
const googleProvider = new GoogleAuthProvider()
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle = () => {
    setUserLoading(true)
    return signInWithPopup(auth, googleProvider)
    
  }
  const login = (email, password) => {
    setUserLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    return signOut(auth);
  };
  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setUserLoading(false);
      return () => unsubscribe();
    });
  }, []);
  const authData = {
    createUser,
    user,
    setUser,
    login,
    updateUser,
    logout,
    userLoading,
    setUserLoading,
    signInWithGoogle,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};
export default AuthProvider;
