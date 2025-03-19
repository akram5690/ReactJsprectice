import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import Navlogic from "./navlogic";
import logo from "../images/logo.png";
import Cardanlys from "../main/Cardanlys";

const Navigationbar = () => {
  return (
    <header
      style={{
        backgroundImage: `url('https://d.newsweek.com/en/full/2096815/astronaut-spaceman-do-spacewalk.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "fit-content",
      }}
    >
      {/* Navbar with Offcanvas for Hamburger Menu */}
      <Navbar expand="lg" className="navbar navbar-dark bg-white py-3 shadow-lg opacity-75" sticky="top">
        <Container>
          {/* Brand Logo */}
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img src={logo} alt="Logo" className="img-fluid me-2" style={{ width: "80px", height: "40px" }} />
          </Navbar.Brand>

          {/* Hamburger Menu Toggle Button */}
          <Navbar.Toggle aria-controls="offcanvasNavbar" className="border-0 bg-dark" />

          {/* Offcanvas (Side Menu) */}
          <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Navigation</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Navlogic />
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <div className="d-flex flex-column justify-content-center align-items-center text-center h-100 p-5">
        <h3 className="display-5 fw-bold text-primary my-4">Explore Humans in</h3>
        <h1
          className="display-1 fw-bold text-uppercase"
          style={{
            fontSize: "15vw", // Makes text responsive
            fontFamily: "initial",
            textShadow: "white 0px 0px 20px",
            color: "#d5d4d4",
          }}
        >
          SPACE
        </h1>
        <Cardanlys />
      </div>
    </header>
  );
};

export default Navigationbar;
