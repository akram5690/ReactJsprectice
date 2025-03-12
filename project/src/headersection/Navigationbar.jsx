import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Navlogic from './navlogic';
import logo from '../images/logo.png';

const Navigationbar = () => {
  return (
    <header 
    style={{
      backgroundImage: `url('https://d.newsweek.com/en/full/2096815/astronaut-spaceman-do-spacewalk.jpg')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      height: "100vh"
    }}
  >
    <Navbar expand="lg" className="navbar navbar-dark bg-white py-3 shadow-lg opacity-50">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img src={logo} alt="Logo" className="img-fluid me-2" style={{ width: "100px", height: "50px"}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navlogic />
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div className="d-flex flex-column justify-content-center align-items-center h-100">
        <h3 className="display-5 fw-bold text-danger">Explore humans in</h3>
        <h1 className="display-1 fw-bold text-uppercase" style={{fontSize: "20rem", fontFamily:"initial", textShadow: "white 0px 0px 20px",
    color: "#d5d4d4"}}>SPACE</h1>
      </div>
    </header>
  );
}

export default Navigationbar;
