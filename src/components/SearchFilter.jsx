import React, { useState } from 'react';

const SearchFilter = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    price: '',
    size: '',
    amenities: [],
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === 'amenities') {
      setFilters((prev) => ({
        ...prev,
        amenities: checked
          ? [...prev.amenities, value]
          : prev.amenities.filter((item) => item !== value),
      }));
    } else {
      setFilters((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(filters);
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">Filter Yachts</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Price Range</label>
            <input
              type="number"
              className="form-control"
              name="price"
              placeholder="Max Price"
              value={filters.price}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Size (ft)</label>
            <input
              type="number"
              className="form-control"
              name="size"
              placeholder="Min Size"
              value={filters.size}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Amenities</label>
            <div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="amenities"
                  value="Wi-Fi"
                  onChange={handleChange}
                />
                <label className="form-check-label">Wi-Fi</label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="amenities"
                  value="Jacuzzi"
                  onChange={handleChange}
                />
                <label className="form-check-label">Jacuzzi</label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="amenities"
                  value="Water Sports"
                  onChange={handleChange}
                />
                <label className="form-check-label">Water Sports</label>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Apply Filters
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchFilter;