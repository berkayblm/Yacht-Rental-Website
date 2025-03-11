import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import YachtDetails from './pages/YachtDetails';
import Yachts from './pages/Yachts';
import Contact from './pages/Contact';
import { LanguageProvider } from './context/LanguageContext';


function App() {
  useEffect(() => {
    // Prevent default zoom behavior on mobile devices
    const viewport = document.querySelector('meta[name=viewport]');
    viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
  }, []);

 

  return (
    <LanguageProvider>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <div className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About />} />
              
              <Route path="/yachts" element={<Yachts />} />
              <Route 
                path="/yachts/:yachtId" 
                element={<YachtDetails/>} 
              />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;