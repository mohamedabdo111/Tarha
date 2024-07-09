import { Navigate, Outlet } from "react-router-dom";
import React from "react";
const ProtectedRoute = ({ auth, children }) => {
  if (auth === false) {
    return <Navigate to="/loginAdmin" replace></Navigate>;
  }

  return children ? children : <Outlet></Outlet>;
};

export default ProtectedRoute;
