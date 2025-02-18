import React from 'react';
import { motion } from 'framer-motion';
import './styles/InfoSection.css';

const InfoSection = () => {
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
        >
          <div className="banner-content">
            <h1>Let's discover amazing<br />and luxurious yacht today!</h1>
            <motion.button 
              className="booking-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              BOOKING NOW →
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
              <img src="/images/DJI_0720+ kopya.jpg" alt="Luxury yacht at sunset" />
            </motion.div>
            <motion.div 
              className="overlay-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img src="/la-perla-5.jpeg" alt="Captain steering the yacht" />
            </motion.div>
          </div>
          

          <div className="content-container">
            <span className="feature-label">DISCOVER</span>
            <h2>Discover best yacht</h2>
            <p>
              Our Side Yacht Tour takes place on a family-run yacht. If you 
              are not familiar with this style of vessel, it's a wooden sailing 
              vessel commonly found in the southwest of Turkey and the 
              eastern Mediterranean.
            </p>
            <p>
              The vessel will be yours for the day and is equipped with 
              modern toilets, TVs, comfortable cushions, loungers, and 
              seatings on board.
            </p>
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
            <h3>Premium Fleet Selection</h3>
            <p>Choose from our curated collection of luxury yachts, 
              each maintained to the highest standards of excellence.</p>
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
            <h3>Expert Local Knowledge</h3>
            <p>Our experienced crew knows every hidden gem along the 
              Turkish coast, ensuring an authentic experience.</p>
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
            <h3>Personalized Service</h3>
            <p>Tailored itineraries and premium onboard services 
              designed to exceed your expectations.</p>
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
            <h2>Special Summer Offers</h2>
            <p>Book your dream yacht experience now and enjoy up to 20% off on selected dates.
               Early bird discounts and flexible booking options available.</p>
            <motion.button 
              className="view-offers-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              VIEW OFFERS
            </motion.button>
          </div>
          <div className="promo-image">
            <img src="/side-1.jpg" alt="Luxury yacht experience" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InfoSection; 