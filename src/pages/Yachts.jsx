import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './styles/Yachts.css';

const Yachts = ({ yachts }) => {
  const navigate = useNavigate();
  const [filteredYachts, setFilteredYachts] = useState(yachts);
  const [filters, setFilters] = useState({
    priceRange: { min: '', max: '' },
    capacity: '',
    duration: '',
    location: '',
  });

  const [activeFilters, setActiveFilters] = useState([]);

  // Get unique values for filter options
  const allLocations = [...new Set(yachts.map(yacht => yacht.location))];
  

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

  // Update active filters
  useEffect(() => {
    const newActiveFilters = [];
    
    if (filters.priceRange.min || filters.priceRange.max) {
      newActiveFilters.push({
        type: 'priceRange',
        label: `Price: ${filters.priceRange.min || '0'}€ - ${filters.priceRange.max || '∞'}€`
      });
    }
    if (filters.capacity) {
      newActiveFilters.push({
        type: 'capacity',
        label: `Min Capacity: ${filters.capacity}`
      });
    }
    if (filters.duration) {
      newActiveFilters.push({
        type: 'duration',
        label: `Duration: ${filters.duration}`
      });
    }
    if (filters.location) {
      newActiveFilters.push({
        type: 'location',
        label: `Location: ${filters.location}`
      });
    }

    setActiveFilters(newActiveFilters);
  }, [filters]);

  // Apply filters
  useEffect(() => {
    let result = yachts;

    // Price Range Filter
    if (filters.priceRange.min || filters.priceRange.max) {
      result = result.filter(yacht => {
        const price = parseFloat(yacht.price.replace(/[^0-9.-]+/g, ''));
        const min = filters.priceRange.min ? parseFloat(filters.priceRange.min) : 0;
        const max = filters.priceRange.max ? parseFloat(filters.priceRange.max) : Infinity;
        return price >= min && price <= max;
      });
    }

    // Capacity Filter
    if (filters.capacity) {
      result = result.filter(yacht => 
        parseInt(yacht.details.totalCapacity) >= parseInt(filters.capacity)
      );
    }

    // Duration Filter
    if (filters.duration) {
      result = result.filter(yacht => 
        yacht.details.startTime.toLowerCase().includes(filters.duration.toLowerCase())
      );
    }

    

    // Location Filter
    if (filters.location) {
      result = result.filter(yacht => 
        yacht.location.toLowerCase() === filters.location.toLowerCase()
      );
    }

    setFilteredYachts(result);
  }, [filters, yachts]);

  return (
    <>
      <Navbar />
      <div className="yachts-page">
        <div className="container">
          <motion.div 
            className="filters-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Find Your Perfect Yacht</h2>
            <div className="filters-grid">
              <div className="filter-group">
                <h3>Price Range (€)</h3>
                <div className="price-inputs">
                  <input
                    type="number"
                    placeholder="Min"
                    value={filters.priceRange.min}
                    onChange={(e) => handleFilterChange('priceRange', { 
                      ...filters.priceRange, 
                      min: e.target.value 
                    })}
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={filters.priceRange.max}
                    onChange={(e) => handleFilterChange('priceRange', { 
                      ...filters.priceRange, 
                      max: e.target.value 
                    })}
                  />
                </div>
              </div>

              <div className="filter-group">
                <h3>Minimum Capacity</h3>
                <input
                  type="number"
                  placeholder="Min. Guests"
                  value={filters.capacity}
                  onChange={(e) => handleFilterChange('capacity', e.target.value)}
                />
              </div>

              <div className="filter-group">
                <h3>Duration</h3>
                <select
                  value={filters.duration}
                  onChange={(e) => handleFilterChange('duration', e.target.value)}
                >
                  <option value="">All Durations</option>
                  <option value="day">Day Trip</option>
                  <option value="night">Night Trip</option>
                </select>
              </div>

              <div className="filter-group">
                <h3>Location</h3>
                <select
                  value={filters.location}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                >
                  <option value="">All Locations</option>
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
                  Clear All Filters
                </button>
              </>
            )}
          </motion.div>

          {/* Results Section */}
          <motion.div 
            className="results-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2>Available Yachts ({filteredYachts.length})</h2>
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