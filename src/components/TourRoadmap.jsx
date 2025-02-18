import React from 'react';
import { motion } from 'framer-motion';
import './styles/TourRoadmap.css';

const TourRoadmap = () => {
  const tourStops = [
    {
      id: 1,
      time: "10:00",
      location: "Side Harbor",
      description: "Departure from Side Harbor",
      icon: "🚢",
      type: "start"
    },
    {
      id: 2,
      time: "11:30",
      location: "Swimming Break",
      description: "First swimming and snorkeling stop",
      icon: "🏊‍♂️",
      type: "break"
    },
    {
      id: 3,
      time: "12:30",
      location: "Lunch Break",
      description: "Enjoy your lunch with Mediterranean cuisine",
      icon: "🍽️",
      type: "activity"
    },
    {
      id: 4,
      time: "14:00",
      location: "Swimming Break",
      description: "Second swimming and relaxation time",
      icon: "🏖️",
      type: "break"
    },
    {
      id: 5,
      time: "15:00",
      location: "Side Harbor",
      description: "Return to Side Harbor",
      icon: "🏁",
      type: "end"
    }
  ];

  return (
    <motion.section 
      className="tour-roadmap"
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
          <h4 className="subtitle">TOUR ROUTE</h4>
          <h2 className="title">Your Journey With Us</h2>
          <p className="description">
            Experience an unforgettable day exploring the beautiful Mediterranean coast
          </p>
        </motion.div>

        <div className="timeline-container">
          {tourStops.map((stop, index) => (
            <motion.div 
              key={stop.id}
              className={`timeline-item ${stop.type}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="timeline-content">
                <div className="time-badge">{stop.time}</div>
                <div className="location-icon">{stop.icon}</div>
                <h3>{stop.location}</h3>
                <p>{stop.description}</p>
                
                <motion.div 
                  className="connection-line"
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                />
                
                <motion.div 
                  className="timeline-dot"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TourRoadmap; 