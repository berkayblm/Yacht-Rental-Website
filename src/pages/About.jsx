import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h1>About Us</h1>
        <p>
          Welcome to Yacht Rental, your premier destination for luxury yacht rentals. 
          We offer a wide range of yachts to suit your needs, whether it's a family vacation, 
          a romantic getaway, or a corporate event. Our team is dedicated to providing you 
          with the best experience on the water.
        </p>
        <p>
          Contact us today to book your dream yacht and start your adventure!
        </p>
      </div>
    </div>
  );
};

export default About;