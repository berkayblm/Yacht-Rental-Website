import React from 'react';
import { motion } from 'framer-motion';
import { FaAnchor, FaShip, FaUserTie, FaRegHandshake } from 'react-icons/fa';
import {  MdLocationOn, MdEmail } from 'react-icons/md';
import Navbar from '../components/Navbar';
import Maps from '../components/Maps';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import './styles/About.css';
import { BiPhone } from 'react-icons/bi';

const About = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage].about;

  const values = [
    { icon: <FaAnchor />, key: 'excellence' },
    { icon: <FaRegHandshake />, key: 'safety' },
    { icon: <FaShip />, key: 'luxury' },
    { icon: <FaUserTie />, key: 'trust' }
  ];

  return (
    <>
      <Navbar />
      <motion.section
        className="about-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <div className="about-hero-content">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {t.hero.title}
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {t.hero.subtitle}
            </motion.p>
          </div>
        </div>
      </motion.section>

      <section className="our-story-section">
        <div className="container">
          <div className="story-content">
            <motion.div
              className="story-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>{t.story.title}</h2>
              <p>{t.story.description1}</p>
              <p>{t.story.description2}</p>
            </motion.div>
            <motion.div
              className="story-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src="/images/IMG_20220711_225349_830.jpg" alt="Our Story" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2>{t.values.title}</h2>
          <div className="values-grid">
            {values.map(({ icon, key }, index) => (
              <motion.div
                key={key}
                className="value-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="value-icon">{icon}</div>
                <h3>{t.values.cards[key].title}</h3>
                <p>{t.values.cards[key].description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <motion.section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <motion.div
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3>3+</h3>
              <p>{t.stats.experience}</p>
            </motion.div>
            <motion.div
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3>500+</h3>
              <p>{t.stats.clients}</p>
            </motion.div>
            <motion.div
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3>100%</h3>
              <p>{t.stats.satisfaction}</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="location-section">
        <div className="container">
          <div className="location-content">
            <motion.div
              className="location-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2>{t.location.title}</h2>
              <p>{t.location.description}</p>
              <div className="contact-info">
                <h3>{t.location.contact.title}</h3>
                <p>
                  <MdLocationOn /> {t.location.contact.address}
                </p>
                <p>
                  <BiPhone /> {t.location.contact.phone}
                </p>
                <p>
                  <MdEmail /> {t.location.contact.email}
                </p>
              </div>
            </motion.div>
            <div className="location-map">
              <Maps />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;