import React from 'react';
import { motion } from 'framer-motion';
import './styles/TimeOptions.css';
import { useLanguage } from '../context/LanguageContext';
import { timeOptionsTranslations } from '../translations/timeOptionsComponentTranslations';


const TimeOptions = ({ timeSlots: propTimeSlots }) => {
  const { currentLanguage } = useLanguage();
  const translations = timeOptionsTranslations[currentLanguage] || timeOptionsTranslations['en']; // Fallback to English

  const tourTypes = translations.tourTypes;

  // Helper function to map icons to tour types
const getIconForTourType = (type) => {
  const icons = {
    daily: "🌞",
    sunset: "🌅",
    swimming: "🏊",
    oneHour: "⏱️",
    evening: "🍽️"
  };
  return icons[type] || "❓";
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
        {Object.entries(tourTypes).map(([key, tour]) => (
          <motion.div 
            key={key}
            className="time-slot-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="time-icon">{getIconForTourType(key)}</span>
            <h3>{tour.label}</h3>
            <p className="time-range">{tour.description}</p>
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