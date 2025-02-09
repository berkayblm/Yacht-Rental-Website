import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import './styles/YachtDetails.css';

const YachtDetails = ({ yachts }) => {
  const { yachtId } = useParams();
  const yacht = yachts.find(y => y.id === parseInt(yachtId));
  const [showFullDescription, setShowFullDescription] = useState(false);

  if (!yacht) {
    return <div>Yacht not found</div>;
  }

  const images = [
    '/la-perla-5.jpeg',
    '/side-1.jpg',
    '/yacht-sunset.jpg',
    '/yacht-interior.jpg',
  ];

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <>
      <Navbar />
      <div className="yacht-details-page">
        <div className="container">
          {/* Header Section */}
          <motion.div 
            className="yacht-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>{yacht.name}</h1>
            <div className="price-tag">{yacht.price}</div>
          </motion.div>

          {/* Image Gallery */}
          <motion.div 
            className="yacht-gallery"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="main-image">
              <img src={yacht.image} alt={yacht.name} />
            </div>
            <div className="thumbnail-grid">
              {images.map((img, index) => (
                <motion.div 
                  key={index}
                  className="thumbnail"
                  whileHover={{ scale: 1.05 }}
                >
                  <img src={img} alt={`${yacht.name} view ${index + 1}`} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Description Section with Preview */}
          <motion.section 
            className="details-section description-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2>Description</h2>
            <div className="description-preview">
              <h3>OUR SPECIAL OFFER INCLUDED IN THE PRICE</h3>
              <p className="main-description">{yacht.description.main}</p>
              
              {/* Preview of highlights */}
              <div className="highlights">
                {yacht.description.highlights.slice(0, 2).map((highlight, index) => (
                  <p key={index}>
                    <span className="emoji">🌟</span> {highlight}
                  </p>
                ))}
              </div>

              <button 
                className="read-more-btn"
                onClick={toggleDescription}
              >
                Read More...
              </button>
            </div>
          </motion.section>

          {/* Full Description Popup */}
          <AnimatePresence>
            {showFullDescription && (
              <>
                <motion.div 
                  className="popup-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={toggleDescription}
                />
                <motion.div 
                  className="description-popup"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                >
                  <div className="popup-header">
                    <h2>Description</h2>
                    <button 
                      className="close-popup"
                      onClick={toggleDescription}
                    >
                      ✕
                    </button>
                  </div>
                  
                  <div className="popup-content">
                    <h3>OUR SPECIAL OFFER INCLUDED IN THE PRICE</h3>
                    <p className="main-description">{yacht.description.main}</p>
                    
                    <div className="highlights">
                      <p>
                        <span className="emoji">🚢</span> {yacht.description.highlights[0]}
                      </p>
                      <p>
                        <span className="emoji">👨‍✈️</span> {yacht.description.highlights[1]}
                      </p>
                      <p>
                        <span className="emoji">⏰</span> {yacht.description.highlights[2]}
                      </p>
                    </div>

                    <div className="location-info">
                      <p>
                        <span className="emoji">📍</span> Departure Marina: {yacht.description.location.departure}
                      </p>
                      <p>
                        <span className="emoji">📍</span> The beverage and food menu specified here is included in the price.
                      </p>
                      <p>
                        <span className="emoji">📍</span> Menu: {[
                          ...yacht.description.includedMenu.mainDishes,
                          ...yacht.description.includedMenu.sides
                        ].join(', ')},
                        Fruity Soft Drinks ({yacht.description.includedMenu.beverages.join(', ')})
                      </p>
                    </div>

                    <div className="extra-info">
                      <p>{yacht.description.extraServices.note}</p>
                    </div>

                    <div className="extra-services">
                      <h4>FOR EXTRA SERVICES AND REQUESTS NOT INCLUDED IN THE PRICE</h4>
                      {yacht.description.extraServices.options.map((option, index) => (
                        <p key={index}>
                          <span className="emoji">✅</span> {option}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Details Grid */}
          <div className="details-grid">
            {/* Overview Section */}
            <motion.section 
              className="details-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2>Overview</h2>
              <div className="overview-grid">
                <div className="overview-item">
                  <i className="fas fa-clock"></i>
                  <h3>Duration</h3>
                  <p>{yacht.details.startTime}</p>
                </div>
                <div className="overview-item">
                  <i className="fas fa-users"></i>
                  <h3>Capacity</h3>
                  <p>{yacht.details.totalCapacity}</p>
                </div>
                <div className="overview-item">
                  <i className="fas fa-door-closed"></i>
                  <h3>Cabins</h3>
                  <p>{yacht.details.totalCabins}</p>
                </div>
                <div className="overview-item">
                  <i className="fas fa-anchor"></i>
                  <h3>Breaks</h3>
                  <p>{yacht.details.totalBreaks}</p>
                </div>
              </div>
            </motion.section>

            {/* Services Section */}
            <motion.section 
              className="details-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2>Included Services</h2>
              <div className="services-grid">
                <div className="service-item">
                  <i className="fas fa-utensils"></i>
                  <span>Catering: {yacht.details.catering}</span>
                </div>
                <div className="service-item">
                  <i className="fas fa-glass-martini-alt"></i>
                  <span>Drinks: {yacht.details.alcoholDrink}</span>
                </div>
                <div className="service-item">
                  <i className="fas fa-star"></i>
                  <span>Special: {yacht.details.special}</span>
                </div>
              </div>
            </motion.section>

            {/* Booking Section */}
            <motion.section 
              className="booking-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2>Book This Yacht</h2>
              <p>Experience luxury at sea with our premium yacht service</p>
              <motion.button 
                className="book-now-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Now
              </motion.button>
            </motion.section>

            {/* Technical Specifications */}
            <motion.section 
              className="details-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2>Technical Specifications</h2>
              <div className="specs-grid">
                <div className="spec-item">
                  <i className="fas fa-ruler-combined"></i>
                  <h3>Length</h3>
                  <p>{yacht.details.length}</p>
                </div>
                <div className="spec-item">
                  <i className="fas fa-ship"></i>
                  <h3>Builder</h3>
                  <p>{yacht.builder}</p>
                </div>
                {/* Add more spec items */}
              </div>
            </motion.section>

            {/* Accommodation */}
            <motion.section 
              className="details-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h2>Accommodation</h2>
              <div className="cabin-layout">
                <div className="cabin-info">
                  <h3>Cabin Configuration</h3>
                  <ul>
                    <li>{yacht.details.cabins.master} Master Cabin</li>
                    <li>{yacht.details.cabins.double} Double Cabins</li>
                    <li>{yacht.details.cabins.twin} Twin Cabin</li>
                  </ul>
                </div>
                <div className="capacity-info">
                  <h3>Capacity</h3>
                  <p>Day: {yacht.details.guestCapacity.day} guests</p>
                  <p>Overnight: {yacht.details.guestCapacity.overnight} guests</p>
                </div>
              </div>
            </motion.section>

            {/* Equipment & Toys */}
            <motion.section 
              className="details-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h2>Equipment & Water Toys</h2>
              <div className="equipment-grid">
                {yacht.details.waterToys.map((toy, index) => (
                  <div key={index} className="equipment-item">
                    <i className="fas fa-check"></i>
                    <span>{toy}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Optional Services */}
            <motion.section 
              className="details-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <h2>Optional Services</h2>
              <div className="services-list">
                {yacht.details.optionalServices.map((service, index) => (
                  <div key={index} className="optional-service">
                    <span className="service-name">{service.name}</span>
                    <span className="service-price">{service.price}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Cancellation Policy */}
            <motion.section 
              className="details-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <h2>Cancellation Policy</h2>
              <div className="cancellation-info">
                <p><strong>Full Refund:</strong> {yacht.details.cancellation.fullRefund}</p>
                <p><strong>Partial Refund:</strong> {yacht.details.cancellation.partialRefund}</p>
                <p><strong>No Refund:</strong> {yacht.details.cancellation.noRefund}</p>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </>
  );
};

export default YachtDetails; 