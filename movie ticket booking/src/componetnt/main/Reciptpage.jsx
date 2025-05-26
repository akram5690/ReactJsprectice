import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ReceiptPage = () => {
  const navigate = useNavigate();

  const [movie, setMovie] = useState({});
  const [theater, setTheater] = useState({});
  const [seats, setSeats] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const bookedMovieData = JSON.parse(localStorage.getItem("bookmovie")) || [];
    const lastMovie = bookedMovieData[bookedMovieData.length - 1] || {};
    const selectedTheater = JSON.parse(localStorage.getItem("selectedTheater")) || {};
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats")) || [];
    const totalPrice = localStorage.getItem("totalPrice") || 0;

    setMovie(lastMovie);
    setTheater(selectedTheater);
    setSeats(selectedSeats);
    setTotal(totalPrice);
  }, []);

  const handleNewBooking = () => {
    navigate("/");
  };

  return (
    <div className="container mt-5 pt-4">
      <div className="card shadow-lg p-4 rounded-4 bg-light">
        <h2 className="text-center mb-4">🎟️ Booking Receipt</h2>

        <div className="row">

          <div className="col-md-8">
            <h3 className="fw-bold">{movie.title || "Movie Title"}</h3>
            <hr />

            <p><strong>🎬 Theater:</strong> {theater.theater || "N/A"}</p>
            <p><strong>📅 Date:</strong> {theater.date || "N/A"}</p>
            <p><strong>⏰ Time:</strong> {theater.time || "N/A"}</p>
            <p><strong>💺 Seats:</strong> {seats.length > 0 ? seats.join(", ") : "N/A"}</p>
            <p><strong>💰 Total Price:</strong> ₹{total}</p>

            <hr />

            <button className="btn btn-success mt-3" onClick={handleNewBooking}>
              🎉 Book Another Movie
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiptPage;
