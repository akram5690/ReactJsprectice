  import React, { useState } from 'react';
  import './Loginpage.css';
  import { signInWithEmailAndPassword } from 'firebase/auth';
  import { auth } from '../firebase';
  import { Link, useNavigate } from 'react-router-dom';

  const Loginpage = () => {
    const navigate = useNavigate();
    const [logData, setLogData] = useState({
      email: '',
      pass: ''
    });

    const handleChange = (e) => {
      setLogData({ ...logData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const userCredential = await signInWithEmailAndPassword(auth, logData.email, logData.pass);
        const user = userCredential.user;

        sessionStorage.setItem("userEmail", user.email);
        sessionStorage.setItem("userId", user.uid);

        alert("Login successful");
        navigate("/");
      } catch (error) {
        alert("Email or password is incorrect");
        console.log("Login Error:", error.message);
      }
    };

    return (
      <div className="login-bg d-flex justify-content-center align-items-center min-vh-100">
        <div className="glass-card p-4 rounded-4 shadow-lg" style={{ width: '100%', maxWidth: '400px' }}>
          <h3 className="text-center mb-3 text-white">Welcome Back</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input onChange={handleChange} value={logData.email} name='email' type="email" className="form-control" id="email" placeholder="name@example.com" required />
              <label htmlFor="email">Email address</label>
            </div>
            <div className="form-floating mb-4">
              <input onChange={handleChange} value={logData.pass} name='pass' type="password" className="form-control" id="password" placeholder="Password" required />
              <label htmlFor="password">Password</label>
            </div>
            <div className="d-grid mb-2">
              <button type="submit" className="btn btn-light fw-bold">Login</button>
            </div>
            <p className="text-center text-white">
              Don’t have an account? <Link to="/Registerpage" className="text-info text-decoration-none">Register</Link>
            </p>
          </form>
        </div>
      </div>
    );
  };

  export default Loginpage;
