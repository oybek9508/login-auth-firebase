import React from "react";
import { useAuth } from "../context/AuthContext";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ Component, ...rest }) {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? { Component, ...props } : <Redirect to="/login" />;
      }}
    ></Route>
  );
}

export default PrivateRoute;
