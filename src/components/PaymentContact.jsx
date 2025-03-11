import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaTelegram, FaEnvelope, FaTimes } from 'react-icons/fa';
import './styles/PaymentContact.css';
import { useLanguage } from '../context/LanguageContext';
import { paymentContactTranslations } from '../translations/paymentContactComponentTranslations';

const PaymentContact = ({ isOpen, onClose, yachtName, price }) => {
  const { currentLanguage } = useLanguage();
  const translations = paymentContactTranslations[currentLanguage] || paymentContactTranslations['en']; // Fallback to English

  const contactMethods = [
    {
      icon: <FaWhatsapp />,
      name: translations.contactMethods.whatsapp,
      action: () => window.open('https://wa.me/905555555555?text=' + 
        encodeURIComponent(`Hello, I would like to book ${yachtName} for ${price}. Please provide payment details.`)),
      color: '#25D366'
    },
    {
      icon: <FaTelegram />,
      name: translations.contactMethods.telegram,
      action: () => window.open('https://t.me/yourusername'),
      color: '#0088cc'
    },
    {
      icon: <FaEnvelope />,
      name: translations.contactMethods.email,
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
              <h2>{translations.bookYourYacht}</h2>
              <p className="yacht-info">
                {yachtName} - {price}
              </p>
              
              <div className="payment-steps">
                <h3>{translations.bookingSteps}</h3>
                <ol>
                  {translations.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>

              <div className="contact-methods">
                <h3>{translations.contactUsVia}</h3>
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
                  <strong>{translations.noteTitle}</strong> {translations.noteText}
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