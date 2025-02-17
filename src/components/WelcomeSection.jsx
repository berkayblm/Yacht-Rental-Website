import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import './styles/WelcomeSection.css';
import GallerySection from './GallerySection';
const WelcomeSection = () => {
  

  return (
    <div className="welcome-container">
      <div className="welcome-header">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="main-title"
        >
          Discover Your Perfect Yacht Adventure
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="subtitle"
        >
          Experience luxury and freedom on the Turkish Riviera
        </motion.p>
      </div>

      <motion.div
        className="gallery-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <GallerySection />
      </motion.div>

      
    </div>
  );
};

const features = [
  {
    icon: "fas fa-anchor",
    title: "Premium Fleet",
    description: "Choose from our carefully selected luxury yachts, each maintained to the highest standards."
  },
  {
    icon: "fas fa-map-marked-alt",
    title: "Expert Navigation",
    description: "Our experienced crew knows every hidden gem along the Turkish coast."
  },
  {
    icon: "fas fa-concierge-bell",
    title: "Luxury Service",
    description: "Enjoy personalized attention and premium amenities throughout your journey."
  },
  {
    icon: "fas fa-glass-cheers",
    title: "Special Events",
    description: "Perfect for celebrations, corporate events, and unforgettable gatherings."
  }
];

const experiences = [
  {
    title: "Luxury Comfort",
    description: "Experience unparalleled comfort with our premium amenities:",
    points: [
      "Spacious cabins with en-suite facilities",
      "Climate-controlled interiors",
      "Premium entertainment systems",
      "Gourmet kitchen facilities"
    ]
  },
  {
    title: "Adventure & Activities",
    description: "Create memories with exciting activities:",
    points: [
      "Snorkeling in crystal-clear waters",
      "Water sports equipment",
      "Beach excursions",
      "Sunset cruises"
    ]
  },
  {
    title: "Professional Service",
    description: "Rely on our experienced team:",
    points: [
      "Professional captain and crew",
      "Personalized itineraries",
      "24/7 support",
      "Local expertise"
    ]
  }
];

const testimonials = [
  {
    text: "An absolutely incredible experience! The yacht was immaculate, and the crew went above and beyond.",
    name: "Sarah M.",
    location: "United Kingdom"
  },
  {
    text: "Perfect family vacation. The attention to detail and service was outstanding.",
    name: "Michael R.",
    location: "Germany"
  },
  {
    text: "The most luxurious way to explore the Turkish coast. Will definitely return!",
    name: "Elena K.",
    location: "Russia"
  }
];

export default WelcomeSection; 