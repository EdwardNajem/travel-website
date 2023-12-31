import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style.css';

export default function Navbar({ isLoggedin, setIsLoggedin }) {
  return (
    <nav className="navbar">
      <img
        src="./images/logo.png"
        className="logo"
        alt="Logo"
        title="JustTravels"
      />
      <ul className="navbar">
        <li>
          <NavLink className="navbar-comp" exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <div className="dropdown">
            <NavLink className="navbar-comp" to="/book">
              Booking
            </NavLink>
            <div className="dropdown-content">
              <NavLink className="navbar-comp" to="/request">
                Request
              </NavLink>
              <NavLink className="navbar-comp" to="/book">
                Book
              </NavLink>
            </div>
          </div>
        </li>
        <li>
          <NavLink className="navbar-comp" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-comp" to="/contact">
            Contact
          </NavLink>
        </li>
        <li>
          <div className="dropdown">
            <NavLink className="navbar-comp" to="/locations">
              Locations
            </NavLink>
            <div className="dropdown-content">
              <NavLink className="navbar-comp" to="/locations">
                Locations
              </NavLink>
              <NavLink className="navbar-comp" to="/upcoming">
                Upcoming
              </NavLink>
            </div>
          </div>
        </li>
        {isLoggedin ? (
          <li>
            <NavLink
              className="navbar-comp"
              to="/"
              onClick={() => setIsLoggedin(false)}
            >
              Log Out
            </NavLink>
          </li>
        ) : (
          <li>
            <NavLink className="navbar-comp" to="/login">
              Log In
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
