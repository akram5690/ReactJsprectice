import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/theaters.css"

const Selecttheter = () => {
  const navigate = useNavigate();
  
  const theaters = [
    "INOX VR Mall, Dumas Road",
    "Valentine Multiplex, City Light",
    "Rajhans Cinema, Adajan",
    "Time Cinema, Piplod",
    "City Plus Multiplex, Parle Point",
    "DR World Multiplex, Isanpur",
    "Galaxy Multiplex, Pal",
  ];
  
  const showTimes = ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM", "10:00 PM"];
  
  const today = new Date().toISOString().split("T")[0];
  
  const [selectedTheater, setSelectedTheater] = useState("");
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedTime, setSelectedTime] = useState("");

  const handleBooking = () => {
    if (!selectedTheater || !selectedTime || !selectedDate) {
      alert("Please select theater, date and time.");
      return;
    }

    const selection = {
      theater: selectedTheater,
      date: selectedDate,
      time: selectedTime,
    };

    localStorage.setItem("selectedTheater", JSON.stringify(selection));
    navigate("/Selectseats");
  };

  return (
    <div className="container mt-5 pt-4">
      <h2 className="text-center mb-4">Select Theater, Date & Time</h2>

      <div className="row g-4 mb-4">
        {theaters.map((theater, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div
              className={`card p-3 shadow-sm rounded-4 theater-card bg-light ${selectedTheater === theater ? 'border-primary border-2' : ''}`}
              style={{ cursor: 'pointer' }}
              onClick={() => setSelectedTheater(theater)}
            >
              <h5 className="text-center">{theater}</h5>
            </div>
          </div>
        ))}
      </div>

      
      <div className="mb-4 text-center">
        <label htmlFor="show-date" className="form-label fw-bold">Select Date:</label>
        <input
          type="date"
          id="show-date"
          className="form-control w-auto d-inline-block ms-2"
          value={selectedDate}
          min={today}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      
      <div className="mb-4 text-center">
        <h5 className="mb-3 fw-bold">Select Show Time</h5>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {showTimes.map((time, index) => (
            <button
              key={index}
              className={`btn btn-outline-primary ${selectedTime === time ? 'active' : ''}`}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* Book Button */}
      <div className="text-center">
        <button className="btn btn-success px-4 py-2" onClick={handleBooking}>
          Proceed to Seat Selection
        </button>
      </div>
    </div>
  );
};

export default Selecttheter;
