// Book.js
import { FaMapMarkerAlt, FaCalendar, FaMoneyBillWave } from 'react-icons/fa';
import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Head from '../components/head';
import '../book.css';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const destinations = [
  {
    id: 1,
    name: 'Brooklyn',
    image: './images/p1.jpg',
  },
  {
    id: 2,
    name: 'Manhattan',
    image: './images/l2.jpg',
  },
  {
    id: 3,
    name: 'Bronx',
    image: './images/l3.jpg',
  },
  {
    id: 4,
    name: 'Queens',
    image: './images/l4.jpg',
  },
  {
    id: 5,
    name: 'Staten Island',
    image: './images/l5.jpg',
  },
  {
    id: 6,
    name: 'Chicago',
    image: './images/l6.jpg',
  },
];

const Book = ({ isLoggedin, setIsLoggedin }) => {
  const navigate = useNavigate();

  console.log(isLoggedin);
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
      <Navbar isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />
      <div className="book-container">
        <div className="destinations-container">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className={`destination-card ${
                bookedDestinations.includes(destination.id) ? 'booked' : ''
              }`}
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="destination-image"
              />

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
                  className="book-button"
                >
                  {bookedDestinations.includes(destination.id)
                    ? 'Unbook'
                    : 'Book'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      if(!isLoggedin)
      {
        <Modal show={!isLoggedin} centered>
          <Modal.Header closeButton>
            <Modal.Title>Please LogIn First</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>In Order to Book your ticket you have to Log In.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => navigate('/login')}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
      }
    </div>
  );
};

export default Book;
