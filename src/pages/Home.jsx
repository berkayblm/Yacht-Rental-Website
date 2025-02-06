import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Slider from 'react-slick';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/Home.css';
import Testimonials from '../components/Testimonals';

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 items at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const yachts = [
    {
      id: 1,
      name: "Cleopatra Luxury",
      price: "950,00 €",
      image: "/la-perla-5.jpeg",
      details: {
        startTime: "10:00 - 15:00",
        totalCapacity: "20 Person",
        totalBreaks: "4 Times",
        totalCabins: "4 Cabins",
        catering: "Included",
        alcoholDrink: "Yes Possible",
        special: "Not Available"
      }
    },
    {
      id: 2,
      name: "White Angel Yacht",
      price: "499,00 €",
      image: "/la-perla-5.jpeg",
      details: {
        startTime: "10:00 - 15:00",
        totalCapacity: "12 Person",
        totalBreaks: "3 Times",
        totalCabins: "2 Cabins",
        catering: "Included",
        alcoholDrink: "Yes Possible",
        special: "BBQ Party"
      }
    },
    {
      id: 3,
      name: "No More Stress Boat",
      price: "599,00 €",
      image: "/la-perla-5.jpeg",
      details: {
        startTime: "Night",
        totalCapacity: "20 Person",
        totalBreaks: "Not Available",
        totalCabins: "2 (Twin)",
        catering: "Included",
        alcoholDrink: "Yes Possible",
        special: "Not Available"
      }
    }
  ];

  return (
    <div>
      <Navbar />
      <motion.div
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="hero-content">
          <span className="hero-label">LUXURY YACHT TOURS</span>
          <h1 className="hero-title">
            Book Your Side Tours With<br />
            Confidence Now ! Pay When<br />
            You Arrive !
          </h1>
          <p className="hero-description">
            Side boat (yacht) tour is the best and the most popular way to discover Side's beautiful 
            coastline. Our boat leaves from Side's harbor near the red tower and shipyard. The sea 
            caves, Cleopatra beach, Ulash beach are the places to see.
          </p>
          <motion.button 
            className="book-now-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            BOOK NOW →
          </motion.button>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="features-container">
        <div className="container">
          <div className="row features-row">
            <div className="col-md-3 d-flex justify-content-center">
              <div className="feature-item">
                <span className="feature-emoji" role="img" aria-label="yacht">⛵</span>
                <h3>Charter Yacht</h3>
                <p>It's very easy to create stylish and beautiful prototypes</p>
              </div>
            </div>
            <div className="col-md-3 d-flex justify-content-center">
              <div className="feature-item">
                <span className="feature-emoji" role="img" aria-label="star">⭐</span>
                <h3>Quality Service</h3>
                <p>It's very easy to create stylish and beautiful prototypes</p>
              </div>
            </div>
            <div className="col-md-3 d-flex justify-content-center">
              <div className="feature-item">
                <span className="feature-emoji" role="img" aria-label="crown">👑</span>
                <h3>Premium Yacht</h3>
                <p>It's very easy to create stylish and beautiful prototypes</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to Yacht Rental
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Choose the best yacht for your next adventure!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>
            At Yacht Rental, we offer a wide range of luxury yachts for all your needs. Whether you're planning a family vacation, a romantic getaway, or a corporate event, we have the perfect yacht for you. Our yachts are equipped with state-of-the-art amenities and are maintained to the highest standards to ensure your comfort and safety. Browse through our gallery to see some of the finest yachts available for rent.
          </p>
        </motion.div>
        <motion.h2
          className="mt-5"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.6 }}
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          Gallery
        </motion.h2>
        
        <Slider {...sliderSettings} className="slider">
          <motion.div
            className="slider-item"
            whileHover={{ scale: 1.05 }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <div className="card">
              <img
                className="card-img-top"
                src="/1755344.jpg"
                alt="Luxury Yacht 1"
              />
              <div className="card-body">
                <h3 className="card-title">Luxury Yacht 1</h3>
                <p className="card-text">Experience luxury like never before with our top-of-the-line yacht, featuring spacious interiors and state-of-the-art amenities.</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="slider-item"
            whileHover={{ scale: 1.05 }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <div className="card">
              <img
                className="card-img-top"
                src="/1755344.jpg"
                alt="Family Yacht"
              />
              <div className="card-body">
                <h3 className="card-title">Family Yacht</h3>
                <p className="card-text">Perfect for family outings, this yacht offers a comfortable and safe environment for you and your loved ones to enjoy the sea.</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="slider-item"
            whileHover={{ scale: 1.05 }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <div className="card">
              <img
                className="card-img-top"
                src="/1755344.jpg"
                alt="Corporate Yacht"
              />
              <div className="card-body">
                <h3 className="card-title">Corporate Yacht</h3>
                <p className="card-text">Ideal for corporate events, this yacht provides a professional setting with all the necessary facilities to host meetings and conferences.</p>
              </div>
            </div>
          </motion.div>
        </Slider>
        
        <motion.h2
          className="mt-5"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.6 }}
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          Testimonials
        </motion.h2>
        <motion.div
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.8 }}
          ref={ref}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
        >
          <Testimonials />
        </motion.div>
      </div>

      {/* Yacht Listings Section */}
      <motion.section 
        className="yacht-listings"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="subtitle">SPECIAL YACHT TRIPS</h4>
            <h2 className="title">Our fleet of luxury yachts</h2>
          </motion.div>
          
          <div className="yacht-cards">
            {yachts.map((yacht, index) => (
              <motion.div 
                key={yacht.id}
                className="yacht-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.2 
                }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="yacht-image">
                  <motion.img 
                    src={yacht.image} 
                    alt={yacht.name}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <motion.div 
                  className="yacht-price"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {yacht.price}
                </motion.div>
                <h3 className="yacht-name">{yacht.name}</h3>
                
                <div className="yacht-details">
                  <div className="detail-row blue">
                    <div className="detail-item">
                      <span className="label">Start time</span>
                      <span className="value">{yacht.details.startTime}</span>
                    </div>
                    <div className="detail-item">
                      <span className="label">Total Capacity</span>
                      <span className="value">{yacht.details.totalCapacity}</span>
                    </div>
                  </div>
                  
                  <div className="detail-row yellow">
                    <div className="detail-item">
                      <span className="label">Total Breaks</span>
                      <span className="value">{yacht.details.totalBreaks}</span>
                    </div>
                    <div className="detail-item">
                      <span className="label">Total Cabins</span>
                      <span className="value">{yacht.details.totalCabins}</span>
                    </div>
                  </div>
                  
                  <div className="detail-row yellow">
                    <div className="detail-item">
                      <span className="label">Catering</span>
                      <span className="value">{yacht.details.catering}</span>
                    </div>
                    <div className="detail-item">
                      <span className="label">Alcohol Drink</span>
                      <span className="value">{yacht.details.alcoholDrink}</span>
                    </div>
                  </div>
                  
                  <div className="detail-row yellow">
                    <div className="detail-item special">
                      <span className="label">Special</span>
                      <span className="value">{yacht.details.special}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;