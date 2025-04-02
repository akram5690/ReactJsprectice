import React from 'react'
import { useState } from 'react'

const Loginbtn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => setIsLoggedIn(true);
    const handleLogout = () => setIsLoggedIn(false);

    return (
        <div className="container text-center mt-5">
            <div className="card p-4 shadow-lg">
                <h2 className="mb-3">User Login</h2>
                <button className="btn btn-success m-2" onClick={handleLogin}>Login</button>
                <button className="btn btn-danger m-2" onClick={handleLogout}>Logout</button>
                <p className="mt-3 fw-bold">{isLoggedIn ? "Logged In" : "Logged Out"}</p>
            </div>
        </div>
    );
}

export default Loginbtn
