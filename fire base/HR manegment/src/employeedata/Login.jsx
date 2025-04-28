import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const Login = () => {
    const navigate = useNavigate()
    const [logdata, setlogdata] = useState({
        email: "",
        pass: "",
    })

    const hendelchange = (e) => {
        setlogdata({ ...logdata, [e.target.name]: e.target.value });
    }

    const hendelsubmite = async (e) => {
        e.preventDefault();
        try {
            //Firebase Authentication function that logs in a user using email and password
            await signInWithEmailAndPassword(auth, logdata.email, logdata.pass);
            alert("Login successful ✅");
            navigate("/Employee");
        } catch (error) {
            alert("Email or password is incorrect ❌");
            console.error("Login Error:", error.message);
        }
    };

    return (
        <>
            <div className="container-fluid w-50 vh-100 d-flex justify-content-center align-items-center bg-light">
                <div className="row w-100 shadow-lg rounded overflow-hidden">

                    <div className="col-md-6 d-none d-md-flex bg-primary text-white justify-content-center align-items-center flex-column p-4">
                        <h2>Welcome Back!</h2>
                        <p>Login to continue</p>
                    </div>


                    <div className="col-md-6 bg-white p-5">
                        <h3 className="mb-4 text-center">Login</h3>
                        <form onSubmit={hendelsubmite}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input onChange={hendelchange} value={logdata.email} name='email' type="email" className="form-control" id="email" placeholder="Enter your email" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input onChange={hendelchange} value={logdata.pass} name='pass' type="password" className="form-control" id="password" placeholder="Enter your password" />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Login</button>
                        </form>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Login;
