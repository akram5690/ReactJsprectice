import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const RendersList = () => {
  const cars = [
    { brand: "Toyota", model: "Corolla", rate: "$20,000", image: "https://imgd.aeplcdn.com/370x208/ec/60/CA/18036/img/m/Toyota-Corolla-Altis-Right-Front-Three-Quarter-49079_ol.jpg?v=201711021421&q=80" },
    { brand: "Honda", model: "Civic", rate: "$22,000", image: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/27074/civic-exterior-right-front-three-quarter-148155.jpeg?q=80&q=80" },
    { brand: "Ford", model: "Mustang", rate: "$30,000", image: "https://imgd.aeplcdn.com/664x374/cw/ec/23766/Ford-Mustang-Exterior-126883.jpg?wm=0&q=80" },
    { brand: "BMW", model: "X5", rate: "$50,000", image: "https://imgd-ct.aeplcdn.com/664x415/n/3te3bbb_1676645.png?q=80" },
    { brand: "Audi", model: "A4", rate: "$40,000", image: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/51909/a4-exterior-right-front-three-quarter-2.jpeg?q=80&q=80" }
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Car List</h2>
      <div className="row">
        {cars.map((car, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card shadow-sm">
            <img src={car.image} className="card-img-top" alt={car.brand} style={{ width: "100%", height: "220px"}} />
              <div className="card-body">
                <h5 className="card-title">{car.brand}</h5>
                <p className="card-text">Model: {car.model}</p>
                <p className="card-text">Rate: {car.rate}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RendersList;
