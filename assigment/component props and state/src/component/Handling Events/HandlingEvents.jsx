import React from 'react'
import { useState } from 'react';
import Inputvalue from './Inputvalue';

const HandlingEvents = () => {
    let [text, setText] = useState("Not Clicked");

    let handleClick = () => {
      setText("Clicked!");
    }; 

    return (
        <>
        <div>
        <div className="d-flex flex-column align-items-center p-5 my-3 min-vh-10 justify-content-center">
      <p className="fs-4 fw-bold text-dark">{text}</p>
      <button
        onClick={handleClick}
        className="btn btn-primary px-4 py-2 shadow-lg"
      >
        Click Me
      </button>
    </div>
    <Inputvalue />
    </div>
    </>

  )
}

export default HandlingEvents
