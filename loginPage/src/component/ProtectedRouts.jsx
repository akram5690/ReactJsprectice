import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRouts = () => {
    const autentic = JSON.parse(localStorage.getItem("logindata"))
    return autentic ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRouts;
