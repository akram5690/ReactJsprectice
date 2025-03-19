import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 my-4">
      <Container>
        <Row className="text-center text-md-start">
          {/* Column 1 - Logo & About */}
          <Col md={4} className="mb-3">
            <h5 className="fw-bold">🚀 Space Explorers</h5>
            <p className="text-white">
              Discover the wonders of space, missions, and innovations shaping the future.
            </p>
          </Col>

          {/* Column 2 - Quick Links */}
          <Col md={4} className="mb-3">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#" className="text-white text-decoration-none">Missions</a></li>
              <li><a href="#" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </Col>

          {/* Column 3 - Social Media */}
          <Col md={4} className="mb-3 text-center">
            <h5 className="fw-bold">Follow Us</h5>
            <div className="d-flex justify-content-center gap-3">
              <a href="#" className="text-white fs-4"><FaFacebook /></a>
              <a href="#" className="text-white fs-4"><FaTwitter /></a>
              <a href="#" className="text-white fs-4"><FaInstagram /></a>
              <a href="#" className="text-white fs-4"><FaLinkedin /></a>
            </div>
          </Col>
        </Row>

        {/* Bottom Line */}
        <hr className="border-light"/>
        <Row className="text-center">
          <Col>
            <p className="text-muted mb-0">© {new Date().getFullYear()} Space Explorers. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
