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
import { yachtTranslations } from '../translations/yachtData';
import { pageTranslations } from '../translations/yachtDetailsPageTranslations';
import { useLanguage } from '../context/LanguageContext';

const YachtDetails = ({ language = 'en' }) => {
  const { yachtId } = useParams();
  const { currentLanguage } = useLanguage();
  const yachtData = yachtTranslations[currentLanguage]?.[parseInt(yachtId)];
  const translations = pageTranslations[currentLanguage] || pageTranslations['en']; // Fallback to English
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Combine main image and other images for navigation
  const allImages = yachtData ? [yachtData.image, ...(yachtData.images || [])] : [];

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

  if (!yachtData) {
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
            <h1>{yachtData.name}</h1>
            <div className="price-tag">{yachtData.price}</div>
          </motion.div>

          {/* Image Gallery */}
          <motion.div
            className="yacht-gallery"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="main-image" onClick={() => handleImageClick(yachtData.image)}>
              {yachtData.image && (
                <img
                  src={yachtData.image}
                  alt={yachtData.name}
                  onError={(e) => {
                    console.log('Error loading image:', e.target.src);
                    e.target.onerror = null;
                    e.target.src = '/fallback-image.jpg';
                  }}
                />
              )}
            </div>
            
            {Array.isArray(yachtData.images) && yachtData.images.length > 0 && (
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
                  {yachtData.images.map((img, index) => (
                    <motion.div
                      key={index}
                      className="thumbnail"
                      whileHover={{ scale: 1.05 }}
                      onClick={() => handleImageClick(img)}
                    >
                      <img
                        src={img}
                        alt={`${yachtData.name} view ${index + 1}`}
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
            <h2>{translations.description}</h2>
            <div className="description-preview">
              <h3>{translations.specialOffer}</h3>
              <p className="main-description">{yachtData.description.main}</p>

              {/* Preview of highlights */}
              <div className="highlights">
                {yachtData.description.highlights.slice(0, 2).map((highlight, index) => (
                  <p key={index}>
                    <span className="emoji">🌟</span> {highlight}
                  </p>
                ))}
              </div>

              <button
                className="read-more-btn"
                onClick={toggleDescription}
              >
                {translations.readMore}
              </button>
            </div>
          </motion.section>

          {/* Add TimeOptions section */}
          <TimeOptions timeSlots={yachtData.details.startTime} />

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
                    <h2>{translations.description}</h2>
                    <button
                      className="close-popup"
                      onClick={toggleDescription}
                    >
                      ✕
                    </button>
                  </div>

                  <div className="popup-content">
                    <h3>{translations.specialOffer}</h3>
                    <p className="main-description">{yachtData.description.main}</p>

                    <div className="highlights">
                      <p>
                        <span className="emoji">🚢</span> {yachtData.description.highlights[0]}
                      </p>
                      <p>
                        <span className="emoji">👨‍✈️</span> {yachtData.description.highlights[1]}
                      </p>
                      <p>
                        <span className="emoji">⏰</span> {yachtData.description.highlights[2]}
                      </p>
                    </div>

                    <div className="location-info">
                      <p>
                        <span className="emoji">📍</span> Departure Marina: {yachtData.description.location.departure}
                      </p>
                      <p>
                        <span className="emoji">📍</span> The beverage and food menu specified here is included in the price.
                      </p>
                      <p>
                        <span className="emoji">📍</span> Menu: {[
                          ...yachtData.description.includedMenu.mainDishes,
                          ...yachtData.description.includedMenu.sides
                        ].join(', ')},
                        Fruity Soft Drinks ({yachtData.description.includedMenu.beverages.join(', ')})
                      </p>
                    </div>

                    <div className="extra-info">
                      <p>{yachtData.description.extraServices.note}</p>
                    </div>

                    <div className="extra-services">
                      <h4>{translations.extraServicesTitle}</h4>
                      {yachtData.description.extraServices.options.map((option, index) => (
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
            <h2>{translations.featuresTitle.replace('{yachtName}', yachtData.name)}</h2>
            <div className="features-grid">
              <div className="features-column">
                <div className="feature-item">
                  <span className="feature-label">{translations.featureLabels.yachtName}</span>
                  <span className="feature-value">{yachtData.features.yachtName}</span>
                </div>
                <div className="feature-item">
                  <span className="feature-label">{translations.featureLabels.yachtType}</span>
                  <span className="feature-value">{yachtData.features.yachtType}</span>
                </div>
                <div className="feature-item">
                  <span className="feature-label">{translations.featureLabels.brand}</span>
                  <span className="feature-value">{yachtData.features.brand}</span>
                </div>
                <div className="feature-item">
                  <span className="feature-label">{translations.featureLabels.capacity}</span>
                  <span className="feature-value">{yachtData.features.capacity}</span>
                </div>
                <div className="feature-item">
                  <span className="feature-label">{translations.featureLabels.crew}</span>
                  <span className="feature-value">{yachtData.features.crew}</span>
                </div>
                <div className="feature-item">
                  <span className="feature-label">{translations.featureLabels.cabin}</span>
                  <span className="feature-value">{yachtData.features.cabin}</span>
                </div>
                <div className="feature-item">
                  <span className="feature-label">{translations.featureLabels.showerWC}</span>
                  <span className="feature-value">{yachtData.features.showerWC}</span>
                </div>
              </div>
              <div className="features-column">
                <div className="feature-item">
                  <span className="feature-label">{translations.featureLabels.length}</span>
                  <span className="feature-value">{yachtData.features.length}</span>
                </div>
                <div className="feature-item">
                  <span className="feature-label">{translations.featureLabels.width}</span>
                  <span className="feature-value">{yachtData.features.width}</span>
                </div>
                <div className="feature-item">
                  <span className="feature-label">{translations.featureLabels.speed}</span>
                  <span className="feature-value">{yachtData.features.speed}</span>
                </div>
                <div className="feature-item">
                  <span className="feature-label">{translations.featureLabels.manufacturing}</span>
                  <span className="feature-value">{yachtData.features.manufacturing}</span>
                </div>
                <div className="feature-item">
                  <span className="feature-label">{translations.featureLabels.refitDate}</span>
                  <span className="feature-value">{yachtData.features.refitDate}</span>
                </div>
                <div className="feature-item">
                  <span className="feature-label">{translations.featureLabels.location}</span>
                  <span className="feature-value">{yachtData.features.location}</span>
                </div>
                <div className="feature-item">
                  <span className="feature-label">{translations.featureLabels.distance}</span>
                  <span className="feature-value">{yachtData.features.distance}</span>
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
            <h2>{translations.equipmentTitle.replace('{yachtName}', yachtData.name)}</h2>
            <div className="equipment-grid">
              <div className="equipment-column">
                {yachtData.equipment.comfort.map((item, index) => (
                  <div key={index} className="equipment-item">
                    <i className="fas fa-check"></i>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="equipment-column">
                {yachtData.equipment.activities.map((item, index) => (
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
                  <h2>{translations.includedInPrice}</h2>
                  <div className="services-grid">
                    {Object.entries(yachtData.services.included).map(([key, service]) => (
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
                  <h2>{translations.availableExtras}</h2>
                  <div className="services-grid">
                    {Object.entries(yachtData.services.extras).map(([key, service]) => (
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
              <h2>{translations.overview}</h2>
              <div className="overview-content">
                {/* Quick Overview */}
                <div className="overview-section">
                  <h3>{translations.quickDetails}</h3>
                  <div className="overview-grid">
                    <div className="overview-item">
                      <i className="fas fa-users"></i>
                      <h4>{translations.capacity}</h4>
                      <p>{yachtData.details.totalCapacity}</p>
                    </div>
                    <div className="overview-item">
                      <i className="fas fa-door-closed"></i>
                      <h4>{translations.cabins}</h4>
                      <p>{yachtData.details.totalCabins}</p>
                    </div>
                    <div className="overview-item">
                      <i className="fas fa-anchor"></i>
                      <h4>{translations.breaks}</h4>
                      <p>{yachtData.details.totalBreaks}</p>
                    </div>
                  </div>
                </div>

                {/* Technical Specifications */}
                <div className="overview-section">
                  <h3>{translations.technicalSpecifications}</h3>
                  <div className="specs-grid">
                    <div className="spec-item">
                      <i className="fas fa-ruler-combined"></i>
                      <h4>{translations.length}</h4>
                      <p>{yachtData.details.length}</p>
                    </div>
                    <div className="spec-item">
                      <i className="fas fa-ship"></i>
                      <h4>{translations.builder}</h4>
                      <p>{yachtData.builder}</p>
                    </div>
                  </div>
                </div>

                {/* Equipment */}
                <div className="overview-section">
                  <h3>{translations.equipment}</h3>
                  <div className="equipment-grid">
                    {yachtData.equipment.comfort.map((item, index) => (
                      <div key={index} className="equipment-item">
                        <i className="fas fa-check"></i>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Optional Services */}
                <div className="overview-section">
                  <h3>{translations.optionalServices}</h3>
                  <div className="optional-services-list">
                    {yachtData.details.optionalServices.map((service, index) => (
                      <div key={index} className="optional-service-item">
                        <span>{service.name}</span>
                        <span className="price">{service.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cancellation Policy */}
                <div className="overview-section">
                  <h3>{translations.cancellationPolicy}</h3>
                  <div className="cancellation-details">
                    <p><strong>{translations.fullRefund}</strong> {yachtData.details.cancellation.fullRefund}</p>
                    <p><strong>{translations.partialRefund}</strong> {yachtData.details.cancellation.partialRefund}</p>
                    <p><strong>{translations.noRefund}</strong> {yachtData.details.cancellation.noRefund}</p>
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
              <h2>{translations.bookThisYacht}</h2>
              <p>{translations.bookingDescription}</p>
              <div className="booking-info">
                <div className="price-info">
                  <span className="price">{yachtData.price}</span>
                  <span className="price-unit">{yachtData.priceUnit}</span>
                </div>
                <motion.button
                  className="book-now-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowPaymentModal(true)}
                >
                  {translations.bookNow}
                </motion.button>
              </div>
            </div>
          </motion.section>
        </div>

        {/* Add PaymentContact component */}
        <PaymentContact 
          isOpen={showPaymentModal}
          onClose={() => setShowPaymentModal(false)}
          yachtName={yachtData.name}
          price={yachtData.price}
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