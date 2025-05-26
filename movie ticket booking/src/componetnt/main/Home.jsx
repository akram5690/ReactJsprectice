import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../css/Home.css';
import { NavLink, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()
  const [movidata, setmoviedata] = useState([]);

  const fechdata = async () => {
    await fetch('http://localhost:8000/moviedata')
      .then(res => res.json())
      .then(data => setmoviedata(data));
  };

  useEffect(() => {
    fechdata();
  }, []);

  const handleselect = (items) => {
    const existingData = JSON.parse(localStorage.getItem("bookmovie")) || [];
    const updatedData = [...existingData, items];
    localStorage.setItem("bookmovie", JSON.stringify(updatedData));
    navigate("/Bookingpage");
  };



  return (
    <>
      <div className="text-dark py-5 maincont">
        <div>
          <div className="row">
            <main className="col-md-9">
              <h2 className="text-center fw-bold mt-5">🎬 Latest Movies</h2>
              <div className="row justify-content-center">
                {movidata.length > 0 ? (
                  movidata.map((item, index) => (
                    <div onClick={() => handleselect(item)}
                      className="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center mb-3 text-decoration-none"
                      key={index}
                    >
                      <div className="card text-center p-3 card_style">
                        <img
                          src={item.image}
                          className="card-img-top p-1 rounded-4 style-img"
                          alt="Movie Poster"
                        />
                        <div className="card-body text-dark text-end">
                          <div className="d-flex justify-content-between pb-2 star">
                            <span><FontAwesomeIcon icon={faStar} /> {item.stars}</span>
                            <span>{item.vote} Votes</span>
                          </div>
                          <h5 className="card-title text-start style-title">{item.title}</h5>
                          <p className="text-muted small text-start">{item.genre}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-muted mt-5">No movie data available.</p>
                )}
              </div>
            </main>

            {/* ASIDE SECTION - SPONSORED VIDEOS */}
            <aside className="col-md-3 mb-4 side-bar">
              <div className="p-2 rounded-3">
                <img src="https://i.postimg.cc/dVCRgJWP/png-transparent-movies-logo-backsheet-hand-painted-practical-thumbnail-removebg-preview.png" alt="" />
                <h5 className="fw-bold mb-3 text-center text-primary bg-white">🎥 Sponsored by</h5>

                {/* Video 1 - PVR Promo */}
                <div className="ratio ratio-16x9 mb-3 rounded overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/cddd_EHYru0?autoplay=1&mute=1&loop=1&playlist=cddd_EHYru0&controls=0"
                    title="PVR Promo"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    frameBorder="0"
                  ></iframe>
                  <p className="small text-white text-center mb-3">Enjoy the PVR cinema experience!</p>
                </div>

                {/* Video 2 - Rajhans Promo */}
                <div className="ratio ratio-16x9 mb-3 rounded overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/6kD-pmDfqQk?autoplay=1&mute=1&loop=1&playlist=6kD-pmDfqQk&controls=0"
                    title="Rajhans Promo"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    frameBorder="0"
                  ></iframe>
                  <p className="small text-white text-center mb-3">Enjoy the Rajhans cinema experience!</p>
                </div>

                {/* Video 3 - Inox Promo */}
                <div className="ratio ratio-16x9 mb-3 rounded overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/WJ06LrxzOV0?autoplay=1&mute=1&loop=1&playlist=WJ06LrxzOV0&controls=0"
                    title="Cinema Teaser"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    frameBorder="0"
                  ></iframe>
                  <p className="small text-white text-center">Enjoy the INOX cinema experience!</p>
                </div>
              </div>
            </aside>



          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
