import React from 'react';
import { motion } from 'framer-motion';
import './styles/InfoSection.css';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import PaymentContact from './PaymentContact'; // Import the PaymentContact component
import { useState } from 'react';
import { yachtTranslations } from '../translations/yachtData';
const InfoSection = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage].infoSection;
  const [isPaymentContactOpen, setPaymentContactOpen] = useState(false);

  const yachtData = yachtTranslations[currentLanguage]?.[2] || yachtTranslations['en'][2]; // Fallback to English
  const yachtName = yachtData.name;
  const price = yachtData.price;

  return (
    <section className="info-section">
      <div className="container">
        {/* Hero Banner Section */}
        <motion.div 
          className="hero-banner"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/images/IMG_20220711_225349_830.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="banner-content">
            <h1>{t.banner.title}</h1>
            <motion.button 
              className="booking-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setPaymentContactOpen(true)} // Open the PaymentContact popup
            
            >
              {t.banner.button}
            </motion.button>
          </div>
        </motion.div>

        {/* Nested Images Feature Section */}
        <motion.div 
          className="nested-image-feature"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="nested-images">
            <motion.div 
              className="main-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="/images/DJI_0720+ kopya.jpg" 
                alt={t.images.mainImageAlt} 
                loading="lazy"
                onLoad={(e) => e.target.classList.add('loaded')}
              />
              <div className="image-placeholder"></div>
            </motion.div>
            <motion.div 
              className="overlay-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img 
                src="/images/20240520_111108.jpg" 
                alt={t.images.overlayImageAlt} 
                loading="lazy"
                onLoad={(e) => e.target.classList.add('loaded')}
              />
              <div className="image-placeholder"></div>
            </motion.div>
          </div>
          

          <div className="content-container">
            <span className="feature-label">{t.discover.label}</span>
            <h2>{t.discover.title}</h2>
            <p>{t.discover.description1}</p>
            <p>{t.discover.description2}</p>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <div className="benefits-grid">
          <motion.div 
            className="benefit-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="icon-container blue">
              <i className="fas fa-anchor"></i>
            </div>
            <h3>{t.benefits.expertise.title}</h3>
            <p>{t.benefits.expertise.description}</p>
          </motion.div>

          <motion.div 
            className="benefit-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="icon-container yellow">
              <i className="fas fa-compass"></i>
            </div>
            <h3>{t.benefits.service.title}</h3>
            <p>{t.benefits.service.description}</p>
          </motion.div>

          <motion.div 
            className="benefit-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="icon-container purple">
              <i className="fas fa-concierge-bell"></i>
            </div>
            <h3>{t.benefits.personalized.title}</h3>
            <p>{t.benefits.personalized.description}</p>
          </motion.div>
        </div>

        {/* Promo Banner */}
        <motion.div 
          className="promo-banner"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="promo-content">
            <h2>{t.promo.title}</h2>
            <p>{t.promo.description}</p>
            <motion.button 
              className="view-offers-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.promo.button}
            </motion.button>
          </div>
          <div className="promo-image">
            <img 
              src="/side-1.jpg" 
              alt={t.images.promoImageAlt} 
              loading="lazy"
              onLoad={(e) => e.target.classList.add('loaded')}
            />
            <div className="image-placeholder"></div>
          </div>
        </motion.div>

        {/* PaymentContact Popup */}
        <PaymentContact
          isOpen={isPaymentContactOpen}
          onClose={() => setPaymentContactOpen(false)} // Close the popup
          yachtName={yachtName}
          price={price}
        />
      </div>
    </section>
  );
};

export default InfoSection; 