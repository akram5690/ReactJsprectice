import React from "react";
import "./App.css";
import Navigationbar from "./headersection/Navigationbar";
// import Cardanlys from "./main/Cardanlys";
import Maincont from "./maincontener/maincont";

function App() {
  
  return (
    <div className="App app-container">
      <Navigationbar />
      {/* <Cardanlys /> */}
      <Maincont />
    </div>
  );
}

export default App;
