import React from 'react';
import { motion } from 'framer-motion';
import './styles/Hero.css';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Hero = () => {
  const navigate = useNavigate();
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage].hero;

  return (
    <motion.div
      className="hero-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src="/videos/side.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="hero-content">
        <span className="hero-label">{t.label}</span>
        <h1 className="hero-title">{t.title}</h1>
        <p className="hero-description">{t.description}</p>
        <motion.button 
          className="reserve-now-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}  
          onClick={() => navigate('/yachts')}
        >
          {t.button}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Hero;