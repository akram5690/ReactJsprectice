import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  const loggedin = sessionStorage.getItem("user");

  const logoutbtn = () => {
    sessionStorage.removeItem("user");
    navigate("/Login"); 
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">MyShop</NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>

              {loggedin && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Addproduct">Add Product</NavLink>
                </li>
              )}

              {!loggedin && (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/Login">Login</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/Register">Register</NavLink>
                  </li>
                </>
              )}
            </ul>

            <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success me-2">Search</button>

              {loggedin && (
                <button className="btn btn-outline-danger" onClick={logoutbtn} type="button">
                  Logout
                </button>
              )}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
