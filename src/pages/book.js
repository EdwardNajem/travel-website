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
      country:'italy',
      city: 'Vernazza',
      image: './images/p1.jpg',
    },
    {
      id: 2,
      country:'Turkey',
      city: 'Istanbul',
      image:'./images/l2.jpg',
    },
    {
      id: 3,
      country:'France',
      city: 'Paris',
      image: './images/l3.jpg',
    },
    {
      id: 4,
      country:'italy',
      city: 'Rome',
      image: './images/l4.jpg',
    },
    {
      id: 5,
      country:'UAE',
      city: 'Dubai',
      image: './images/l5.jpg',
    },
    {
      id: 6,
      country:'Mexico',
      city: 'Cancun',
      image: './images/l6.jpg',
    },
  ];
  
  const Book = () => {
   
    const [bookedDestinations, setBookedDestinations] = useState([]);
  
    
    const handleBookNow = (id) => {
 
      setBookedDestinations((prevBookedDestinations) => {
        if (prevBookedDestinations.includes(id)) {
      
          return prevBookedDestinations.filter((bookedId) => bookedId !== id);
        } else {
          
          return [...prevBookedDestinations, id];
        }
      });
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
                  <h2>{destination.country}</h2>
                  <p>
                    <FaMapMarkerAlt /> {destination.city}
                  </p>
                  <p>
                    <FaCalendar /> Book
                  </p>
                  <p>
                    <FaMoneyBillWave /> Starting from $999
                  </p>
               
                  <button
                    onClick={() => handleBookNow(destination.id)}
                    className="book-button"
                  >
                    {bookedDestinations.includes(destination.id) ? 'Unbook' : 'Book'}
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