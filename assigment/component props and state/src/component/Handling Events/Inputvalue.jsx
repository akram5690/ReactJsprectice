import React from 'react'
import { useState } from 'react';

const Inputvalue = () => {
    let [inputval, setinput] = useState ("");

    let typeVelue = (e) =>{
        setinput(e.target.value);
    }
  return (
    <>
      <div className="container d-flex flex-column align-items-center gap-3 p-4">
      <input type="text" value={inputval} onChange={typeVelue} className="form-control w-50" placeholder="Type something..."
      />
      <p className="fs-5 fw-semibold">Type Name : {inputval}</p>
    </div>
    </>
  )
}

export default Inputvalue
