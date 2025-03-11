import React from 'react';
import { motion } from 'framer-motion';
import './styles/WelcomeSection.css';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const WelcomeSection = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage].welcome;

  return (
    <div className="welcome-container">
      <div className="welcome-header">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="main-title"
        >
          {t.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="subtitle"
        >
          {t.subtitle}
        </motion.p>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="highlight-text"
      >
        {t.description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="features-grid"
      >
        <div className="feature-box">
          <i className="fas fa-anchor"></i>
          <h3>{t.features.premium.title}</h3>
          <p>{t.features.premium.description}</p>
        </div>
        <div className="feature-box">
          <i className="fas fa-map-marked-alt"></i>
          <h3>{t.features.routes.title}</h3>
          <p>{t.features.routes.description}</p>
        </div>
        <div className="feature-box">
          <i className="fas fa-concierge-bell"></i>
          <h3>{t.features.crew.title}</h3>
          <p>{t.features.crew.description}</p>
        </div>
        <div className="feature-box">
          <i className="fas fa-glass-cheers"></i>
          <h3>{t.features.luxury.title}</h3>
          <p>{t.features.luxury.description}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default WelcomeSection; 