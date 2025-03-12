import React from "react";
import earth from "../images/earth.png";
import sun from "../images/sun.png";
import moon from "../images/moon.png";
import mars from "../images/mars.png";
import Mainlogic from "./mainlogic";

const Maincont = () => {
  const artsec = [
    {
      img: sun,
      title: "The Sun",
      text: "The Sun is a massive ball of hot plasma at the center of our solar system, providing energy and light for all planets.",
    },
    {
      img: moon,
      title: "The Moon",
      text: "Earth’s only natural satellite, the Moon influences tides and stabilizes Earth's axial tilt.",
    },
    {
      img: mars,
      title: "Mars - The Red Planet",
      text: "Mars is the fourth planet from the Sun, known for its reddish appearance due to iron oxide dust.",
    },
    {
      img: earth,
      title: "Earth - Our Home",
      text: "Earth is the only known planet to support life, with vast oceans and a breathable atmosphere.",
    },
  ];

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100 my-5">
      <div className="row g-4 justify-content-center">
        {/* Pass artsec data as props to Mainlogic */}
        <Mainlogic myplanets={artsec} />

      </div>
    </div>
  );
};

export default Maincont;
