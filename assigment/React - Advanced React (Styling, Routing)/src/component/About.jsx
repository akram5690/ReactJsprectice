import React from 'react';
import './About.css'; // We'll add basic styles separately

const About = () => {
  return (
    <div className="about-container">
      <div className="about-banner">
        <h1>About Us</h1>
        <p>Driving Dreams into Reality</p>
      </div>

      <div className="about-content">
        <h2>Welcome to AutoWorld</h2>
        <p>
          At AutoWorld, we are passionate about cars and committed to delivering the best vehicle buying experience.
          Whether you’re searching for a stylish hatchback, a luxurious sedan, a powerful SUV, or a breathtaking supercar,
          our wide selection of vehicles caters to every need and dream.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to connect people with their dream cars by providing excellent service, transparent pricing,
          and trustworthy guidance. We believe every customer deserves the best, and we work hard to make your car-buying journey smooth and memorable.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>✔️ Wide Range of Brands and Models</li>
          <li>✔️ Trusted by Thousands of Happy Customers</li>
          <li>✔️ Hassle-Free Inquiry and Purchase Process</li>
          <li>✔️ Competitive Pricing and Great Deals</li>
          <li>✔️ Professional Support and Expert Advice</li>
        </ul>

        <h2>Thank You!</h2>
        <p>
          Thank you for choosing AutoWorld. Your trust drives us forward. 🚗💨
        </p>
      </div>
    </div>
  );
}

export default About;
