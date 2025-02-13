import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Maps from '../components/Maps';
import './styles/Contact.css';

const Contact = () => {
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
            <h1>Contact Us</h1>
            <p>Get in touch with us for any questions or inquiries</p>
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
                <h3>Phone</h3>
                <p>+90 123 456 7890</p>
                <p>+90 123 456 7891</p>
              </div>

              <div className="info-card">
                <FaEnvelope className="info-icon" />
                <h3>Email</h3>
                <p>info@sidevipyacht.com</p>
                <p>support@sidevipyacht.com</p>
              </div>

              <div className="info-card">
                <FaMapMarkerAlt className="info-icon" />
                <h3>Location</h3>
                <p>Marina Street No:123</p>
                <p>Side, Antalya, Turkey</p>
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
                  <label htmlFor="name">Name</label>
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
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <small className="form-info">Add your email address that you want us to contact you</small>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+90 XXX XXX XXXX"
                    required
                  />
                  <small className="form-info">Add your phone number that you want us to contact you</small>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
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
                  <label htmlFor="message">Message</label>
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
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            className="map-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2>Find Us</h2>
            <div className="map-container">
              <Maps />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact; 