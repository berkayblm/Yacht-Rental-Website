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
      <div className="hero-content">
        <span className="hero-label">LUXURY YACHT TOURS</span>
        <h1 className="hero-title">
          Book Your Side Tours With<br />
          Confidence Now ! Pay When<br />
          You Arrive !
        </h1>
        <p className="hero-description">
          Side boat (yacht) tour is the best and the most popular way to discover Side's beautiful 
          coastline. Our boat leaves from Side's harbor near the red tower and shipyard. The sea 
          caves, Cleopatra beach, Ulash beach are the places to see.
        </p>
        <motion.button 
          className="book-now-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          BOOK NOW →
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Hero; 