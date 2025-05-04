import React, { useState } from 'react';
import './Registerpage.css';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const Registerpage = () => {
  const navigate = useNavigate();
  const [regData, setRegData] = useState({
    name: '',
    email: '',
    pass: '',
    cpass: ''
  });

  const handleChange = (e) => {
    setRegData({ ...regData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (regData.pass !== regData.cpass) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, regData.email, regData.pass);
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        name: regData.name,
        email: regData.email
      });

      alert('Registration successful!');
      navigate("/");
    } catch (error) {
      console.error('Registration error:', error.message);
      alert(error.message);
    }

    setRegData({
      name: '',
      email: '',
      pass: '',
      cpass: ''
    });
  };

  return (
    <div className="auth-bg d-flex justify-content-center align-items-center min-vh-100">
      <div className="auth-card p-5 rounded">
        <h3 className="text-center mb-4 text-white">Create Account</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label text-white">Username</label>
            <input
              onChange={handleChange}
              value={regData.name}
              name="name"
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter username"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-white">Email address</label>
            <input
              onChange={handleChange}
              value={regData.email}
              name="email"
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label text-white">Password</label>
            <input
              onChange={handleChange}
              value={regData.pass}
              name="pass"
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label text-white">Confirm Password</label>
            <input
              onChange={handleChange}
              value={regData.cpass}
              name="cpass"
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm password"
              required
            />
          </div>
          <div className="d-grid mt-4">
            <button type="submit" className="btn btn-outline-light">Register</button>
          </div>
        </form>
        <p className="mt-3 text-center text-white">
          Already have an account? <Link to="/Loginpage" className="text-warning">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Registerpage;
