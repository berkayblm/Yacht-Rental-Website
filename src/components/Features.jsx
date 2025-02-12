import React from 'react';
import { motion } from 'framer-motion';
import './styles/Features.css';

const Features = () => {
  const features = [
    {
      emoji: "⛵",
      title: "Luxury Yacht Charters",
      description: "Sail in style with our fleet of premium yachts, offering unparalleled comfort and elegance."
    },
    {
      emoji: "⭐",
      title: "Exceptional Service",
      description: "Our dedicated crew ensures a seamless and memorable experience, catering to your every need."
    },
    {
      emoji: "👑",
      title: "Top-Tier Fleet",
      description: "Our yachts are meticulously maintained to the highest standards, ensuring a safe and luxurious journey."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      className="features-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.div className="features-row">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-item"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <motion.span 
                className="feature-emoji" 
                role="img" 
                aria-label={feature.title.toLowerCase()}
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {feature.emoji}
              </motion.span>
              <div className="feature-content">
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {feature.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Features; 