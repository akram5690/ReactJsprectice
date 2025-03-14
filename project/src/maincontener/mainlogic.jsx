import React from "react";
import Card from "react-bootstrap/Card";



const Mainlogic = ({ myplanets}) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      {myplanets.map(({ img, title, text, link, infoclass}, index) => (
        <div key={index} className="d-flex justify-content-center align-items-center">

          <div className={`col-12 d-flex justify-content-center mb-4 ${infoclass || ""}`}>
            <Card
              className="shadow-lg text-center overflow-hidden"
              style={{
                width: "100%",
                maxWidth: "1200px",
                borderRadius: "15px",
                background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
                color: "white",
                flexDirection: "row"
              }}
            >
              {/* Image container with same fixed size */}
              <div className="d-flex justify-content-center p-3">
                <div
                  style={{
                    width: "180px",
                    height: "180px",
                    overflow: "hidden",
                    borderRadius: "50%",
                    border: "2px solid white"
                  }}
                >
                  <img
                    src={img}
                    alt={title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover", // Ensures same size without distortion
                    }}
                  />
                </div>
              </div>

              <Card.Body className="d-flex flex-column justify-content-center p-4">
                <Card.Title className="fw-bold fs-3">{title}</Card.Title>
                <Card.Text className="text-light fs-5">{text}</Card.Text>
                <button className="btn">
                  <a href={link} target="_blank" rel="noopener noreferrer" className="text-light">Learn More</a>
                </button>
              </Card.Body>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Mainlogic;
