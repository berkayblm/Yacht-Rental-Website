import React from 'react';
import { motion } from 'framer-motion';
import './styles/TourRoadmap.css';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const TourRoadmap = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage].tourRoadmap;

  return (
    <motion.section 
      className="tour-roadmap"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="subtitle">{t.title}</h4>
          <h2 className="title">{t.subtitle}</h2>
          <p className="description">{t.description}</p>
        </motion.div>

        <div className="timeline">
          {t.stops.map((stop, index) => (
            <motion.div 
              key={index}
              className={`timeline-item`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="timeline-content">
                <div className="time-badge">{stop.time}</div>
                <h3>{stop.location}</h3>
                <p>{stop.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TourRoadmap; 