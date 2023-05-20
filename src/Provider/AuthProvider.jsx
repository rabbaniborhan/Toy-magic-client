/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "./../Firebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);



  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };



  const profileUpdate = (displayName, photoURL) => {
    console.log(displayName, photoURL);
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  };


  const login =(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }


  
  const googleLogin=()=>{
    return signInWithPopup(auth, googleprovider)

  }




  const logOut =()=>{
    setLoading(true);
    return signOut(auth);
  }


  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, loggedUser => {
        setUser(loggedUser);
        setLoading(false);
    })

    return () => {
        unsubscribe();
    }
}, [])


  const authInfo = {
    user,
    loading,
    createUser,
    profileUpdate,
    login,
    googleLogin,
    logOut
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
