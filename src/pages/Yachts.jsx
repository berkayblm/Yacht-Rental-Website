import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './styles/Yachts.css';
import { useLanguage } from '../context/LanguageContext';
import { yachtTranslations } from '../translations/yachtData';
import { yachtsPageTranslations } from '../translations/yachtPageFilterTranslations';

const Yachts = () => {
  const navigate = useNavigate();
  const { currentLanguage } = useLanguage();
  const translations = yachtsPageTranslations[currentLanguage] || yachtsPageTranslations['en']; // Fallback to English
  // Memoize yachts to prevent recalculation on every render
  const yachts = useMemo(() => {
    return Object.keys(yachtTranslations[currentLanguage] || {}).map((yachtId) => ({
      id: parseInt(yachtId),
      ...yachtTranslations[currentLanguage][yachtId],
    }));
  }, [currentLanguage]); // Only recompute when currentLanguage changes

  const [filteredYachts, setFilteredYachts] = useState(yachts); // Initial state set here
  const [filters, setFilters] = useState({
    priceRange: { min: '', max: '' },
    capacity: '',
    duration: '',
    location: '',
  });
  const [activeFilters, setActiveFilters] = useState([]);

  // Get unique values for filter options
  const allLocations = useMemo(() => [...new Set(yachts.map(yacht => yacht.location))], [yachts]);

  const handleYachtClick = (yachtId) => {
    navigate(`/yachts/${yachtId}`);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      priceRange: { min: '', max: '' },
      capacity: '',
      duration: '',
      location: '',
    });
    setActiveFilters([]);
    setFilteredYachts(yachts); // Reset to full list
  };

  const removeFilter = (filterType) => {
    if (filterType === 'priceRange') {
      setFilters(prev => ({
        ...prev,
        priceRange: { min: '', max: '' }
      }));
    } else {
      setFilters(prev => ({
        ...prev,
        [filterType]: ''
      }));
    }
  };

  // Update active filters with translations
  useEffect(() => {
    const newActiveFilters = [];
    
    if (filters.priceRange.min || filters.priceRange.max) {
      newActiveFilters.push({
        type: 'priceRange',
        label: `${translations.activeFilters.price} ${filters.priceRange.min || '0'}€ - ${filters.priceRange.max || '∞'}€`
      });
    }
    if (filters.capacity) {
      newActiveFilters.push({
        type: 'capacity',
        label: `${translations.activeFilters.minCapacity} ${filters.capacity}`
      });
    }
    if (filters.duration) {
      newActiveFilters.push({
        type: 'duration',
        label: `${translations.activeFilters.duration} ${filters.duration === 'day' ? translations.filters.durationDay : translations.filters.durationNight}`
      });
    }
    if (filters.location) {
      newActiveFilters.push({
        type: 'location',
        label: `${translations.activeFilters.location} ${filters.location}`
      });
    }

    setActiveFilters(newActiveFilters);
  }, [filters, translations]);

  // Apply filters
  useEffect(() => {
    let result = [...yachts];

    if (filters.priceRange.min || filters.priceRange.max) {
      result = result.filter(yacht => {
        const price = parseFloat(yacht.price.replace(/[^0-9.-]+/g, ''));
        const min = filters.priceRange.min ? parseFloat(filters.priceRange.min) : 0;
        const max = filters.priceRange.max ? parseFloat(filters.priceRange.max) : Infinity;
        return price >= min && price <= max;
      });
    }

    if (filters.capacity) {
      result = result.filter(yacht => 
        parseInt(yacht.details.totalCapacity) >= parseInt(filters.capacity)
      );
    }

    if (filters.duration) {
      result = result.filter(yacht => 
        yacht.details.startTime.toLowerCase().includes(filters.duration.toLowerCase())
      );
    }

    if (filters.location) {
      result = result.filter(yacht => 
        yacht.location && yacht.location.toLowerCase() === filters.location.toLowerCase()
      );
    }

    setFilteredYachts(result);
  }, [filters, yachts]);

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
  }, []);

  return (
    <>
      <Navbar />
      <div className="yachts-page">
        <div className="container">
          {/* <motion.div 
            className="filters-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>{translations.findYourPerfectYacht}</h2>
            <div className="filters-grid">
              <div className="filter-group">
                <h3>{translations.filters.priceRange}</h3>
                <div className="price-inputs">
                  <input
                    type="number"
                    placeholder={translations.filters.priceMinPlaceholder}
                    value={filters.priceRange.min}
                    onChange={(e) => handleFilterChange('priceRange', { 
                      ...filters.priceRange, 
                      min: e.target.value 
                    })}
                  />
                  <input
                    type="number"
                    placeholder={translations.filters.priceMaxPlaceholder}
                    value={filters.priceRange.max}
                    onChange={(e) => handleFilterChange('priceRange', { 
                      ...filters.priceRange, 
                      max: e.target.value 
                    })}
                  />
                </div>
              </div>

              <div className="filter-group">
                <h3>{translations.filters.minimumCapacity}</h3>
                <input
                  type="number"
                  placeholder={translations.filters.capacityPlaceholder}
                  value={filters.capacity}
                  onChange={(e) => handleFilterChange('capacity', e.target.value)}
                />
              </div>

              <div className="filter-group">
                <h3>{translations.filters.duration}</h3>
                <select
                  value={filters.duration}
                  onChange={(e) => handleFilterChange('duration', e.target.value)}
                >
                  <option value="">{translations.filters.durationAll}</option>
                  <option value="day">{translations.filters.durationDay}</option>
                  <option value="night">{translations.filters.durationNight}</option>
                </select>
              </div>

              <div className="filter-group">
                <h3>{translations.filters.location}</h3>
                <select
                  value={filters.location}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                >
                  <option value="">{translations.filters.locationAll}</option>
                  {allLocations.map((location, index) => (
                    <option key={index} value={location}>{location}</option>
                  ))}
                </select>
              </div>
            </div>

            {activeFilters.length > 0 && (
              <>
                <div className="active-filters">
                  <AnimatePresence>
                    {activeFilters.map((filter, index) => (
                      <motion.span
                        key={filter.type}
                        className="filter-tag"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                      >
                        {filter.label}
                        <button onClick={() => removeFilter(filter.type)}>×</button>
                      </motion.span>
                    ))}
                  </AnimatePresence>
                </div>
                <button className="clear-filters" onClick={clearFilters}>
                  {translations.clearAllFilters}
                </button>
              </>
            )}
          </motion.div> */}

          {/* Results Section */}
          <motion.div 
            className="results-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2>{translations.availableYachts} ({filteredYachts.length})</h2>
            <div className="yacht-grid">
              {filteredYachts.map((yacht) => (
                <motion.div
                  key={yacht.id}
                  className="yacht-card"
                  onClick={() => handleYachtClick(yacht.id)}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="yacht-image">
                    <img src={yacht.image} alt={yacht.name} />
                  </div>
                  <div className="yacht-info">
                    <h3>{yacht.name}</h3>
                    <p className="price">{yacht.price} {yacht.priceUnit}</p>
                    <div className="yacht-details">
                      <span><i className="fas fa-users"></i> {yacht.details.totalCapacity}</span>
                      <span><i className="fas fa-ruler"></i> {yacht.length}</span>
                      <span><i className="fas fa-map-marker-alt"></i> {yacht.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Yachts;