import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const Protectedrouts = () => {
  const protectdata = sessionStorage.getItem("user");
  return protectdata ? <Outlet /> : <Navigate to="/Login" />;
};

export default Protectedrouts;
