import React from 'react';
import { motion } from 'framer-motion';

const WelcomeSection = () => {
  return (
    <div className="container mt-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Discover Your Perfect Yacht Adventure
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Select from our exquisite collection of yachts for an unforgettable journey!
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p>
          At Yacht Rental, we provide a diverse range of luxury yachts tailored to your desires. Whether you're planning a serene family retreat, a romantic escapade, or a sophisticated corporate gathering, we have the ideal yacht for you. Our vessels are equipped with cutting-edge amenities and are meticulously maintained to ensure your utmost comfort and safety. Explore our gallery to view some of the finest yachts available for your next adventure.
        </p>
      </motion.div>
    </div>
  );
};

export default WelcomeSection; 