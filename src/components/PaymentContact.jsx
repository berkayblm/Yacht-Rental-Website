import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaTelegram, FaEnvelope, FaTimes } from 'react-icons/fa';
import './styles/PaymentContact.css';

const PaymentContact = ({ isOpen, onClose, yachtName, price }) => {
  const contactMethods = [
    {
      icon: <FaWhatsapp />,
      name: 'WhatsApp',
      action: () => window.open('https://wa.me/905555555555?text=' + 
        encodeURIComponent(`Hello, I would like to book ${yachtName} for ${price}. Please provide payment details.`)),
      color: '#25D366'
    },
    {
      icon: <FaTelegram />,
      name: 'Telegram',
      action: () => window.open('https://t.me/yourusername'),
      color: '#0088cc'
    },
    {
      icon: <FaEnvelope />,
      name: 'Email',
      action: () => window.location.href = `mailto:info@yachtluxe.com?subject=Booking ${yachtName}&body=Hello, I would like to book ${yachtName} for ${price}. Please provide payment details.`,
      color: '#EA4335'
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="payment-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="payment-modal"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <div className="modal-header">
              <button className="close-button" onClick={onClose}>
                <FaTimes />
              </button>
            </div>
            
            <div className="payment-content">
              <h2>Book Your Yacht</h2>
              <p className="yacht-info">
                {yachtName} - {price}
              </p>
              
              <div className="payment-steps">
                <h3>Booking Steps:</h3>
                <ol>
                  <li>Choose your preferred contact method below</li>
                  <li>Send us your booking details</li>
                  <li>Receive payment instructions</li>
                  <li>Complete your payment securely</li>
                  <li>Get your booking confirmation</li>
                </ol>
              </div>

              <div className="contact-methods">
                <h3>Contact Us Via:</h3>
                <div className="contact-buttons">
                  {contactMethods.map((method, index) => (
                    <motion.button
                      key={index}
                      className="contact-button"
                      onClick={method.action}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ backgroundColor: method.color }}
                    >
                      {method.icon}
                      <span>{method.name}</span>
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="payment-note">
                <p>
                  <strong>Note:</strong> Your booking will be confirmed after payment is received. 
                  For any questions, please don't hesitate to contact us.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PaymentContact; 