import React from "react";
import "./style.css";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";


const Mainlogic = ({ myplanets }) => {
  const cardStyle = {
    width: "180px",
    height: "180px",
    overflow: "hidden",
    borderRadius: "50%",
    border: "2px solid white"
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };
   const sliderimage = {
    width: "15rem",
    height: "14.2rem",
    objectFit: "cover",
    borderRadius: "15px"
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      {myplanets.map(({ img, title, text, link, infoclass,slide1,slide2,slide3}, index) => (
        <div key={index} className={`col-12 d-flex justify-content-between mb-4 align-items-center ${infoclass}`} style={{gap: "100px"}}>

          {/* Unique Carousel ID for each section */}
          <div id={`carouselExample${index}`} className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={slide1} style={sliderimage} alt="Earth" />
              </div>
              <div className="carousel-item">
                <img src={slide2} style={sliderimage} className="d-block w-100" alt="Earth" />
              </div>
              <div className="carousel-item">
                <img src={slide3} style={sliderimage} className="d-block w-100" alt="Earth" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExample${index}`} data-bs-slide="prev">
              <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={`#carouselExample${index}`} data-bs-slide="next">
              <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
            </div>


            {/* Card Section */}
            <Card className="shadow-lg text-center cardblock d-flex flex-column flex-md-row position-relative" style={{height: "230px"}}>
              {/* Image Container */}
              <div className="d-flex justify-content-center p-3">
                <div style={cardStyle}>
                  <img src={img} alt={title} style={imageStyle} />
                </div>
              </div>

              {/* Card Body */}
              <Card.Body className="d-flex flex-column justify-content-center p-4">
                <Card.Title className="fw-bold fs-3 text-white">{title}</Card.Title>
                <Card.Text className="text-light fs-5">{text}</Card.Text>
                <button className="btn btn-primary fw-bold mt-2">
                  <a href={link} target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">
                    Learn More
                  </a>
                </button>
              </Card.Body>
            </Card>
          </div>
      ))}
    </div>
  );
};

export default Mainlogic;
