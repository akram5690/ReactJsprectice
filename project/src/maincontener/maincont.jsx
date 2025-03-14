import React from "react";
import Mainlogic from "./mainlogic";
import { Carousel } from "bootstrap";

const Maincont = () => {
  
  
  const artsec = [
    {
      infoclass : "mi-info",
      img: "https://cdn.thecollector.com/wp-content/uploads/2023/09/apollo-11-aldrin.jpg",
      title: "Apollo 11",
      text: " a Walk on the Moon. Just 20 days after Alan Shepard orbited the Earth, President John F. Kennedy announced the mission that would be NASA's ...",
      link: "https://science.howstuffworks.com/ten-nasa-achievements.htm"
    },
    {
      infoclass : "mi-info2",
      img:"https://upload.wikimedia.org/wikipedia/commons/d/d7/Chandrayaan-3_Integrated_Module_in_clean-room_01.webp",
      title: "Chandrayaan-3",
      text: "Mission. India's successful landing on the Moon's south pole with Chandrayaan-3 on August 23, 2023, was a truly historic achievement. It ...",
      link: "https://www.jagranjosh.com/general-knowledge/india-top-5-space-mission-2023-1703766963-1"
    },
    {
      infoclass : "mi-info",
      img: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HST-SM4.jpeg",
      title: "Hubble Space Telescope",
      text: "The Hubble Space Telescope lets us watch the expansion of the universe in a way never before imagined. Not only does it have 10 to 20 times the resolution ...",
      link: "https://en.wikipedia.org/wiki/Hubble_Space_Telescope"
    },
    {
      infoclass : "mi-info2",
      img: "https://cf-img-a-in.tosshub.com/sites/visualstory/wp/2023/11/cropped-Shukrayaan.jpg?size=*:900",
      title: "Venus Orbiter Mission",
      text: "This mission not only placed India in an elite group of spacefaring nations but also demonstrated its growing expertise in complex space missions. The success ...",
      link: "https://www.jagranjosh.com/general-knowledge/india-journey-to-becoming-a-space-power-since-independence-1723555452-1"
    },
  ];

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100 my-5">
      <div className="row g-4 justify-content-center">
        {/* Pass artsec data as props to Mainlogic */}
        <Mainlogic myplanets={artsec} imgcont={imgcont} />

      </div>
    </div>
  );
};

export default Maincont;
