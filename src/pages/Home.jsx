import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/Home.css';
import Maps from '../components/Maps';
import InfoSection from '../components/InfoSection';
import Hero from '../components/Hero';
import Features from '../components/Features';
import YachtListings from '../components/YachtListings';
import TourRoadmap from '../components/TourRoadmap';
import WelcomeSection from '../components/WelcomeSection';
import GallerySection from '../components/GallerySection';


const Home = ({ yachts }) => {
  

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    const scrollToTop = () => {
      try {
        // Try multiple scroll methods
        window.scroll(0, 0);
        window.scrollTo(0, 0);
        document.documentElement.scrollTo(0, 0);
        document.body.scrollTo(0, 0);
        
        // Force scroll with timeout as fallback
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
  }, []); // Empty dependency array for home page

  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      
      <WelcomeSection />
      <GallerySection />

      
      {/* Info Section */}

      <InfoSection />
        
        {/* Yacht Listings Section */}
        <YachtListings yachts={yachts} />
        <TourRoadmap />
      <motion.section 
        className="location-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}

        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.div 
            className="section-header text-center mb-5"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="subtitle">OUR LOCATION</h4>
            <h2 className="title">Find Us Here</h2>
          </motion.div>
          <Maps />
        </div>
      </motion.section>

      
    </div>
  );
};

export default Home;