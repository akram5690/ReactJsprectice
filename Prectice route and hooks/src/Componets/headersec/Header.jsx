import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <h2>Navbar</h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="text-decoration-none p-3 text-dark active" aria-current="page" to="/">Home</NavLink>
                            <NavLink className="text-decoration-none p-3 text-dark" to="/About">About</NavLink>
                            <NavLink className="text-decoration-none p-3 text-dark" to="/Gallery">Gallery</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;
