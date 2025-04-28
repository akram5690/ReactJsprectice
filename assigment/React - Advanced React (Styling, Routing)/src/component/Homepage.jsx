import React from 'react'

const Homepage = () => {
  return (
    <>
      <div className="App-header">
        <div className='car-container'>
          <img
            className="car-image"
            src="https://www.topgear.com/sites/default/files/2023/09/33156-RS7PERFORMANCEASCARIBLUEJORDANBUTTERS132.jpg"
            alt="Car Model"
          />
          <div className='car-content'>
            <h5>2024 Audi RS7</h5>
            <p>
              Experience the power and luxury of the 2024 Audi RS7.
              With a twin-turbocharged V8 engine, advanced technology,
              and a sleek design, it's the ultimate sports sedan.
            </p>
            <a href="#">
              <span>Explore More</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage
