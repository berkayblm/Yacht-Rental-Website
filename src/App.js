import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import YachtDetails from './pages/YachtDetails';
import Yachts from './pages/Yachts';
import Contact from './pages/Contact';


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
      price: "950 €",
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
      },
      features: {
        yachtName: "Cleopatra Luxury",
        yachtType: "Motor Yacht",
        brand: "Custom built",
        capacity: "20 person",
        crew: "2 person",
        cabin: "4",
        showerWC: "4",
        length: "24 meter",
        width: "6.5 meter",
        speed: "22 Knots",
        manufacturing: "2007",
        refitDate: "2022",
        location: "Side Marina",
        distance: "15 km"
      },
      equipment: {
        comfort: [
          "Wi-Fi",
          "Binoculars",
          "Outside speakers",
          "GPS",
          "Fridge",
          "Deep freeze",
          "Indoor speakers",
          "Towel"
        ],
        activities: [
          "Swim ladder",
          "Grill",
          "Modern dinnerware set",
          "Bluetooth connection",
          "Amateur fishing gear",
          "Snorkel and Fins",
          "Sun Pads"
        ]
      },
      services: {
        included: {
          foodAndBeverage: {
            title: "Food and beverage",
            description: "On the yacht, the menu listed below is provided free of charge to all our guests. Non-alcoholic beverages are available unlimitedly and at no cost."
          },
          decoration: {
            title: "Decoration",
            description: "Tailor your yacht's decor for birthdays, anniversaries, and special occasions."
          },
          fuel: {
            title: "Fuel",
            description: "Fuel costs are included in the total price, ensuring that no additional charges for fuel will be requested."
          },
          waiterAndCrew: {
            title: "Waiter and crew",
            description: "The yacht is available for charter with crew included, and there are no additional charges for waiter services."
          },
          fixedMenu: {
            title: "Fixed menu content",
            items: [
              "Grilled Fish",
              "Grilled Chicken",
              "Spaghetti",
              "Mediterranean Salad",
              "Fruit Platter",
              "Soft Drinks",
              "Turkish Coffee",
              "Herbal Teas"
            ]
          }
        },
        extras: {
          birthdayCake: {
            title: "Birthday cake",
            description: "You can choose the contents and the message to be written on your birthday cake."
          },
          bringingAlcohol: {
            title: "Bringing alcohol",
            description: "Bringing your own alcoholic drinks incurs a 25 € service charge."
          },
          purchasingAlcohol: {
            title: "Purchasing Alcohol on a Yacht",
            description: "Alcoholic beverages are available for purchase on the yacht; you are welcome to buy them if you wish."
          },
          modifyingMenu: {
            title: "Modifying the Standard Menu",
            description: "Alterations to your meal choices may incur additional costs. For precise information, please share the details of your preferred menu with us."
          },
          tourRouteChange: {
            title: "Yacht Tour Route Change",
            description: "Please remember that extended routes will require longer rental periods."
          },
          waterActivities: {
            title: "Water Activities",
            description: "Experience the thrill of water sports like jet skiing, ringo, banana boating, and parasailing for an additional fee."
          },
          photographyServices: {
            title: "Photography Services",
            description: "Professional photography and drone filming services are available for your special celebrations and events."
          },
          transfer: {
            title: "Transfer",
            description: "The round-trip transfer cost varies depending on the number of people and distance."
          }
        },
        
      },
      images: [
        '/images/side-vip-img-1.jpg',
        '/images/side-vip-img-2.jpg',
        '/images/side-vip-img-3.jpg',
        '/images/side-vip-img-4.jpg'
      ]
    },
    {
      id: 2,
      name: "Side VIP",
      price: "850 €",
      priceUnit: "per day",
      image: "/images/side-vip-img-5.jpg",
      year: 2008,
      length: "12.5m",
      builder: "Custom Built",
      location: "Side Harbor, Turkey",
      description: {
        main: "Experience luxury yachting in Side with our VIP vessel",
        highlights: [
          "Premium service in the beautiful waters of Side",
          "Professional crew at your service",
          "Daily tours from 09:30 to 15:00"
        ],
        location: {
          departure: "Side-Manavgat Marina",
          route: "Scenic Side bays"
        },
        includedMenu: {
          mainDishes: [
            "Fresh Fish",
            "Grilled Chicken",
            "Pasta",
            "Local Specialties"
          ],
          sides: [
            "Mediterranean Salad",
            "Turkish Mezze"
          ],
          beverages: [
            "Soft Drinks",
            "Water",
            "Tea",
            "Coffee"
          ]
        },
        extraServices: {
          note: "Customizable experience with additional services available on request",
          options: [
            "Extended routes available",
            "Special menu modifications possible",
            "Premium beverage packages available"
          ]
        },
        additionalInfo: "Tailored experiences for special occasions and events"
      },
      details: {
        startTime: "10:00 - 15:00",
        totalCapacity: "12 Person",
        totalBreaks: "3 Times",
        totalCabins: "2 Cabins",
        catering: "Included",
        alcoholDrink: "Yes Possible",
        special: "BBQ Party",
        
        // Technical Specifications
        length: "12.5 meters",
        beam: "4.3 meters",
        draft: "1.8 meters",
        enginePower: "2 x 350 HP",
        fuelType: "Diesel",
        maxSpeed: "20 knots",
        cruisingSpeed: "16 knots",
        fuelConsumption: "50L/h",
        
        // Accommodation
        guestCapacity: {
          day: 12,
          overnight: 4
        },
        cabins: {
          total: 2,
          master: 1,
          double: 1,
          twin: 0
        },
        bathrooms: 2,
        
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
          "Bluetooth connection"
        ],
        comfort: [
          "Air conditioning",
          "Heating",
          "Generator",
          "Hot water"
        ],
        waterToys: [
          "Snorkeling equipment",
          "Fishing equipment",
          "Water skis"
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
        
        // Cancellation Policy
        cancellation: {
          fullRefund: "7 days before",
          partialRefund: "3-7 days (50%)",
          noRefund: "less than 3 days"
        },
        
        // Schedule
        availability: {
          checkIn: "10:00",
          checkOut: "15:00",
          minDuration: "1 day",
          seasonality: {
            highSeason: "June-September",
            lowSeason: "October-May"
          }
        }
      },
      features: {
        yachtName: "Side VIP",
        yachtType: "Motor Yacht",
        brand: "Custom built",
        capacity: "12 person",
        crew: "2 person",
        cabin: "2",
        showerWC: "2",
        length: "12.5 meter",
        width: "4.3 meter",
        speed: "20 Knots",
        manufacturing: "2008",
        refitDate: "2023",
        location: "Side Marina",
        distance: "15 km"
      },
      equipment: {
        comfort: [
          "Wi-Fi",
          "Binoculars",
          "Outside speakers",
          "GPS",
          "Fridge",
          "Deep freeze",
          "Indoor speakers",
          "Towel"
        ],
        activities: [
          "Swim ladder",
          "Grill",
          "Modern dinnerware set",
          "Bluetooth connection",
          "Amateur fishing gear",
          "Snorkel and Fins",
          "Sun Pads"
        ]
      },
      services: {
        included: {
          foodAndBeverage: {
            title: "Food and beverage",
            description: "Complimentary menu and non-alcoholic beverages included."
          },
          decoration: {
            title: "Decoration",
            description: "Custom decorations available for special occasions."
          },
          fuel: {
            title: "Fuel",
            description: "All fuel costs included in charter price."
          },
          waiterAndCrew: {
            title: "Waiter and crew",
            description: "Professional crew service included."
          },
          fixedMenu: {
            title: "Fixed menu content",
            items: [
              "Fresh Fish",
              "Grilled Chicken",
              "Local Pasta",
              "Mediterranean Salad",
              "Seasonal Fruit",
              "Soft Drinks",
              "Turkish Coffee",
              "Local Teas"
            ]
          }
        },
        extras: {
          birthdayCake: {
            title: "Birthday cake",
            description: "Custom birthday cakes available on request."
          },
          bringingAlcohol: {
            title: "Bringing alcohol",
            description: "25€ service charge for bringing own alcohol."
          },
          purchasingAlcohol: {
            title: "Purchasing Alcohol",
            description: "Available for purchase onboard."
          },
          modifyingMenu: {
            title: "Menu Modifications",
            description: "Custom menu options available at additional cost."
          },
          tourRouteChange: {
            title: "Route Changes",
            description: "Flexible routing with additional time charges."
          },
          waterActivities: {
            title: "Water Activities",
            description: "Additional water sports available for fee."
          },
          photographyServices: {
            title: "Photography",
            description: "Professional photo services available."
          },
          transfer: {
            title: "Transfer",
            description: "Custom transfer services based on group size."
          }
        },
        
      },
      images: [
        '/images/side-vip-img-1.jpg',
        '/images/side-vip-img-2.jpg',
        '/images/side-vip-img-3.jpg',
        '/images/side-vip-img-4.jpg'
      ]
    },
    {
      id: 3,
      name: "Sunset Dream",
      price: "1200 €",
      priceUnit: "per day",
      image: "/yacht-sunset.jpg",
      year: 2015,
      length: "18.5m",
      builder: "Azimut",
      location: "Side Harbor, Turkey",
      description: {
        main: "Luxury sunset cruises and day trips in ultimate comfort",
        highlights: [
          "Premium sunset experience",
          "Gourmet dining options",
          "Professional crew and service"
        ],
        location: {
          departure: "Side Marina",
          route: "Coastal Side and sunset viewing points"
        },
        includedMenu: {
          mainDishes: [
            "Premium Seafood",
            "Grilled Specialties",
            "International Cuisine"
          ],
          sides: [
            "Gourmet Salads",
            "Premium Appetizers"
          ],
          beverages: [
            "Premium Soft Drinks",
            "Fresh Juices",
            "Mineral Water"
          ]
        },
        extraServices: {
          note: "Enhanced services available for premium experience",
          options: [
            "Private chef available",
            "Custom route planning",
            "Special occasion arrangements"
          ]
        },
        additionalInfo: "Perfect for special occasions and luxury experiences"
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
      },
      features: {
        yachtName: "Sunset Dream",
        yachtType: "Motor Yacht",
        brand: "Azimut",
        capacity: "16 person",
        crew: "3 person",
        cabin: "3",
        showerWC: "2",
        length: "18.5 meter",
        width: "5.2 meter",
        speed: "24 Knots",
        manufacturing: "2015",
        refitDate: "2022",
        location: "Side Marina",
        distance: "15 km"
      },
      equipment: {
        comfort: [
          "Wi-Fi",
          "Satellite TV",
          "Surround sound system",
          "GPS Navigation",
          "Large fridge",
          "Wine cooler",
          "Premium sound system",
          "Luxury towels",
          "Air conditioning"
        ],
        activities: [
          "Hydraulic swim platform",
          "Professional BBQ station",
          "Premium dinnerware set",
          "Smart entertainment system",
          "Professional fishing gear",
          "Diving equipment",
          "Premium sun loungers",
          "Water toys"
        ]
      },
      services: {
        included: {
          foodAndBeverage: {
            title: "Food and beverage",
            description: "On the yacht, the menu listed below is provided free of charge to all our guests. Non-alcoholic beverages are available unlimitedly and at no cost."
          },
          decoration: {
            title: "Decoration",
            description: "Tailor your yacht's decor for birthdays, anniversaries, and special occasions."
          },
          fuel: {
            title: "Fuel",
            description: "Fuel costs are included in the total price, ensuring that no additional charges for fuel will be requested."
          },
          waiterAndCrew: {
            title: "Waiter and crew",
            description: "The yacht is available for charter with crew included, and there are no additional charges for waiter services."
          },
          fixedMenu: {
            title: "Fixed menu content",
            items: [
              "Grilled Fish",
              "Grilled Chicken",
              "Spaghetti",
              "Mediterranean Salad",
              "Fruit Platter",
              "Soft Drinks",
              "Turkish Coffee",
              "Herbal Teas"
            ]
          }
        },
        extras: {
          birthdayCake: {
            title: "Birthday cake",
            description: "You can choose the contents and the message to be written on your birthday cake."
          },
          bringingAlcohol: {
            title: "Bringing alcohol",
            description: "Bringing your own alcoholic drinks incurs a 25 € service charge."
          },
          purchasingAlcohol: {
            title: "Purchasing Alcohol on a Yacht",
            description: "Alcoholic beverages are available for purchase on the yacht; you are welcome to buy them if you wish."
          },
          modifyingMenu: {
            title: "Modifying the Standard Menu",
            description: "Alterations to your meal choices may incur additional costs. For precise information, please share the details of your preferred menu with us."
          },
          tourRouteChange: {
            title: "Yacht Tour Route Change",
            description: "Please remember that extended routes will require longer rental periods."
          },
          waterActivities: {
            title: "Water Activities",
            description: "Experience the thrill of water sports like jet skiing, ringo, banana boating, and parasailing for an additional fee."
          },
          photographyServices: {
            title: "Photography Services",
            description: "Professional photography and drone filming services are available for your special celebrations and events."
          },
          transfer: {
            title: "Transfer",
            description: "The round-trip transfer cost varies depending on the number of people and distance."
          }
        },
        
      },
      images: [
        '/images/side-vip-img-1.jpg',
        '/images/side-vip-img-2.jpg',
        '/images/side-vip-img-3.jpg',
        '/images/side-vip-img-4.jpg'
      ]
    },
    {
      id: 4,
      name: "Royal Interior",
      price: "1500 €",
      priceUnit: "per day",
      image: "/yacht-interior.jpg",
      year: 2018,
      length: "26.5m",
      builder: "Sunseeker",
      location: "Side Harbor, Turkey",
      description: {
        main: "Ultimate luxury yacht experience with premium interior",
        highlights: [
          "Luxurious interior design",
          "Premium amenities",
          "VIP service experience"
        ],
        location: {
          departure: "Side Marina",
          route: "Customizable luxury routes"
        },
        includedMenu: {
          mainDishes: [
            "Gourmet Selection",
            "Fresh Seafood",
            "International Cuisine"
          ],
          sides: [
            "Premium Salads",
            "Luxury Appetizers"
          ],
          beverages: [
            "Premium Beverages",
            "Signature Cocktails",
            "Fine Water Selection"
          ]
        },
        extraServices: {
          note: "Fully customizable luxury experience",
          options: [
            "Personal chef service",
            "Butler service",
            "Custom entertainment options"
          ]
        },
        additionalInfo: "The ultimate luxury yachting experience"
      },
      details: {
        startTime: "10:00 - 15:00",
        totalCapacity: "22 Person",
        totalBreaks: "Not Available",
        totalCabins: "5 Cabins",
        catering: "Included",
        alcoholDrink: "Yes Possible",
        special: "Not Available",
        length: "26.5 meters",
        beam: "6.8 meters",
        draft: "3.2 meters",
        enginePower: "2 x 500 HP",
        fuelType: "Diesel",
        maxSpeed: "28 knots",
        cruisingSpeed: "24 knots",
        fuelConsumption: "100L/h",
        guestCapacity: {
          day: 22,
          overnight: 8
        },
        cabins: {
          total: 5,
          master: 1,
          double: 3,
          twin: 1
        },
        bathrooms: 4,
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
            price: "35€ per person"
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
      },
      features: {
        yachtName: "Royal Interior",
        yachtType: "Luxury Motor Yacht",
        brand: "Sunseeker",
        capacity: "22 person",
        crew: "4 person",
        cabin: "5",
        showerWC: "4",
        length: "26.5 meter",
        width: "6.8 meter",
        speed: "28 Knots",
        manufacturing: "2018",
        refitDate: "2023",
        location: "Side Marina",
        distance: "15 km"
      },
      equipment: {
        comfort: [
          "High-speed Wi-Fi",
          "4K Smart TVs",
          "Bose sound system",
          "Advanced navigation system",
          "Full-size refrigerator",
          "Wine cellar",
          "Climate control",
          "Egyptian cotton towels",
          "Satellite phone"
        ],
        activities: [
          "Extended swim platform",
          "Outdoor kitchen",
          "Designer dinnerware",
          "Entertainment center",
          "Game fishing equipment",
          "Scuba diving gear",
          "Luxury sun beds",
          "Jet ski platform",
          "Kayaks"
        ]
      },
      services: {
        included: {
          foodAndBeverage: {
            title: "Food and beverage",
            description: "On the yacht, the menu listed below is provided free of charge to all our guests. Non-alcoholic beverages are available unlimitedly and at no cost."
          },
          decoration: {
            title: "Decoration",
            description: "Tailor your yacht's decor for birthdays, anniversaries, and special occasions."
          },
          fuel: {
            title: "Fuel",
            description: "Fuel costs are included in the total price, ensuring that no additional charges for fuel will be requested."
          },
          waiterAndCrew: {
            title: "Waiter and crew",
            description: "The yacht is available for charter with crew included, and there are no additional charges for waiter services."
          },
          fixedMenu: {
            title: "Fixed menu content",
            items: [
              "Grilled Fish",
              "Grilled Chicken",
              "Spaghetti",
              "Mediterranean Salad",
              "Fruit Platter",
              "Soft Drinks",
              "Turkish Coffee",
              "Herbal Teas"
            ]
          }
        },
        extras: {
          birthdayCake: {
            title: "Birthday cake",
            description: "You can choose the contents and the message to be written on your birthday cake."
          },
          bringingAlcohol: {
            title: "Bringing alcohol",
            description: "Bringing your own alcoholic drinks incurs a 25 € service charge."
          },
          purchasingAlcohol: {
            title: "Purchasing Alcohol on a Yacht",
            description: "Alcoholic beverages are available for purchase on the yacht; you are welcome to buy them if you wish."
          },
          modifyingMenu: {
            title: "Modifying the Standard Menu",
            description: "Alterations to your meal choices may incur additional costs. For precise information, please share the details of your preferred menu with us."
          },
          tourRouteChange: {
            title: "Yacht Tour Route Change",
            description: "Please remember that extended routes will require longer rental periods."
          },
          waterActivities: {
            title: "Water Activities",
            description: "Experience the thrill of water sports like jet skiing, ringo, banana boating, and parasailing for an additional fee."
          },
          photographyServices: {
            title: "Photography Services",
            description: "Professional photography and drone filming services are available for your special celebrations and events."
          },
          transfer: {
            title: "Transfer",
            description: "The round-trip transfer cost varies depending on the number of people and distance."
          }
        },
        
      },
      images: [
        '/images/side-vip-img-1.jpg',
        '/images/side-vip-img-2.jpg',
        '/images/side-vip-img-3.jpg',
        '/images/side-vip-img-4.jpg'
      ]
    }
  ];

  return (
    <Router>
      
      <div className="d-flex flex-column min-vh-100">
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home yachts={yachts} />} />
            <Route path="/about" element={<About />} />
            
            <Route path="/yachts" element={<Yachts yachts={yachts} />} />
            <Route 
              path="/yachts/:yachtId" 
              element={<YachtDetails yachts={yachts} />} 
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;