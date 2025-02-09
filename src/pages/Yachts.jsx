import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
        yacht.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    setFilteredYachts(result);
  }, [filters, yachts]);

  return (
    <>
      <Navbar />
      <div className="yachts-page">
        <div className="container">
          {/* Filters Section */}
          <motion.div 
            className="filters-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Filters</h2>
            <div className="filters-grid">
              {/* Price Range Filter */}
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

              {/* Capacity Filter */}
              <div className="filter-group">
                <h3>Minimum Capacity</h3>
                <input
                  type="number"
                  placeholder="Min. Guests"
                  value={filters.capacity}
                  onChange={(e) => handleFilterChange('capacity', e.target.value)}
                />
              </div>

              {/* Duration Filter */}
              <div className="filter-group">
                <h3>Duration</h3>
                <select
                  value={filters.duration}
                  onChange={(e) => handleFilterChange('duration', e.target.value)}
                >
                  <option value="">All</option>
                  <option value="day">Day Trip</option>
                  <option value="night">Night Trip</option>
                </select>
              </div>

              {/* Location Filter */}
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