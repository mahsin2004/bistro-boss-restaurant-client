import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../config/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubScribe = onAuthStateChanged(auth, (currentUser) => {
      const loggedUser = currentUser?.email || user?.email;
      const userEmail = { email: loggedUser };
      setUser(currentUser);
      console.log("current user", currentUser);
      
      // if user exists then issue a token
      if (currentUser) {
        axios
          .post(
            "https://bistro-boss-restaurant-server-ashy.vercel.app/jwt",
            userEmail,
            { withCredentials: true }
          )
          .then((res) => {
            console.log("token response", res.data);
            setLoading(false);
          });
      } else {
        axios
          .post(
            "https://bistro-boss-restaurant-server-ashy.vercel.app/logout",
            userEmail,
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log(res.data);
            setLoading(false);
          });
      }
    });
    return () => {
      unsubScribe();
    };
  }, [user]);

  const googleUser = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const profileUpdate = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const Authentication = {
    googleUser,
    createUser,
    userLogin,
    logOut,
    profileUpdate,
    loading,
    user,
  };
  return (
    <AuthContext.Provider value={Authentication}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
