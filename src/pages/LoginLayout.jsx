import React from 'react';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
  return (
    <div className="bg-main-dark-bg">
      <Outlet />
    </div>
  );
};

export default LoginLayout;
