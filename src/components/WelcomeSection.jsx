import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import './styles/WelcomeSection.css';
import GallerySection from './GallerySection';
const WelcomeSection = () => {
  

  return (
    <div className="welcome-container">
      <div className="welcome-header">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="main-title"
        >
          Discover Your Perfect Yacht Adventure
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="subtitle"
        >
          Experience luxury and freedom on the Turkish Riviera
        </motion.p>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="highlight-text"
      >
        Embark on an unforgettable journey along Turkey's stunning coastline, where crystal-clear waters meet ancient history and modern luxury.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="features-grid"
      >
        <div className="feature-box">
          <i className="fas fa-anchor"></i>
          <h3>Premium Yachts</h3>
          <p>Choose from our fleet of meticulously maintained luxury vessels</p>
        </div>
        <div className="feature-box">
          <i className="fas fa-map-marked-alt"></i>
          <h3>Custom Routes</h3>
          <p>Personalized itineraries tailored to your preferences</p>
        </div>
        <div className="feature-box">
          <i className="fas fa-concierge-bell"></i>
          <h3>Expert Crew</h3>
          <p>Professional and experienced crew at your service</p>
        </div>
        <div className="feature-box">
          <i className="fas fa-glass-cheers"></i>
          <h3>Luxury Experience</h3>
          <p>First-class amenities and gourmet dining options</p>
        </div>
      </motion.div>
    </div>
  );
};


export default WelcomeSection; 