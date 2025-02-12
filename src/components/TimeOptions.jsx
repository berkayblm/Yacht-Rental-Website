import React from 'react';
import { motion } from 'framer-motion';
import './styles/TimeOptions.css';

const TimeOptions = () => {
  const timeSlots = {
    morning: {
      label: "Morning",
      time: "08:00 - 13:00",
      icon: "🌅"
    },
    noon: {
      label: "Noon",
      time: "10:00 - 15:00",
      icon: "☀️"
    },
    sunset: {
      label: "Sunset",
      time: "16:00 - 20:00",
      icon: "🌇"
    },
    evening: {
      label: "Evening",
      time: "20:00 - 00:00",
      icon: "🌙"
    }
  };

  return (
    <motion.div 
      className="time-options-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Standard Rental Periods</h2>
      <div className="time-slots-container">
        {Object.entries(timeSlots).map(([key, slot]) => (
          <motion.div 
            key={key}
            className="time-slot-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="time-icon">{slot.icon}</span>
            <h3>{slot.label}</h3>
            <p className="time-range">{slot.time}</p>
          </motion.div>
        ))}
      </div>
      
      <div className="rental-info">
        <div className="duration-range">
          <h3>Rental Duration Options</h3>
          <div className="duration-endpoints">
            <div className="endpoint">
              <span>Shortest</span>
              <strong>1 hour</strong>
            </div>
            <div className="duration-line"></div>
            <div className="endpoint">
              <span>Longest</span>
              <strong>1 day</strong>
            </div>
          </div>
        </div>
       
        <p className="contact-note">Contact us for costs of different rental durations</p>
      </div>
    </motion.div>
  );
};

export default TimeOptions; 