import React from 'react';
import { motion } from 'framer-motion';
import './styles/Features.css';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Features = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage].features;

  const features = [
    {
      emoji: "⛵",
      title: t.yachtCharters.title,
      description: t.yachtCharters.description
    },
    {
      emoji: "⭐",
      title: t.service.title,
      description: t.service.description
    },
    {
      emoji: "👑",
      title: t.fleet.title,
      description: t.fleet.description
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      className="features-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="wave-top">
        <div className="ship">
          <img src="/boat.png" alt="Yacht icon" />
        </div>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M-200,40 C0,20 200,80 400,60 C600,40 800,80 1000,40 C1200,20 1400,60 1600,40 L1600,0 L-200,0 Z" className="wave-fill"></path>
        </svg>
        <svg data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M-200,60 C0,20 300,80 600,40 C900,20 1200,60 1500,20 L1500,0 L-200,0 Z" className="wave-fill"></path>
        </svg>
        <svg data-name="Layer 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M-200,20 C0,60 200,0 450,40 C700,80 900,20 1100,60 C1300,20 1500,60 1700,20 L1700,0 L-200,0 Z" className="wave-fill"></path>
        </svg>
      </div>
      <div className="container">
        <motion.div className="features-row">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-item"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <motion.span 
                className="feature-emoji" 
                role="img" 
                aria-label={feature.title.toLowerCase()}
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {feature.emoji}
              </motion.span>
              <div className="feature-content">
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {feature.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Features; 