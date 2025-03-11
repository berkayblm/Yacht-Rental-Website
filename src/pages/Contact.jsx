import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import './styles/Contact.css';

const Contact = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage].contact;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const scrollToTop = () => {
      try {
        // Try multiple scroll methods
        window.scroll(0, 0);
        window.scrollTo(0, 0);
        document.documentElement.scrollTo(0, 0);
        document.body.scrollTo(0, 0);
        
        // Force scroll with timeout as fallback
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto'
          });
        }, 100);
      } catch (error) {
        console.error('Error scrolling:', error);
      }
    };

    scrollToTop();
  }, []); // Empty dependency array for contact page

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct email body
    const emailBody = `
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Subject: ${formData.subject}
      Message: ${formData.message}
    `;

    // Create mailto link
    const mailtoLink = `mailto:berkayant4@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;

    // Open default email client
    window.location.href = mailtoLink;

    // Clear form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      <Navbar />
      <div className="contact-page">
        <div className="container">
          {/* Contact Header */}
          <motion.div
            className="contact-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>{t.header.title}</h1>
            <p>{t.header.subtitle}</p>
          </motion.div>

          <div className="contact-content">
            {/* Contact Information */}
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="info-card">
                <FaPhone className="info-icon" />
                <h3>{t.info.phone.title}</h3>
                {t.info.phone.numbers.map((number, index) => (
                  <p key={index}>{number}</p>
                ))}
              </div>

              <div className="info-card">
                <FaEnvelope className="info-icon" />
                <h3>{t.info.email.title}</h3>
                {t.info.email.addresses.map((email, index) => (
                  <p key={index}>{email}</p>
                ))}
              </div>

              <div className="info-card">
                <FaMapMarkerAlt className="info-icon" />
                <h3>{t.info.location.title}</h3>
                {t.info.location.address.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="contact-form-container"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">{t.form.fields.name.label}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">{t.form.fields.email.label}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <small className="form-info">{t.form.fields.email.hint}</small>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">{t.form.fields.phone.label}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t.form.fields.phone.placeholder}
                    required
                  />
                  <small className="form-info">{t.form.fields.phone.hint}</small>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">{t.form.fields.subject.label}</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">{t.form.fields.message.label}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                  />
                </div>

                <button type="submit" className="submit-btn">
                  {t.form.submitButton}
                </button>
              </form>
            </motion.div>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default Contact; 