import React from 'react';
import { motion } from 'framer-motion';
import { FaAnchor, FaShip, FaUserTie, FaRegHandshake } from 'react-icons/fa';
import { MdSecurity, MdLocationOn } from 'react-icons/md';
import Navbar from '../components/Navbar';
import Maps from '../components/Maps';
import './styles/About.css';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <motion.div 
        className="about-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="about-hero-content">
          <motion.h1 {...fadeIn}>About Side Vip Yacht Rental</motion.h1>
          <motion.p 
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            Crafting Unforgettable Maritime Experiences Since 2020
          </motion.p>
        </div>
      </motion.div>

      {/* Our Story Section */}
      <motion.section 
        className="our-story-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <motion.div className="story-content">
            <motion.div 
              className="story-text"
              {...fadeIn}
              transition={{ delay: 0.3 }}
            >
              <h2>Our Story</h2>
              <p>Founded in 2020, Side Vip Yacht Rental emerged from a passion for luxury maritime experiences and a vision to make yacht chartering accessible to those seeking extraordinary adventures at sea.</p>
              <p>Over the years, we've built a reputation for excellence, curating a fleet of the finest yachts and delivering personalized service that exceeds expectations. Our journey has been marked by countless satisfied clients and memorable voyages along the stunning Turkish coastline.</p>
            </motion.div>
            <motion.div 
              className="story-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src="/images/side-vip-img-1.jpg" alt="Luxury yacht experience" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section 
        className="values-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <motion.h2 {...fadeIn}>Our Core Values</motion.h2>
          <div className="values-grid">
            {[
              { icon: <FaAnchor />, title: "Excellence", text: "Committed to delivering the highest standards in luxury yacht experiences" },
              { icon: <FaUserTie />, title: "Professionalism", text: "Expert crew and staff dedicated to your comfort and safety" },
              { icon: <MdSecurity />, title: "Safety", text: "Rigorous safety protocols and well-maintained vessels" },
              { icon: <FaRegHandshake />, title: "Trust", text: "Building lasting relationships through transparency and reliability" }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="stats-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="stats-grid">
            {[
              { number: "5+", text: "Years Experience" },
              { number: "500+", text: "Happy Clients" },
             
              { number: "100%", text: "Satisfaction" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-card"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3>{stat.number}</h3>
                <p>{stat.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Location Section */}
      <motion.section 
        className="location-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="location-content">
            <motion.div 
              className="location-text"
              {...fadeIn}
              transition={{ delay: 0.3 }}
            >
              <MdLocationOn className="location-icon" />
              <h2>Our Location</h2>
              <p>Based in the heart of Side, Turkey, our office is conveniently located near the historic marina. We're perfectly positioned to serve your yacht charter needs across the Turkish Riviera.</p>
              <div className="contact-info">
                <p><strong>Address:</strong> Marina Street No:123, Side, Antalya, Turkey</p>
                <p><strong>Phone:</strong> +90 123 456 7890</p>
                <p><strong>Email:</strong> info@example.com</p>
              </div>
            </motion.div>
            <motion.div 
              className="location-map"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Maps />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default About;