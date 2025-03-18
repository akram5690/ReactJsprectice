import React from "react";
import "./App.css";
import Navigationbar from "./headersection/Navigationbar";
// import Cardanlys from "./main/Cardanlys";
import Maincont from "./maincontener/maincont";
import Mission from "./upcomingmission/Mission";
import Achivments from "./Achivment/Achivments";

function App() {

  return (
    <div className="App app-container">
      <Navigationbar />
      <Maincont />
      <Mission />
      <Achivments />
    </div>
  );
}

export default App;
