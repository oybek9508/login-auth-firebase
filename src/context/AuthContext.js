import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  const value = {
    currentUser,
    signup,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && props.children}
    </AuthContext.Provider>
  );
};
