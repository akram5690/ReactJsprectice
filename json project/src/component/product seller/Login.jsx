import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [logindata, setLogindata] = useState({
        email: "",
        pass: ""
    });

    const handleChange = (e) => {
        setLogindata({ ...logindata, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8000/register");
            const users = await response.json();

            const matchedUser = users.find(
                (user) => user.email === logindata.email && user.pass === logindata.pass
            );

            if (matchedUser) {
                alert("Login successful!");
                sessionStorage.setItem("user", JSON.stringify(matchedUser));
                setLogindata({ email: "", pass: "" });
                navigate("/Addproduct");
            } else {
                alert("Invalid email or password");
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="container">
            <form className="w-50 mx-auto shadow p-4 mt-5" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="row g-2">
                    <div className="col-12">
                        <input type="text" value={logindata.email} onChange={handleChange} placeholder="Email" className="form-control" name="email" required
                        />
                    </div>
                    <div className="col-12">
                        <input type="password" value={logindata.pass} onChange={handleChange} placeholder="Password" className="form-control" name="pass" required
                        />
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" type="submit">
                            Login
                        </button>
                    </div>
                    <div className="col-12">
                        <span>New User? </span>
                        <NavLink to="/Register">Register</NavLink>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
