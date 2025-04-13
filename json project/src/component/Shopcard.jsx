import React, { useEffect, useState } from 'react';

const Shopcard = () => {
  const [getdata, setgetdata] = useState([]);

  const fechapidata = async () => {
    await fetch("http://localhost:3000/cards")
      .then(res => res.json())
      .then(data => setgetdata(data));
  };

  useEffect(() => {
    fechapidata();
  }, []);

  const img = {
    // height: "350px",
    width: "100%",
    objectFit: "cover",
    aspectRatio: "1 / 1.5"
};

  return (
    <div className="container py-4">
      <div className="row g-4">
        {getdata.map((item, index) => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
            <div className="card h-100 shadow-sm border-0 rounded-3">
              <img
                src={item.image}
                className="card-img-top"
                alt={item.title}
                style={img}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text flex-grow-1">{item.text}</p>
              </div>
              <div className="card-footer bg-white border-0 d-flex justify-content-between align-items-center">
                <strong className="text-primary">₹{item.rate}</strong>
                <a href={item.link} className="btn btn-sm btn-outline-primary">
                  View
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shopcard;
