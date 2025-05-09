import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaSun, FaMoon, FaGlobe } from "react-icons/fa";

const Cardlogic = () => {
  const cardData = [
    {
      icon: <FaSun size={40} className="text-warning" />, // Sun icon
      heading: "THE SUN",
      para: "The Sun is the center of our solar system and provides the energy necessary for life on Earth. It is a massive ball of hot plasma fueled by nuclear fusion.",
    },
    {
      icon: <FaMoon size={40} className="text-light" />, // Moon icon
      heading: "THE MOON",
      para: "Earth's only natural satellite, the Moon influences tides and has been a focal point of space exploration. It reflects sunlight and stabilizes Earth's axial tilt.",
    },
    {
      icon: <FaGlobe size={40} className="text-danger" />, // Mars icon
      heading: "MARS - THE RED PLANET",
      para: "Mars is the fourth planet from the Sun, known for its reddish color due to iron oxide. Scientists are studying it for potential future colonization.",
    },
  ];

  return (
    <div className="container my-5 opacity-75">
      <div className="row g-4 justify-content-center">
        {cardData.map(({ icon, heading, para }, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
            <Card
              className="text-white bg-primary shadow-lg rounded text-center p-4 d-flex flex-column h-100"
              style={{ width: "22rem", transition: "transform 0.3s ease-in-out" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <Card.Header className="fs-3 d-flex justify-content-center align-items-center mb-3">
                {icon}
              </Card.Header>
              <Card.Body className="d-flex flex-column">
                <Card.Title className="fs-5 fw-bold mb-3">{heading}</Card.Title>
                <Card.Text className="small flex-grow-1">{para}</Card.Text>
                <Button variant="light" size="sm" className="fw-bold mt-3">
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cardlogic;
