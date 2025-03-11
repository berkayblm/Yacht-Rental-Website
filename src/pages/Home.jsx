import React, { useEffect, useMemo } from 'react';
import Navbar from '../components/Navbar';
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
import { useLanguage } from '../context/LanguageContext';
import { yachtTranslations } from '../translations/yachtData';
const Home = () => {
  const { currentLanguage } = useLanguage();

  // Memoize yachts to prevent recalculation on every render
  const yachts = useMemo(() => {
    return Object.keys(yachtTranslations[currentLanguage] || {}).map((yachtId) => ({
      id: parseInt(yachtId),
      ...yachtTranslations[currentLanguage][yachtId],
    }));
  }, [currentLanguage]); // Only recompute when currentLanguage changes
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
     
      {/* Yacht Listings Section */}
      <YachtListings yachts={yachts} />
      
      {/* Info Section */}

      <InfoSection />
        
        

        <GallerySection />
        <TourRoadmap />
    
          <Maps />
        

      
    </div>
  );
};

export default Home;