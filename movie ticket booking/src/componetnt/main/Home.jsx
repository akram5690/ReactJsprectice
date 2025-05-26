import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../css/Home.css';
import { NavLink, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()
  const [movidata, setmoviedata] = useState([]);

  const movieposter = [
    "https://cdn.shopify.com/s/files/1/1057/4964/files/The-Dark-Knight-Vintage-Movie-Poster-Original_51aa2163_368x.jpg?v=1741715850",
    "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/66a4263d01a185d5ea22eeec_6408f6e7b5811271dc883aa8_batman-min.png",
    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1636999411",
    "https://creativereview.imgix.net/content/uploads/2024/12/AlienRomulus-scaled.jpg?auto=compress,format&q=60&w=1728&h=2560",
    "https://i.etsystatic.com/37166133/r/il/60f034/4087791906/il_570xN.4087791906_jcbj.jpg",
    "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/66a4263d01a185d5ea22eeda_6408f76710a9935109f855d4_smile-min.png",
    "https://www.komar.de/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/import/api-v1.1-file-public-files-pim-assets-97-ad-84-62-6284ad972eff292d45ce1a2e-images-d6-63-ba-65-65ba63d65b4bee91324cbdfd-vd-046-p.jpg",
    "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg",
    "https://www.vintagemovieposters.co.uk/wp-content/uploads/2020/01/IMG_2891.jpeg",
    "https://www.vintagemovieposters.co.uk/wp-content/uploads/2020/11/IMG_5878-scaled.jpeg",
    "https://readydesignswala.com/wp-content/uploads/2023/07/BLOOD-SHOOT-2-MOVIE-POSTER-scaled-1-scaled.webp",
    "https://lh6.googleusercontent.com/proxy/RgK9HxThPtQumOT1gOy_OkMdzmditYSFjGHioO_l75Aujcw0Xdc_axGWoD-mzxAM8u3ryUlEeaBaXNfAY26yblOilJPylndzQzzVLUsr9ZEgpRobhFB4Bw",
    "https://www.designmantic.com/blog/wp-content/uploads/2017/10/Oblivion.jpg"
  ]

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
              <div className="row justify-content-center my-4">
                <div className="track-wrapper">
                  <ul className="track">
                    {movieposter.map((item, index) => (
                      <li key={index} className="track__item">
                        <img src={item} alt="error" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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
