import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './styles/YachtListings.css';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const YachtListings = ({ yachts }) => {

  const navigate = useNavigate();
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage].yachtListings;

  const handleYachtClick = (yachtId) => {
    navigate(`/yachts/${yachtId}`);
  };

  const handleViewAllClick = () => {
    navigate('/yachts');
  };
  
  return (
    <motion.section 
      className="yacht-listings"
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
        </motion.div>
        
        <div className="yacht-cards">
          {yachts.map((yacht, index) => (
            <motion.div 
              key={yacht.id}
              className="yacht-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.2 }}}
              onClick={() => handleYachtClick(yacht.id)}
            >
              <div className="yacht-image">
                <motion.img 
                  src={yacht.image} 
                  alt={yacht.name}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <motion.div className="yacht-price">
                {yacht.price} 
              </motion.div>
              <h3 className="yacht-name">{yacht.name}</h3>
              
              <div className="yacht-details">
                <div className="detail-item">
                  <span className="label">{t.details.capacity}</span>
                  <span className="value">{yacht.details.totalCapacity}</span>
                </div>
                <div className="detail-item">
                  <span className="label">{t.details.cabins}</span>
                  <span className="value">{yacht.details.totalCabins}</span>
                </div>
                <div className="detail-item">
                  <span className="label">{t.details.location}</span>
                  <span className="value">{yacht.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="view-all-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.button
            className="view-all-button"
            onClick={handleViewAllClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.viewAll}
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default YachtListings; 