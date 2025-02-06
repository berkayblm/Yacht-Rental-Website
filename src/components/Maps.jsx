import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { motion } from 'framer-motion';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Create a motion div with the same styles as MapContainer
const MotionMapContainer = motion.div;

const Maps = () => {
  const [map, setMap] = useState(null);
  const position = [36.7650, 31.3860];

  const handleMapClick = () => {
    if (map) {
      map.scrollWheelZoom.enable();
    }
  };

  const handleMapBlur = () => {
    if (map) {
      map.scrollWheelZoom.disable();
    }
  };

  return (
    <MotionMapContainer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{ height: "400px", width: "100%" }}
    >
      <MapContainer 
        center={position} 
        zoom={14} 
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={false}
        ref={setMap}
        onClick={handleMapClick}
        onBlur={handleMapBlur}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            Our Yacht Rental Location
          </Popup>
        </Marker>
      </MapContainer>
    </MotionMapContainer>
  );
};

export default Maps; 