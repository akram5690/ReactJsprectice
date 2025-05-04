import React, { useEffect, useState } from 'react';
import './Homepage.css';
import { NavLink, useNavigate } from 'react-router-dom';

const Homepage = () => {
    const navigate = useNavigate()
  const [getdata, setgetdata] = useState([]);
  const isLoggedIn = !!sessionStorage.getItem("userId"); // Check if any user is logged in

  const fechapidata = async () => {
    try {
      const res = await fetch("http://localhost:3000/product");
      const data = await res.json();
      setgetdata(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fechapidata();
  }, []);

  const handlesubmit = (item) => {
    let getLocalData = JSON.parse(localStorage.getItem("adproduct")) || [];
    let newdata = [...getLocalData, item];
  
    if (window.confirm(`Add "${item.name}" to cart?`)) {
      localStorage.setItem("adproduct", JSON.stringify(newdata));
      alert(`${item.name} Added to cart.`);
      navigate('/Addtocard');
    }
  };

  const handledelete = async (Id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        const response = await fetch(`http://localhost:3000/product/${Id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          fechapidata(); // Refresh data
          alert("Product deleted successfully.");
        } else {
          alert("Failed to delete the product.");
        }
      } catch (error) {
        console.error('Error deleting product:', error);
        alert('Error deleting product.');
      }
    }
  };

  return (
    <>
      <div className="winter-container py-5">
        <div className="overlay">
          <h2 className="text-center text-white mb-5">❄️ Winter Collection ❄️</h2>
          <div className="container">
            <div className="row">
              {getdata.map((item, index) => (
                <div className="col-md-4 mb-4" key={index}>
                  <div className="glass-card winter-card text-center shadow-lg">
                    <img
                      src={item.image}
                      className="card-img-top rounded"
                      alt={item.name}
                      style={{
                        height: '350px',
                        objectFit: 'cover',
                        borderTopLeftRadius: '15px',
                        borderTopRightRadius: '15px'
                      }}
                    />
                    <div className="card-body" style={{ height: '250px' }}>
                      <h5 className="card-title fw-bold text-white">{item.name}</h5>
                      <p className="card-text text-light">
                        {item.description.length > 50
                          ? item.description.substring(0, 50) + "..."
                          : item.description}
                      </p>
                      <p className="card-text text-light">Price: ₹{item.price}</p>
                      <button onClick={() => handlesubmit(item)} className="glass-card rounded btn">
                          Add To Card
                      </button>

                      {/* Show delete button if user is logged in */}
                      {isLoggedIn && (
                        <div className="my-3">
                          <button
                            onClick={() => handledelete(item.id)}
                            className="glass-card rounded btn text-white bg-danger"
                          >
                            Delete Product
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
