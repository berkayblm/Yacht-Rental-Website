import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-auto py-4" style={{ backgroundColor: 'var(--dark-blue) !important' }}>
      <div className="container text-white">
        <div className="row">
          <div className="col-md-6 text-white">
            <h5>Contact Us</h5>
            <p className='text-white'>Email: info@yachtrental.com</p>
            <p className='text-white'>Phone: +123 456 7890</p>
          </div>
          <div className="col-md-6">
            <h5>Follow Us</h5>
            <a href="https://facebook.com" className="text-white me-2">Facebook</a>
            <a href="https://twitter.com" className="text-white me-2">Twitter</a>
            <a href="https://instagram.com" className="text-white me-2">Instagram</a>
          </div>
        </div>
        <div className="text-center mt-3">
          <p className='text-white'>&copy; 2023 Yacht Rental. All rights reserved.</p>
        </div>
      </div>
    </footer>

  );
};

export default Footer;