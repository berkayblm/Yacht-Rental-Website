import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import { useEffect } from 'react';
import './styles/GallerySection.css';

const GallerySection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const galleryData = {
    "galleryImages": [
      {
        "id": 1,
        "image": "/images/20240520_111108.jpg",
        "alt": "Luxury Yacht View 1"
      },
      {
        "id": 2,
        "image": "/images/DJI_0720+ kopya.jpg",
        "alt": "Luxury Yacht View 2"
      },
      {
        "id": 3,
        "image": "/images/IMG-20230501-WA0005.jpg",
        "alt": "Luxury Yacht View 3"
      }
      // Add more images as needed
    ]
  }

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
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

  return (
    <motion.div 
      className="container mt-5"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.h2
        variants={titleVariants}
        className="text-center mb-5"
      >
        Our Exclusive Yacht Gallery
      </motion.h2>
      
      <Slider {...sliderSettings} className="slider" lazyLoad="ondemand">
        {galleryData.galleryImages.map((item) => (
          <motion.div
            key={item.id}
            className="slider-item px-2"
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.1 }
            }}
          >
            <div className="card">
              <div className="card-image-wrapper">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.1 }}
                  className="card-img-top"
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </motion.div>
  );
};

export default GallerySection; 