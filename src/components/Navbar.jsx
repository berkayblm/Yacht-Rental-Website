import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/Navbar.css';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/images/side-vip-logo.jpg" alt="Side VIP Logo" className="navbar-logo" />
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
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/yachts' ? 'active' : ''}`}
                to="/yachts"
                onClick={toggleMenu}
              >
                Yachts
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                to="/about"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/destinations' ? 'active' : ''}`}
                to="/destinations"
                onClick={toggleMenu}
              >
                Destinations
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;