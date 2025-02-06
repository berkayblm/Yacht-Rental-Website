import React from 'react';
import { motion } from 'framer-motion';
import './styles/YachtListings.css';

const YachtListings = () => {
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
    },
    {
      id: 4,
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
    },
    {
      id: 5,
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
  );
};

export default YachtListings; 