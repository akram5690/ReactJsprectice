import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigationbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">MyReactApp</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <NavLink to="/counter" className="nav-link" activeClassName="active">Counter App</NavLink>
            <NavLink to="/Addtodo" className="nav-link" activeClassName="active">Todo App</NavLink>
            <NavLink to="/Crudapplication" className="nav-link" activeClassName="active">CRUD Operation</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigationbar;
