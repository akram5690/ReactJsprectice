import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/seats.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCouch } from '@fortawesome/free-solid-svg-icons';

const Selectseats = () => {
  const navigate = useNavigate();

  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'I', 'J'];
  const seatsPerRow = 18;

  // Example: Price per seat by row
  const pricePerRow = {
    A: 260,
    B: 250,
    C: 250,
    D: 200,
    E: 200,
    F: 150,
    I: 150,
    J: 150,
  };

  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seat) => {
    setSelectedSeats(prev =>
      prev.includes(seat)
        ? prev.filter(s => s !== seat)
        : [...prev, seat]
    );
  };

  // Calculate total price
  const totalPrice = selectedSeats.reduce((total, seat) => {
    const row = seat.charAt(0);
    return total + (pricePerRow[row] || 0);
  }, 0);

  const handleConfirm = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat.");
      return;
    }

    localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
    localStorage.setItem("totalPrice", totalPrice);
    navigate("/ReceiptPage");
  };

  return (
    <div className="container mt-5 pt-4">
      <h2 className="text-center mb-4">Select Your Seats</h2>
      <div className="seat-layout d-flex flex-column align-items-center gap-3 mb-4">
        {rows.map((row) => (
          <div className="d-flex gap-2 flex-wrap justify-content-center" key={row}>
            {[...Array(seatsPerRow)].map((_, i) => {
              const seatNumber = `${row}${i + 1}`;
              const isSelected = selectedSeats.includes(seatNumber);
              const seatPrice = pricePerRow[row];
              return (
                <button
                  key={seatNumber}
                  className={`btn seat-btn d-flex flex-column justify-content-center align-items-center ${isSelected ? 'btn-success' : 'btn-outline-secondary'}`}
                  onClick={() => toggleSeat(seatNumber)}
                  title={`Seat ${seatNumber} - ₹${seatPrice}`}
                >
                  <FontAwesomeIcon icon={faCouch} size="lg" />
                  <small>{seatNumber}</small>
                  <small style={{ fontSize: '10px', marginTop: '2px' }}>₹{seatPrice}</small>
                </button>
              );
            })}
          </div>
        ))}
        <div className="theater2 text-center"></div>
        <div className="theater text-center">Screen</div>
      </div>

      {/* Show total price */}
      <div className="text-center mb-3">
        <h5>Total Price: ₹{totalPrice}</h5>
      </div>

      <div className="text-center">
        <button className="btn btn-primary px-4 py-2" onClick={handleConfirm}>
          Confirm Seats
        </button>
      </div>
    </div>
  );
};

export default Selectseats;
