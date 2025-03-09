import React from 'react'

const Expressoin = () => {
    let rj= "ReactJs"
    let add = 15+5;
  return (
    <>
    {/* Displaying a string variable */}
    <h1>Expression tutorial in {rj}</h1> 

    {/* Math operations using variables */}
    <h1>Addition (using variable): {add}</h1>  

    {/* Math operations without variables */}
    <h1>Addition: {10 + 15}</h1>
    <h1>Subtraction: {20 - 15}</h1>
    <h1>Multiplication: {5 * 5}</h1>
    <h1>Division: {75 / 15}</h1>

    {/* Using Math functions */}
    <h1>Random number: {Math.random()}</h1> {/* Generates a random number between 0 and 1 */}
    <h1>Random number (0-9) using Math.floor: {Math.floor(Math.random() * 10)}</h1> {/* Rounds down a random number between 0 and 9 */}
    <h1>Random number (0-10) using Math.round: {Math.round(Math.random() * 10)}</h1> {/* Rounds to the nearest integer from 0 to 10 */}
    <h1>Power: {Math.pow(2, 3)}</h1> {/* 2 raised to the power of 3 */}
    <h1>Square Root of 25: {Math.sqrt(25)}</h1> {/* Square root of 25 */}
    <h1>Ceiling of 4.3: {Math.ceil(4.3)}</h1> {/* Rounds up to the nearest integer */}
    <h1>Floor of 4.9: {Math.floor(4.9)}</h1> {/* Rounds down to the nearest integer */}
    <h1>Absolute of -10: {Math.abs(-10)}</h1> {/* Absolute (positive) value of -10 */}
    <h1>Max of 10, 20, 30: {Math.max(10, 20, 30)}</h1> {/* Returns the highest number */}
    <h1>Min of 10, 20, 30: {Math.min(10, 20, 30)}</h1> {/* Returns the lowest number */}
</>
  )
}

export default Expressoin
