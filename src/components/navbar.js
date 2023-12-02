import React, { useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const navRef = useRef();

  const shownavBar = () => {
    navRef.current.classList.toggle('responsive_navbar');
  };

  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    shownavBar();
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };

  let boxClass = ['main-menu menu-right menuq1'];
  if (isMenu) {
    boxClass.push('menuq2');
  } else {
    boxClass.push('');
  }

  const [isMenuSubMenu, setMenuSubMenu] = useState(false);

  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };

  let boxClassSubMenu = ['sub__menus'];
  if (isMenuSubMenu) {
    boxClassSubMenu.push('sub__menus__Active');
  } else {
    boxClassSubMenu.push('');
  }

  return (
    <header>
      <Link to="/">
        <img
          src="./images/logo.png"
          className="logo"
          alt="Logo"
          title="JustTravels"
        />
      </Link>
      <nav className="navi" ref={navRef}>
        <div className="navib">
          <NavLink className="home" to="/home">
            Home
          </NavLink>

          <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows">
            <Link to="#">Booking</Link>
            <ul className={boxClassSubMenu.join(' ')}>
              <li>
                <NavLink onClick={toggleClass} to={`/request`}>
                  Request
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={toggleClass}
                  activeClassName="is-active"
                  to={`/book`}
                >
                  Book
                </NavLink>
              </li>
            </ul>
          </li>
          <NavLink className="home" to="/about">
            About
          </NavLink>
          <NavLink className="home" to="/contact">
            Contact
          </NavLink>

          <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows">
            <Link to="#">Locations</Link>
            <ul className={boxClassSubMenu.join(' ')}>
              <li>
                <NavLink onClick={toggleClass} to={`/locations`}>
                  Locations
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={toggleClass}
                  activeClassName="is-active"
                  to={`/upcoming`}
                >
                  Upcoming
                </NavLink>
              </li>
            </ul>
          </li>
        </div>
        <button className="nav-btn nav-btn-close" onClick={shownavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={shownavBar}>
        <FaBars />
      </button>
      <div className="right">
        <NavLink className="sign-in" to={'/login'} onClick={shownavBar}>
          Sign Up
        </NavLink>
      </div>
    </header>
  );
}

export default Navbar;
