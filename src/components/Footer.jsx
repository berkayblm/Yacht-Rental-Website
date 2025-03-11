import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './styles/Footer.css';
import { useLanguage } from '../context/LanguageContext'; // Adjust path as needed
import { footerTranslations } from '../translations/footerComponentTranslations'; // Adjust path as needed

const Footer = () => {
  const { currentLanguage } = useLanguage();
  const translations = footerTranslations[currentLanguage] || footerTranslations['en']; // Fallback to English
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content container">
        {/* Company Info */}
        <div className="footer-section">
          <h3>{translations.companyName}</h3>
          <p>{translations.companyDescription}</p>
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
          <h4>{translations.quickLinks}</h4>
          <nav className="footer-nav">
            <Link to="/">{translations.quickLinksItems.home}</Link>
            <Link to="/about">{translations.quickLinksItems.aboutUs}</Link>
            <Link to="/yachts">{translations.quickLinksItems.ourYachts}</Link>
            <Link to="/destinations">{translations.quickLinksItems.destinations}</Link>
          </nav>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h4>{translations.ourServices}</h4>
          <nav className="footer-nav">
            <Link to="/yachts">{translations.servicesItems.yachtCharter}</Link>
          </nav>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>{translations.contactUs}</h4>
          <div className="contact-info-2">
            <p>
              <FaMapMarkerAlt />
              <span>{translations.contactInfo.address}</span>
            </p>
            <p>
              <FaPhone />
              <span>{translations.contactInfo.phone}</span>
            </p>
            <p>
              <FaEnvelope />
              <span>{translations.contactInfo.email}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <p>{translations.copyright.replace('{year}', currentYear)}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;