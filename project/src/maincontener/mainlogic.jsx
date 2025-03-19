import React from "react";
import Card from "react-bootstrap/Card";

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
    width: "100%",
    height: "20rem",
    objectFit: "cover",
    borderRadius: "15px",
  };

  return (
    <div className="container">
      {myplanets.map(({ img, title, text, link, infoclass, slide1, slide2, slide3 }, index) => (
        <div key={index} className={`row align-items-center my-4 ${infoclass}`}>

          {/* Left: Carousel */}
          <div className="col-lg-5 col-md-6 col-sm-12 d-flex justify-content-center">
            <div id={`carouselExample${index}`} className="carousel slide w-100">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={slide1} style={sliderimage} alt={title} />
                </div>
                <div className="carousel-item">
                  <img src={slide2} style={sliderimage} alt={title} />
                </div>
                <div className="carousel-item">
                  <img src={slide3} style={sliderimage} alt={title} />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExample${index}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon bg-dark rounded-circle" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target={`#carouselExample${index}`} data-bs-slide="next">
                <span className="carousel-control-next-icon bg-dark rounded-circle" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          {/* Right: Card Section */}
          <div className="col-lg-7 col-md-6 col-sm-12">
            <Card className="shadow-lg text-center bg-dark text-white rounded p-4">
              {/* Image Container */}
              <div className="d-flex justify-content-center mb-3">
                <div style={cardStyle}>
                  <img src={img} alt={title} style={imageStyle} />
                </div>
              </div>

              {/* Card Body */}
              <Card.Body>
                <Card.Title className="fw-bold fs-4">{title}</Card.Title>
                <Card.Text className="fs-6">{text}</Card.Text>
                <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary fw-bold mt-2">
                  Learn More
                </a>
              </Card.Body>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Mainlogic;
