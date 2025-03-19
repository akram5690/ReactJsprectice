import React from "react";
import "./App.css";
import Navigationbar from "./headersection/Navigationbar";
import Maincont from "./maincontener/maincont";
import Mission from "./upcomingmission/Mission";
import Achivments from "./Achivment/Achivments";
import Footer from "./footer/Footer";

function App() {

  return (
    <div className="App app-container">
      <Navigationbar />
      <Maincont />
      <Mission />
      <Achivments />
      <Footer />
    </div>
  );
}

export default App;
