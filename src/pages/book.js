// Book.js
import { FaMapMarkerAlt, FaCalendar, FaMoneyBillWave } from 'react-icons/fa';
import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Head from '../components/head';
import '../book.css';

const destinations = [
    {
      id: 1,
      name: 'Paris',
      image: './images/sweden.jpg',
    },
    {
      id: 2,
      name: 'New York',
      image:'./images/sweden.jpg',
    },
    {
      id: 3,
      name: 'Tokyo',
      image: './images/sweden.jpg',
    },
    {
      id: 4,
      name: 'Rome',
      image: './images/sweden.jpg',
    },
    {
      id: 5,
      name: 'Sydney',
      image: './images/sweden.jpg',
    },
    {
      id: 6,
      name: 'Cancun',
      image: './images/sweden.jpg',
    },
  ];
  
const Book = () => {
  const [bookedDestinations, setBookedDestinations] = useState([]);

  const handleBookNow = (id) => {
    if (!bookedDestinations.includes(id)) {
      setBookedDestinations([...bookedDestinations, id]);
    }
  };

  return (
    <div>
      <Head />
      <Navbar />
      <div className="book-container">
        <div className="destinations-container">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className={`destination-card ${bookedDestinations.includes(destination.id) ? 'booked' : ''}`}
            >
              <img src={destination.image} alt={destination.name} className="destination-image" />
              <div className="destination-info">
                <h2>{destination.name}</h2>
                <p>
                  <FaMapMarkerAlt /> {destination.name}
                </p>
                <p>
                  <FaCalendar /> Book 
                </p>
                <p>
                  <FaMoneyBillWave /> Starting from $999
                </p>
                <button
                  onClick={() => handleBookNow(destination.id)}
                  className={`book-button ${bookedDestinations.includes(destination.id) ? 'booked' : ''}`}
                >
                  {bookedDestinations.includes(destination.id) ? 'Booked' : 'Book '}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Book;
