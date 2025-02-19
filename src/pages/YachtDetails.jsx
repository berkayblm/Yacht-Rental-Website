import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import TimeOptions from '../components/TimeOptions';
import PaymentContact from '../components/PaymentContact';
import './styles/YachtDetails.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const YachtDetails = ({ yachts }) => {
  const { yachtId } = useParams();
  const yacht = yachts.find(y => y.id === parseInt(yachtId));
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Combine main image and other images for navigation
  const allImages = yacht ? [yacht.image, ...(yacht.images || [])] : [];

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const handleImageClick = (imageSrc) => {
    const index = allImages.indexOf(imageSrc);
    setCurrentImageIndex(index);
    setSelectedImage(imageSrc);
  };

  const handleCloseImageViewer = () => {
    setSelectedImage(null);
    setCurrentImageIndex(0);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    const newIndex = (currentImageIndex - 1 + allImages.length) % allImages.length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(allImages[newIndex]);
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    const newIndex = (currentImageIndex + 1) % allImages.length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(allImages[newIndex]);
  };

  // Scroll to top effect
  useEffect(() => {
    const scrollToTop = () => {
      try {
        window.scroll(0, 0);
        window.scrollTo(0, 0);
        document.documentElement.scrollTo(0, 0);
        document.body.scrollTo(0, 0);
        
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
  }, [yachtId]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          handlePrevImage(e);
          break;
        case 'ArrowRight':
          handleNextImage(e);
          break;
        case 'Escape':
          handleCloseImageViewer();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, currentImageIndex, allImages]); // Added allImages to dependencies

  if (!yacht) {
    return <div>Yacht not found</div>;
  }

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
            <div className="main-image" onClick={() => handleImageClick(yacht.image)}>
              {yacht.image && (
                <img
                  src={yacht.image}
                  alt={yacht.name}
                  onError={(e) => {
                    console.log('Error loading image:', e.target.src);
                    e.target.onerror = null;
                    e.target.src = '/fallback-image.jpg';
                  }}
                />
              )}
            </div>
            
            {Array.isArray(yacht.images) && yacht.images.length > 0 && (
              <div className="thumbnail-slider-container">
                <Slider
                  dots={false}
                  infinite={true}
                  speed={500}
                  slidesToShow={3}
                  slidesToScroll={1}
                  responsive={[
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                      }
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    }
                  ]}
                >
                  {yacht.images.map((img, index) => (
                    <motion.div
                      key={index}
                      className="thumbnail"
                      whileHover={{ scale: 1.05 }}
                      onClick={() => handleImageClick(img)}
                    >
                      <img
                        src={img}
                        alt={`${yacht.name} view ${index + 1}`}
                        onError={(e) => {
                          console.log('Error loading thumbnail:', e.target.src);
                          e.target.onerror = null;
                          e.target.src = '/fallback-image.jpg';
                        }}
                      />
                    </motion.div>
                  ))}
                </Slider>
              </div>
            )}
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

          {/* Add TimeOptions section before or after the description section */}
          <TimeOptions timeSlots={yacht.timeSlots} />
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

          {/* Features Section */}
          <motion.section
            className="details-section features-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2>The Features of {yacht.name}</h2>
            <div className="features-grid">
              <div className="features-column">
                <div className="feature-item">
                  <span className="feature-label">Yacht Name:</span>
                  <span className="feature-value">{yacht.features.yachtName}</span>
                </div>
                <div className="feature-item">
                  <span className="feature-label">Yacht Type:</span>
                  <span className="feature-value">{yacht.features.yachtType}</span>
                </div>
                <div className="feature-item">
                  <span className="feature-label">Brand:</span>
                  <span className="feature-value">{yacht.features.brand}</span>
                </div>
                <div className="feature-item">
                  <span className="feature-label">Capacity:</span>
                  <span className="feature-value">{yacht.features.capacity}</span>
                </div>
                <div className="feature-item">
                  <span className="feature-label">Crew:</span>
                  <span className="feature-value">{yacht.features.crew}</span>
                </div>
                <div className="feature-item">
                  <span className="feature-label">Cabin:</span>
                  <span className="feature-value">{yacht.features.cabin}</span>
                </div>
                <div className="feature-item">
                  <span className="feature-label">Shower/WC:</span>
                  <span className="feature-value">{yacht.features.showerWC}</span>
                </div>
              </div>
              <div className="features-column">
                <div className="feature-item">
                  <span className="feature-label">Length:</span>
                  <span className="feature-value">{yacht.features.length}</span>
                </div>
                <div className="feature-item">
                  <span className="feature-label">Width:</span>
                  <span className="feature-value">{yacht.features.width}</span>
                </div>
                <div className="feature-item">
                  <span className="feature-label">Speed:</span>
                  <span className="feature-value">{yacht.features.speed}</span>
                </div>
                <div className="feature-item">
                  <span className="feature-label">Manufacturing:</span>
                  <span className="feature-value">{yacht.features.manufacturing}</span>
                </div>
                <div className="feature-item">
                  <span className="feature-label">Refit Date:</span>
                  <span className="feature-value">{yacht.features.refitDate}</span>
                </div>
                <div className="feature-item">
                  <span className="feature-label">Location:</span>
                  <span className="feature-value">{yacht.features.location}</span>
                </div>
                <div className="feature-item">
                  <span className="feature-label">Distance:</span>
                  <span className="feature-value">{yacht.features.distance}</span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Equipment Section */}
          <motion.section
            className="details-section equipment-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2>The Equipment of {yacht.name}</h2>
            <div className="equipment-grid">
              <div className="equipment-column">
                {yacht.equipment.comfort.map((item, index) => (
                  <div key={index} className="equipment-item">
                    <i className="fas fa-check"></i>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="equipment-column">
                {yacht.equipment.activities.map((item, index) => (
                  <div key={index} className="equipment-item">
                    <i className="fas fa-check"></i>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Details Grid */}
          <div className="details-grid">
            {/* Services Section - Left Column */}
            <motion.section
              className="details-section services-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="services-container">
                {/* Included Services */}
                <div className="services-column included">
                  <h2>Included in Price</h2>
                  <div className="services-grid">
                    {Object.entries(yacht.services.included).map(([key, service]) => (
                      <div key={key} className="service-card">
                        {key === 'fixedMenu' ? (
                          <>
                            <h3>{service.title}</h3>
                            <div className="menu-items">
                              {service.items.map((item, index) => (
                                <span key={index} className="menu-tag">{item}</span>
                              ))}
                            </div>
                          </>
                        ) : (
                          <>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Extra Services */}
                <div className="services-column extras">
                  <h2>Available Extras</h2>
                  <div className="services-grid">
                    {Object.entries(yacht.services.extras).map(([key, service]) => (
                      <div key={key} className="service-card">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.section>

            {/* Overview Container - Right Column */}
            <motion.section
              className="details-section overview-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2>Overview</h2>
              <div className="overview-content">
                {/* Quick Overview */}
                <div className="overview-section">
                  <h3>Quick Details</h3>
                  <div className="overview-grid">
                    
                    <div className="overview-item">
                      <i className="fas fa-users"></i>
                      <h4>Capacity</h4>
                      <p>{yacht.details.totalCapacity}</p>
                    </div>
                    <div className="overview-item">
                      <i className="fas fa-door-closed"></i>
                      <h4>Cabins</h4>
                      <p>{yacht.details.totalCabins}</p>
                    </div>
                    <div className="overview-item">
                      <i className="fas fa-anchor"></i>
                      <h4>Breaks</h4>
                      <p>{yacht.details.totalBreaks}</p>
                    </div>
                  </div>
                </div>

                {/* Technical Specifications */}
                <div className="overview-section">
                  <h3>Technical Specifications</h3>
                  <div className="specs-grid">
                    <div className="spec-item">
                      <i className="fas fa-ruler-combined"></i>
                      <h4>Length</h4>
                      <p>{yacht.details.length}</p>
                    </div>
                    <div className="spec-item">
                      <i className="fas fa-ship"></i>
                      <h4>Builder</h4>
                      <p>{yacht.builder}</p>
                    </div>
                  </div>
                </div>

                

                {/* Equipment */}
                <div className="overview-section">
                  <h3>Equipment</h3>
                  <div className="equipment-grid">
                    {yacht.equipment.comfort.map((item, index) => (
                      <div key={index} className="equipment-item">
                        <i className="fas fa-check"></i>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Optional Services */}
                <div className="overview-section">
                  <h3>Optional Services</h3>
                  <div className="optional-services-list">
                    {yacht.details.optionalServices.map((service, index) => (
                      <div key={index} className="optional-service-item">
                        <span>{service.name}</span>
                        <span className="price">{service.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cancellation Policy */}
                <div className="overview-section">
                  <h3>Cancellation Policy</h3>
                  <div className="cancellation-details">
                    <p><strong>Full Refund:</strong> {yacht.details.cancellation.fullRefund}</p>
                    <p><strong>Partial Refund:</strong> {yacht.details.cancellation.partialRefund}</p>
                    <p><strong>No Refund:</strong> {yacht.details.cancellation.noRefund}</p>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Booking Section - Bottom of the page */}
          <motion.section
            className="booking-section-bottom"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="booking-content">
              <h2>Book This Yacht</h2>
              <p>Experience luxury at sea with our premium yacht service</p>
              <div className="booking-info">
                <div className="price-info">
                  <span className="price">{yacht.price}</span>
                  <span className="price-unit">{yacht.priceUnit}</span>
                </div>
                <motion.button
                  className="book-now-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowPaymentModal(true)}
                >
                  Book Now
                </motion.button>
              </div>
            </div>
          </motion.section>
        </div>

        {/* Add PaymentContact component */}
        <PaymentContact 
          isOpen={showPaymentModal}
          onClose={() => setShowPaymentModal(false)}
          yachtName={yacht.name}
          price={yacht.price}
        />

        {/* Image Viewer Modal */}
        <AnimatePresence>
          {selectedImage && (
            <>
              <motion.div
                className="image-viewer-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleCloseImageViewer}
              />
              <motion.div
                className="image-viewer-container"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <button className="close-viewer" onClick={handleCloseImageViewer}>
                  ✕
                </button>
                <button 
                  className="nav-button prev"
                  onClick={handlePrevImage}
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <img src={selectedImage} alt="Full size view" />
                <button 
                  className="nav-button next"
                  onClick={handleNextImage}
                  aria-label="Next image"
                >
                  ›
                </button>
                <div className="image-counter">
                  {currentImageIndex + 1} / {allImages.length}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default YachtDetails; 