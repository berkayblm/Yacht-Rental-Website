import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import './styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { currentLanguage, setCurrentLanguage } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' }
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img 
            src="/images/side-vip-logo.jpg"
            alt="Side VIP Logo"
            className="navbar-logo"
          />
          Yacht Rental
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                to="/"
                onClick={toggleMenu}
              >
                {translations[currentLanguage].navbar.home}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/yachts' ? 'active' : ''}`}
                to="/yachts"
                onClick={toggleMenu}
              >
                {translations[currentLanguage].navbar.yachts}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                to="/about"
                onClick={toggleMenu}
              >
                {translations[currentLanguage].navbar.about}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                to="/contact"
                onClick={toggleMenu}
              >
                {translations[currentLanguage].navbar.contact}
              </Link>
            </li>
            <li className="nav-item">
              <button
                className="nav-link language-btn"
                onClick={(e) => {
                  const dropdown = e.currentTarget.nextElementSibling;
                  dropdown.classList.toggle('show');
                }}
              >
                {languages.find(lang => lang.code === currentLanguage)?.flag}
              </button>
              <ul className="language-dropdown">
                {languages.map((lang) => (
                  <li key={lang.code}>
                    <button
                      className={`language-option ${currentLanguage === lang.code ? 'active' : ''}`}
                      onClick={() => {
                        setCurrentLanguage(lang.code);
                        document.querySelector('.language-dropdown').classList.remove('show');
                        toggleMenu();
                      }}
                    >
                      {lang.flag} {lang.name}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;