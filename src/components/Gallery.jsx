import React from 'react';

const Gallery = ({ images = [] }) => {
  return (
    <div className="row">
      {images.map((image, index) => (
        <div key={index} className="col-md-4 mb-4">
          <img src={image} className="img-fluid" alt={`Yacht ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;