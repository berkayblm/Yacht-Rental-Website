import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import { useEffect } from 'react';

const GallerySection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

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
        duration: 0.8,
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
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
        Our Exclusive Yacht Collection
      </motion.h2>
      
      <Slider {...sliderSettings} className="slider">
        <motion.div
          className="slider-item px-3"
          variants={cardVariants}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
        >
          <div className="card shadow-lg">
            <div className="card-image-wrapper">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="card-img-top"
                src="/1755344.jpg"
                alt="Luxury Yacht 1"
              />
            </div>
            <motion.div 
              className="card-body"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="card-title">Luxury Yacht 1</h3>
              <p className="card-text">Indulge in unparalleled luxury with our flagship yacht, featuring expansive interiors and top-tier amenities.</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="slider-item px-3"
          variants={cardVariants}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
        >
          <div className="card shadow-lg">
            <div className="card-image-wrapper">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="card-img-top"
                src="/1755344.jpg"
                alt="Family Yacht"
              />
            </div>
            <motion.div 
              className="card-body"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="card-title">Family Yacht</h3>
              <p className="card-text">Perfect for family adventures, this yacht offers a safe and comfortable environment for unforgettable sea journeys.</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="slider-item px-3"
          variants={cardVariants}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
        >
          <div className="card shadow-lg">
            <div className="card-image-wrapper">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="card-img-top"
                src="/1755344.jpg"
                alt="Corporate Yacht"
              />
            </div>
            <motion.div 
              className="card-body"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="card-title">Corporate Yacht</h3>
              <p className="card-text">Ideal for corporate events, this yacht provides a sophisticated setting with all the facilities needed for professional gatherings.</p>
            </motion.div>
          </div>
        </motion.div>
      </Slider>
    </motion.div>
  );
};

export default GallerySection; 