import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Achievements = () => {
  const achievements = [
    { year: "1957", event: "First Artificial Satellite", details: "Sputnik 1 - USSR", img: "data:image/jpeg;base64,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" },
    { year: "1961", event: "First Human in Space", details: "Yuri Gagarin - Vostok 1 (USSR)", img: "https://assets.newatlas.com/dims4/default/ade71c1/2147483647/strip/true/crop/1600x1067+0+66/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F1a%2F41%2Fb280dc2a401ca62dbce65febd54f%2F200103main-rs-image-feature-800b-1600x1200.jpg" },
    { year: "1969", event: "First Moon Landing", details: "Apollo 11 - USA", img: "https://s.calendarr.com/upload/f8/9b/moon-landing-f.jpg?class=ogImageRectangle" },
    { year: "1971", event: "First Space Station", details: "Salyut 1 - USSR", img: "https://www.nasa.gov/wp-content/uploads/2021/04/salyut_launch_23_iss_from_flyaround_oct_4_2018.jpg" },
    { year: "1981", event: "First Space Shuttle", details: "Columbia - NASA", img: "https://www.hindustantimes.com/ht-img/img/2024/04/13/550x309/8111969orig_1713008952636_1713009037464.jpg" },
    { year: "1998", event: "International Space Station", details: "ISS - Global Collaboration", img: "https://c.ndtvimg.com/gws/ms/10-fascinating-facts-about-international-space-station/assets/6.jpeg?1740329430" },
    { year: "2004", event: "First Private Space Flight", details: "SpaceShipOne - USA", img: "https://upload.wikimedia.org/wikipedia/commons/9/93/SpaceShipOne_Flight_15P_photo_Don_Ramey_Logan.jpg" },
    { year: "2012", event: "First Mars Rover Landing", details: "Curiosity - NASA", img: "https://i.natgeofe.com/n/61b7f4d1-1f6b-44c5-a0c3-887ea4862fad/57831_3x2.jpg" },
    { year: "2020", event: "First Commercial Crew Mission", details: "SpaceX Crew Dragon", img: "https://i0.wp.com/media2.spaceref.com/news/base/nasa-spacex-to-launch-first-commercial-crew-rotation-mission-to-international-space-station.jpeg?w=780&quality=89&ssl=1" },
    { year: "2023", event: "India's Moon Landing", details: "Chandrayaan-3 - ISRO", img: "https://cdn1.img.sputniknews.in/img/07e7/08/17/3793339_0:0:1200:675_1920x0_80_0_0_0cd62ab022290d267d18d84731dcbb20.jpg" },
  ];

  const [search, setSearch] = useState("");

  // Filter achievements based on search input
  const filteredAchievements = achievements.filter(
    (achievement) =>
      achievement.year.includes(search) ||
      achievement.event.toLowerCase().includes(search.toLowerCase()) ||
      achievement.details.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary mb-4">🚀 Space Achievements Gallery</h2>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control shadow-sm"
          placeholder="🔍 Search achievements..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Gallery Grid */}
      <div className="row g-4">
        {filteredAchievements.length > 0 ? (
          filteredAchievements.map((achievement, index) => (
            <div key={index} className="col-md-4 col-sm-6">
              <div className="card shadow-lg">
                <img src={achievement.img} className="card-img-top" alt={achievement.event} style={{width: "100%", height: "270px"}}/>
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">{achievement.event}</h5>
                  <p className="card-text">{achievement.details}</p>
                  <span className="badge bg-dark">{achievement.year}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-danger fw-bold">No matching results found</div>
        )}
      </div>
    </div>
  );
};

export default Achievements;
