import React from 'react';
import Navbar from '../components/Navbar';

const Destinations = () => {
  const destinations = [
    { id: 1, name: 'Mediterranean', image: 'url_to_image' },
    { id: 2, name: 'Caribbean', image: 'url_to_image' },
    { id: 3, name: 'South Pacific', image: 'url_to_image' },
  ];

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h1>Charter Destinations</h1>
        <div className="row">
          {destinations.map((destination) => (
            <div key={destination.id} className="col-md-4 mb-4">
              <div className="card">
                <img src={destination.image} className="card-img-top" alt={destination.name} />
                <div className="card-body">
                  <h5 className="card-title">{destination.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;