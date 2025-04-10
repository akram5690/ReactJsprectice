import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRouts = () => {
    const autentic = sessionStorage.getItem("addminlogin") 
    const autentic2 = sessionStorage.getItem("logdata")
    return (autentic || autentic2) ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRouts;
