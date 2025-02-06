import React from 'react';
import { Link } from 'react-router-dom';

const YachtCard = ({ yacht }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={yacht.image} className="card-img-top" alt={yacht.name} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{yacht.name}</h5>
          <p className="card-text">{yacht.description}</p>
          <Link to={`/yacht/${yacht.id}`} state={{ yacht }} className="btn btn-primary mt-auto">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default YachtCard;