import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Protectroutsadmin = () => {
  const auth = JSON.parse(sessionStorage.getItem("adminlog"))
  return (auth) ? <Outlet />: <Navigate to="/Adminlogin" />
}

export default Protectroutsadmin
