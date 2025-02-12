import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content container">
        {/* Company Info */}
        <div className="footer-section">
          <h3>Side Vip Yacht Rental</h3>
          <p>Experience luxury yachting in the heart of the Turkish Riviera. Your journey to extraordinary maritime adventures begins here.</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <nav className="footer-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/yachts">Our Yachts</Link>
            <Link to="/destinations">Destinations</Link>
            
          </nav>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h4>Our Services</h4>
          <nav className="footer-nav">
            <Link to="/yachts">Yacht Charter</Link>
            
          </nav>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <div className="contact-info-2">
            <p>
              <FaMapMarkerAlt />
              <span>Marina Street No:123, Side, Antalya, Turkey</span>
            </p>
            <p>
              <FaPhone />
              <span>+90 123 456 7890</span>
            </p>
            <p>
              <FaEnvelope />
              <span>info@example.com</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Side Vip Yacht Rental. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;