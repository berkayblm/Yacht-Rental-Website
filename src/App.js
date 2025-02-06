import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import YachtList from './pages/YachtList';
import YachtDetailPage from './pages/YachtDetailPage';
import About from './pages/About';
import Destinations from './pages/Destinations';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  useEffect(() => {
    // Prevent default zoom behavior on mobile devices
    const viewport = document.querySelector('meta[name=viewport]');
    viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
  }, []);

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/yachts" element={<YachtList />} />
            <Route path="/yacht/:id" element={<YachtDetailPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/destinations" element={<Destinations />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;