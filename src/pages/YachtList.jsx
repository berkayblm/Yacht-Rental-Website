import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import YachtCard from '../components/YachtCard';
import SearchFilter from '../components/SearchFilter';

const yachts = [
  {
    id: 1,
    name: 'Luxury Yacht 1',
    description: 'Experience luxury like never before.',
    image: 'C://Users//berka//rent-yacth-app//public//1755344.jpg',
    price: 1000,
    size: 80,
    amenities: ['Wi-Fi', 'Jacuzzi'],
    gallery: ['url_to_image1', 'url_to_image2'],
    cabins: 4,
    guests: 8,
    crew: 3,
  },
  {
    id: 2,
    name: 'Luxury Yacht 2',
    description: 'Perfect for family outings.',
    image: 'url_to_image',
    price: 1200,
    size: 90,
    amenities: ['Wi-Fi', 'Water Sports'],
    gallery: ['url_to_image1', 'url_to_image2'],
    cabins: 5,
    guests: 10,
    crew: 4,
  },
  // Add more yachts as needed
];

const YachtList = () => {
  const [filteredYachts, setFilteredYachts] = useState(yachts);

  const handleFilter = (filters) => {
    const filtered = yachts.filter((yacht) => {
      return (
        (!filters.price || yacht.price <= filters.price) &&
        (!filters.size || yacht.size >= filters.size) &&
        (!filters.amenities.length ||
          filters.amenities.every((amenity) => yacht.amenities.includes(amenity)))
      );
    });
    setFilteredYachts(filtered);
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-3">
            <SearchFilter onFilter={handleFilter} />
          </div>
          <div className="col-md-9">
            <div className="row">
              {filteredYachts.map((yacht) => (
                <YachtCard key={yacht.id} yacht={yacht} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YachtList;