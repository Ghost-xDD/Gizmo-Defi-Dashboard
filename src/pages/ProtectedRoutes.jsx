import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children, isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/connectwallet" />;
    console.log(isAuthenticated);
  }
  return children;
};

export default ProtectedRoutes;
