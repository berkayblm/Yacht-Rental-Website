import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import YachtDetail from '../components/YachtDetail';

const YachtDetailPage = () => {
  const location = useLocation();
  const yacht = location.state?.yacht;

  return (
    <div>
      <Navbar />
      {yacht ? <YachtDetail yacht={yacht} /> : <p>Yacht not found</p>}
    </div>
  );
};

export default YachtDetailPage;