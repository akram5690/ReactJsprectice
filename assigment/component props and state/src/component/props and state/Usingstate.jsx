import React, { useState } from "react";

const Usingstate = () => {
    let [count, setCount] = useState(0);

    let increment = () => {
        if (count == 20) {
            console.log(count = 20);
            
            setCount(count = 20);
                        
        }else{
        setCount(count + 1);
    }
    };
    let Decrement = () => {
        if (count == 0) {
            setCount(count = 0);
                        
        }else{
        setCount(count - 1);
    }
    };
    return (
        <>
            <div className="counter-container">
                <h2 className="counter-value">Counter: {count}</h2>
                <button className="counter-button" onClick={increment}>
                    Increment
                </button>
                <button className="counter-button" onClick={Decrement}>
                    Decrement
                </button>
            </div>
        </>
    )
}

export default Usingstate
