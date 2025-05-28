import React, { useEffect, useState } from 'react';
import "../css/booking.css";
import { useNavigate } from 'react-router-dom';

const Bookingpage = () => {
  const naviagte = useNavigate()
  const [book, setBook] = useState({cast:[]});

  const getLocalData = () => {
    const data = JSON.parse(localStorage.getItem("bookmovie")) || [];
    const lastSelected = data[data.length - 1];
    if (lastSelected) {
      setBook(lastSelected);
    }
  };

  useEffect(() => {
    getLocalData();
  }, []);

  const handlebook = () => {
    const bookdata = JSON.parse(localStorage.getItem("booknow")) || []
    const newbookdata = [...bookdata, book]
    localStorage.setItem("booknow", JSON.stringify(newbookdata))
    naviagte("/Selecttheter")

  }

  return (
    <>
    <div className="container-fluid mt-5 pt-5 px-4">
      <div className="card w-100 shadow-lg rounded-4 p-3 bg-light">
        <div className="row g-4 align-items-center">
          <div className="col-md-4">
            <img
              src={book.image || "https://via.placeholder.com/300x450?text=No+Image"}
              className="img-fluid rounded-4 book-img"
              alt={book.title || "Movie Poster"}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title fw-bold">{book.title || "Movie Title"}</h2>
              <p className="text-muted">{book.text || "No description available."}</p>
              <p><strong>Duration:</strong> {book.duration || "N/A"}</p>
              <p><strong>Language:</strong> {book.language || "N/A"}</p>
              <p><strong>Director:</strong> {book.director || "N/A"}</p>

              <p className="card-text fs-6">
                🎬 <strong>Genre:</strong> {book.genre || "N/A"} <br />
                🌟 <strong>Rating:</strong> {book.stars || "N/A"} <br />
                🗳 <strong>Votes:</strong> {book.vote || "N/A"} <br />
                📅 <strong>Release Date:</strong> {book.releaseDate || "N/A"} <br />
                🔞 <strong>Rated:</strong> {book.rating || "N/A"}
              </p>

              <h6 className="fw-bold mt-3">Cast:</h6>
              <div className="d-flex flex-wrap gap-2">
                {book.cast.map((imgcast, index) => (
                  <img
                    key={index}
                    src={imgcast}
                    alt={`Cast ${index + 1}`}
                    className="cast-img rounded-circle shadow-sm"
                  />
                ))}
              </div>
              <button onClick={handlebook} className="btn btn-primary px-4 py-2 mt-4 shadow-sm">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Bookingpage;
