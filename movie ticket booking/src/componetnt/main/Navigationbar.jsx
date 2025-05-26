import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/nav.css';

const Navigationbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top navStyle">
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold text-dark ms-5" to="/">
            <span>Sh<span role="img" aria-label="clapper">🎬</span>wTime</span>


        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/Bookingpage">Booking</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/Selecttheter">Thaiter</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/Selectseats">seats</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/ReceiptPage">ReceiptPage</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/Addmovies">Addmovies</NavLink>
            </li>
          </ul>

          <form className="d-flex mx-auto search-form" role="search">
            <input
              className="form-control custom-search-input"
              type="search"
              placeholder="Search Movies..."
              aria-label="Search"
            />
            <button className="btn custom-search-btn ms-2" type="submit">Search</button>
          </form>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/Regestar">Register</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/Login">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigationbar;
