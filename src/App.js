import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Destinations from './pages/Destinations';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import YachtDetails from './pages/YachtDetails';
import Yachts from './pages/Yachts';

function App() {
  useEffect(() => {
    // Prevent default zoom behavior on mobile devices
    const viewport = document.querySelector('meta[name=viewport]');
    viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
  }, []);

  // Move yacht data to App level or use context/redux
  const yachts = [
    {
      id: 1,
      name: "Cleopatra Luxury",
      price: "950,00 €",
      priceUnit: "per day",
      image: "/la-perla-5.jpeg",
      year: 2007,
      length: "24m",
      builder: "Tuzla",
      location: "Side Harbor, Turkey",
      description: {
        main: "Are you ready for an unforgettable day with our Antalya-Side private yacht?",
        highlights: [
          "Our yacht in the world-famous Alanya is waiting for you to visit the most special places of Antalya (beautiful places in the Side sea) and to provide special service.",
          "Our captain, chef and staff are on duty.",
          "Check-in time is 09.30 every day, check-out time is 15.00 every day."
        ],
        location: {
          departure: "Antalya Side-Manavgat Marina",
          route: "Beautiful bays of Side"
        },
        includedMenu: {
          mainDishes: [
            "Shrimp",
            "Crayfish",
            "Fish",
            "Chicken",
            "Meatballs",
            "Spaghetti"
          ],
          sides: [
            "Salad",
            "Cold Appetizers"
          ],
          beverages: [
            "Coke",
            "Fanta",
            "Sprite",
            "Fruit Juice",
            "Water"
          ]
        },
        extraServices: {
          note: "The meal and route we mentioned above are the offer we offer and price specifically for you. When you have extra requests, they are added to the price when you specify them and priced accordingly.",
          options: [
            "The bays and islands of Antalya are wonderful. What matters is the maximum budget our guests want.",
            "What kind of trip do you want for your Antalya holiday, what are your extra requests, these are discussed with you and prices are decided.",
            "When you have extra drink requests, extra food-fish requests and when your requests and demands are added as a communication, prices are sent to you."
          ]
        },
        additionalInfo: "We can meet all your requests with fast communication, our special yachts that will make you happy are waiting for you during your holiday."
      },
      details: {
        // Basic Info
        startTime: "10:00 - 15:00",
        totalCapacity: "20 Person",
        totalBreaks: "4 Times",
        totalCabins: "4 Cabins",
        catering: "Included",
        alcoholDrink: "Yes Possible",
        special: "Not Available",
        
        // Technical Specifications
        length: "24 meters",
        beam: "6.5 meters",
        draft: "2.8 meters",
        enginePower: "2 x 450 HP",
        fuelType: "Diesel",
        maxSpeed: "22 knots",
        cruisingSpeed: "18 knots",
        fuelConsumption: "80L/h",
        
        // Accommodation
        guestCapacity: {
          day: 20,
          overnight: 8
        },
        cabins: {
          total: 4,
          master: 1,
          double: 2,
          twin: 1
        },
        bathrooms: 4,
        
        // Equipment
        navigation: [
          "GPS",
          "Radar",
          "VHF Radio",
          "Autopilot",
          "Depth sounder"
        ],
        entertainment: [
          "TV",
          "Sound system",
          "WiFi",
          "DVD player"
        ],
        comfort: [
          "Air conditioning",
          "Heating",
          "Generator",
          "Hot water"
        ],
        waterToys: [
          "Tender",
          "Snorkeling equipment",
          "Fishing equipment",
          "Water skis",
          "Wakeboard"
        ],
        
        // Services
        includedServices: [
          "Professional captain",
          "Crew",
          "Fuel",
          "Water",
          "Soft drinks",
          "Snacks",
          "Towels",
          "Insurance"
        ],
        optionalServices: [
          {
            name: "Full catering",
            price: "30€ per person"
          },
          {
            name: "Airport transfer",
            price: "50€ per way"
          },
          {
            name: "Premium bar package",
            price: "200€ per day"
          }
        ],
        
        // Cancellation Policy
        cancellation: {
          fullRefund: "7 days before",
          partialRefund: "3-7 days (50%)",
          noRefund: "less than 3 days"
        },
        
        // Schedule
        availability: {
          checkIn: "10:00",
          checkOut: "18:00",
          minDuration: "1 day",
          seasonality: {
            highSeason: "June-September",
            lowSeason: "October-May"
          }
        }
      }
    },
    {
      id: 2,
      name: "White Angel Yacht",
      price: "499,00 €",
      priceUnit: "per day",
      image: "/la-perla-5.jpeg",
      year: 2010,
      length: "18m",
      builder: "Tuzla",
      location: "Side Harbor, Turkey",
      description: {
        main: "Are you ready for an unforgettable day with our Antalya-Side private yacht?",
        highlights: [
          "Our yacht in the world-famous Alanya is waiting for you to visit the most special places of Antalya (beautiful places in the Side sea) and to provide special service.",
          "Our captain, chef and staff are on duty.",
          "Check-in time is 09.30 every day, check-out time is 15.00 every day."
        ],
        location: {
          departure: "Antalya Side-Manavgat Marina",
          route: "Beautiful bays of Side"
        },
        includedMenu: {
          mainDishes: [
            "Shrimp",
            "Crayfish",
            "Fish",
            "Chicken",
            "Meatballs",
            "Spaghetti"
          ],
          sides: [
            "Salad",
            "Cold Appetizers"
          ],
          beverages: [
            "Coke",
            "Fanta",
            "Sprite",
            "Fruit Juice",
            "Water"
          ]
        },
        extraServices: {
          note: "The meal and route we mentioned above are the offer we offer and price specifically for you. When you have extra requests, they are added to the price when you specify them and priced accordingly.",
          options: [
            "The bays and islands of Antalya are wonderful. What matters is the maximum budget our guests want.",
            "What kind of trip do you want for your Antalya holiday, what are your extra requests, these are discussed with you and prices are decided.",
            "When you have extra drink requests, extra food-fish requests and when your requests and demands are added as a communication, prices are sent to you."
          ]
        },
        additionalInfo: "We can meet all your requests with fast communication, our special yachts that will make you happy are waiting for you during your holiday."
      },
      details: {
        startTime: "10:00 - 15:00",
        totalCapacity: "12 Person",
        totalBreaks: "3 Times",
        totalCabins: "2 Cabins",
        catering: "Included",
        alcoholDrink: "Yes Possible",
        special: "BBQ Party",
        length: "18 meters",
        beam: "5.2 meters",
        draft: "2.1 meters",
        enginePower: "2 x 350 HP",
        fuelType: "Diesel",
        maxSpeed: "20 knots",
        cruisingSpeed: "16 knots",
        fuelConsumption: "60L/h",
        guestCapacity: {
          day: 12,
          overnight: 6
        },
        cabins: {
          total: 2,
          master: 1,
          double: 1,
          twin: 0
        },
        bathrooms: 2,
        navigation: [
          "GPS",
          "Radar",
          "VHF Radio",
          "Autopilot"
        ],
        entertainment: [
          "TV",
          "Sound system",
          "WiFi"
        ],
        comfort: [
          "Air conditioning",
          "Generator",
          "Hot water"
        ],
        waterToys: [
          "Snorkeling equipment",
          "Fishing equipment",
          "Wakeboard"
        ],
        includedServices: [
          "Professional captain",
          "Crew",
          "Fuel",
          "Water",
          "Soft drinks",
          "Snacks",
          "Towels",
          "Insurance"
        ],
        optionalServices: [
          {
            name: "Full catering",
            price: "25€ per person"
          },
          {
            name: "Airport transfer",
            price: "40€ per way"
          },
          {
            name: "Premium bar package",
            price: "150€ per day"
          }
        ],
        cancellation: {
          fullRefund: "7 days before",
          partialRefund: "3-7 days (50%)",
          noRefund: "less than 3 days"
        },
        availability: {
          checkIn: "10:00",
          checkOut: "18:00",
          minDuration: "1 day",
          seasonality: {
            highSeason: "June-September",
            lowSeason: "October-May"
          }
        }
      }
    },
    {
      id: 3,
      name: "No More Stress Boat",
      price: "599,00 €",
      priceUnit: "per day",
      image: "/la-perla-5.jpeg",
      year: 2015,
      length: "20m",
      builder: "Tuzla",
      location: "Side Harbor, Turkey",
      description: {
        main: "Are you ready for an unforgettable day with our Antalya-Side private yacht?",
        highlights: [
          "Our yacht in the world-famous Alanya is waiting for you to visit the most special places of Antalya (beautiful places in the Side sea) and to provide special service.",
          "Our captain, chef and staff are on duty.",
          "Check-in time is 09.30 every day, check-out time is 15.00 every day."
        ],
        location: {
          departure: "Antalya Side-Manavgat Marina",
          route: "Beautiful bays of Side"
        },
        includedMenu: {
          mainDishes: [
            "Shrimp",
            "Crayfish",
            "Fish",
            "Chicken",
            "Meatballs",
            "Spaghetti"
          ],
          sides: [
            "Salad",
            "Cold Appetizers"
          ],
          beverages: [
            "Coke",
            "Fanta",
            "Sprite",
            "Fruit Juice",
            "Water"
          ]
        },
        extraServices: {
          note: "The meal and route we mentioned above are the offer we offer and price specifically for you. When you have extra requests, they are added to the price when you specify them and priced accordingly.",
          options: [
            "The bays and islands of Antalya are wonderful. What matters is the maximum budget our guests want.",
            "What kind of trip do you want for your Antalya holiday, what are your extra requests, these are discussed with you and prices are decided.",
            "When you have extra drink requests, extra food-fish requests and when your requests and demands are added as a communication, prices are sent to you."
          ]
        },
        additionalInfo: "We can meet all your requests with fast communication, our special yachts that will make you happy are waiting for you during your holiday."
      },
      details: {
        startTime: "Night",
        totalCapacity: "20 Person",
        totalBreaks: "Not Available",
        totalCabins: "2 (Twin)",
        catering: "Included",
        alcoholDrink: "Yes Possible",
        special: "Not Available",
        length: "20 meters",
        beam: "5.8 meters",
        draft: "2.4 meters",
        enginePower: "2 x 400 HP",
        fuelType: "Diesel",
        maxSpeed: "21 knots",
        cruisingSpeed: "17 knots",
        fuelConsumption: "70L/h",
        guestCapacity: {
          day: 20,
          overnight: 6
        },
        cabins: {
          total: 2,
          master: 0,
          double: 0,
          twin: 2
        },
        bathrooms: 2,
        navigation: [
          "GPS",
          "Radar",
          "VHF Radio",
          "Autopilot"
        ],
        entertainment: [
          "TV",
          "Sound system",
          "WiFi"
        ],
        comfort: [
          "Air conditioning",
          "Generator",
          "Hot water"
        ],
        waterToys: [
          "Snorkeling equipment",
          "Fishing equipment"
        ],
        includedServices: [
          "Professional captain",
          "Crew",
          "Fuel",
          "Water",
          "Soft drinks",
          "Snacks",
          "Towels",
          "Insurance"
        ],
        optionalServices: [
          {
            name: "Full catering",
            price: "28€ per person"
          },
          {
            name: "Airport transfer",
            price: "45€ per way"
          },
          {
            name: "Premium bar package",
            price: "180€ per day"
          }
        ],
        cancellation: {
          fullRefund: "7 days before",
          partialRefund: "3-7 days (50%)",
          noRefund: "less than 3 days"
        },
        availability: {
          checkIn: "10:00",
          checkOut: "18:00",
          minDuration: "1 day",
          seasonality: {
            highSeason: "June-September",
            lowSeason: "October-May"
          }
        }
      }
    }
    
  ];

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home yachts={yachts} />} />
            <Route path="/about" element={<About />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/yachts" element={<Yachts yachts={yachts} />} />
            <Route 
              path="/yachts/:yachtId" 
              element={<YachtDetails yachts={yachts} />} 
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;