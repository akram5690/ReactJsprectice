import React from 'react';

const Internalcss = () => {
  let container = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#f5f5f5",
    margin: "20px 0",
    padding: "20px",
  };

  let title = {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#333",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    textAlign: "center",
    marginBottom: "20px",
  };

  let gridContainer = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    width: "100%",
  };

  let cont = {
    width: "300px",
    backgroundColor: "white",
    borderRadius: "15px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    position: "relative",
  };

  let discountLabel = {
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "red",
    color: "white",
    padding: "5px 10px",
    borderRadius: "5px",
    fontSize: "14px",
    fontWeight: "bold",
  };

  let btn = {
    cursor: "pointer",
    padding: "10px 15px",
    borderRadius: "8px",
    border: "none",
    marginTop: "12px",
    backgroundColor: "#007BFF",
    color: "white",
    fontWeight: "bold",
    fontSize: "16px",
    transition: "background-color 0.3s ease, transform 0.2s ease",
  };

  let imgStyle = {
    width: "100%",
    borderRadius: "10px",
    marginBottom: "15px",
  };

  return (
    <div style={container}>
      <h1 style={title}>Exclusive Deal: 30% Off on These Cars! 🚗💨</h1>
      
      <div style={gridContainer}>
        {/* BMW 2 Series Gran Coupe */}
        <div style={cont}>
          <div style={discountLabel}>30% OFF</div>
          <h2>BMW</h2>
          <img
            src="https://imgd.aeplcdn.com/664x374/n/cw/ec/48034/2-series-gran-coupe-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80"
            alt="BMW 2 Series Gran Coupe"
            style={imgStyle}
          />
          <h3>BMW 2 Series Gran Coupe</h3>
          <p>A premium 5-seater coupe with sporty aesthetics and advanced technology.</p>
          <p><strong>Color:</strong> Red</p>
          <span><sup>&#8377;</sup>43,70,000</span>
          <br />
          <button style={btn}>View Item</button>
        </div>

        {/* Maruti Swift */}
        <div style={cont}>
          <div style={discountLabel}>30% OFF</div>
          <h2>Maruti Suzuki</h2>
          <img
            src="https://i.cdn.newsbytesapp.com/images/1422591715144664.jpeg"
            alt="Maruti Swift"
            style={imgStyle}
          />
          <h3>Maruti Swift</h3>
          <p>A stylish, fuel-efficient, and affordable hatchback perfect for city driving.</p>
          <p><strong>Color:</strong> Blue</p>
          <span><sup>&#8377;</sup>6,50,000</span>
          <br />
          <button style={btn}>View Item</button>
        </div>

        {/* Tata Tiago */}
        <div style={cont}>
          <div style={discountLabel}>30% OFF</div>
          <h2>Tata Motors</h2>
          <img
            src="https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2019/10/04/102361-tiago.jpg?itok=xVI6iilG"
            alt="Tata Tiago"
            style={imgStyle}
          />
          <h3>Tata Tiago</h3>
          <p>A compact, affordable, and safe hatchback with great mileage.</p>
          <p><strong>Color:</strong> Grey</p>
          <span><sup>&#8377;</sup>5,60,000</span>
          <br />
          <button style={btn}>View Item</button>
        </div>
      </div>
    </div>
  );
};

export default Internalcss;
