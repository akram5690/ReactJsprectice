import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navigationbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = sessionStorage.getItem("userEmail");

  const handleLogout = () => {
    alert("login out")
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold text-primary" to="/">
          🛒 MyShop
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/addproduct" className="nav-link">Add your Product</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Addtocard" className="nav-link">Addtocard</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Loginpage" className="nav-link">Login</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Registerpage" className="nav-link">Register</NavLink>
                </li>
          </ul>
 
            <form className="d-flex ms-lg-4 mt-3 mt-lg-0" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
              <button onClick={handleLogout} className="btn btn-primary mx-2" type="button">
                Logout
              </button>
            </form>
        </div>
      </div>
    </nav>
  );
};

export default Navigationbar;
