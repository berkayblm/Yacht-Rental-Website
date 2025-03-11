import React from 'react';
import { motion } from 'framer-motion';
import './styles/TimeOptions.css';
import { useLanguage } from '../context/LanguageContext';
import { timeOptionsTranslations } from '../translations/timeOptionsComponentTranslations';


const TimeOptions = ({ timeSlots: propTimeSlots }) => {
  const { currentLanguage } = useLanguage();
  const translations = timeOptionsTranslations[currentLanguage] || timeOptionsTranslations['en']; // Fallback to English

  // Define all four time slots with translated labels
  const timeSlots = {
    morning: {
      label: translations.timeSlots.morning,
      time: "08:00 - 13:00",
      icon: "🌅"
    },
    noon: {
      label: translations.timeSlots.noon,
      time: propTimeSlots || "10:00 - 15:00", // Use propTimeSlots if provided, otherwise default
      icon: "☀️"
    },
    sunset: {
      label: translations.timeSlots.sunset,
      time: "16:00 - 20:00",
      icon: "🌇"
    },
    evening: {
      label: translations.timeSlots.evening,
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
      <h2>{translations.standardRentalPeriods}</h2>
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
          <h3>{translations.rentalDurationOptions}</h3>
          <div className="duration-endpoints">
            <div className="endpoint">
              <span>{translations.shortest}</span>
              <strong>{translations.shortestDuration}</strong>
            </div>
            <div className="duration-line"></div>
            <div className="endpoint">
              <span>{translations.longest}</span>
              <strong>{translations.longestDuration}</strong>
            </div>
          </div>
        </div>
       
        <p className="contact-note">{translations.contactNote}</p>
      </div>
    </motion.div>
  );
};

export default TimeOptions;