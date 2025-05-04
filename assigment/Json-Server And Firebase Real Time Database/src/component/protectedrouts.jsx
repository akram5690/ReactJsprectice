import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Protectedrouts = () => {
  const auth = sessionStorage.getItem("userEmail")
  return (auth) ? <Outlet /> : <Navigate to="/Loginpage" />;
}

export default Protectedrouts
