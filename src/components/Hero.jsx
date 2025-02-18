import React from 'react';
import { motion } from 'framer-motion';
import './styles/Hero.css';

const Hero = () => {
  return (
    <motion.div
      className="hero-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Video Background */}
      <div className="video-background">
        <video
          autoPlay
          loop
          muted
          playsInline
          
        >
          <source src="/videos/side.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="hero-content">
        <span className="hero-label">EXCLUSIVE YACHT EXPERIENCES</span>
        <h1 className="hero-title">
          Embark on a Journey of<br />
          Elegance and Adventure<br />
          with Our Yachts
        </h1>
        <p className="hero-description">
          Discover the breathtaking beauty of the coastline with our luxury yacht tours. Departing from Side's historic harbor, explore hidden sea caves, pristine beaches, and iconic landmarks.
        </p>
        <motion.button 
          className="reserve-now-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}  
        >
          RESERVE YOUR YACHT →
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Hero; 