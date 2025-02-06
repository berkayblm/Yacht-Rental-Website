import React from 'react';
import Gallery from './Gallery';
import './styles/YachtDetail.css';

const YachtDetail = ({ yacht }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <Gallery images={yacht.gallery} />
        </div>
        <div className="col-md-6">
          <h2>{yacht.name}</h2>
          <p>{yacht.description}</p>
          <p>Price: ${yacht.price} per day</p>
          <p>Length: {yacht.size} ft</p>
          <p>Cabins: {yacht.cabins}</p>
          <p>Guests: {yacht.guests}</p>
          <p>Crew: {yacht.crew}</p>
          <h4>Amenities</h4>
          <ul>
            {yacht.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
          <button
            className="btn btn-success d-flex align-items-center justify-content-center gap-2"
            onClick={() => window.open(`https://wa.me/1234567890?text=I%20want%20to%20rent%20${yacht.name}`)}
          >
            <i className="fab fa-whatsapp"></i>
            Contact via WhatsApp
          </button>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          <h3>Specifications</h3>
          <table className="table table-striped">
            <tbody>
              <tr>
                <th scope="row">Length</th>
                <td>{yacht.size} ft</td>
              </tr>
              <tr>
                <th scope="row">Cabins</th>
                <td>{yacht.cabins}</td>
              </tr>
              <tr>
                <th scope="row">Guests</th>
                <td>{yacht.guests}</td>
              </tr>
              <tr>
                <th scope="row">Crew</th>
                <td>{yacht.crew}</td>
              </tr>
              <tr>
                <th scope="row">Price</th>
                <td>${yacht.price} per day</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          <h3>Booking Form</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input type="tel" className="form-control" id="phone" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="3" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default YachtDetail;