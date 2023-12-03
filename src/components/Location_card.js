import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style.css';
function LocationCard(props) {
  const {  link, thumb, country, city } = props.data;

  return (
    <NavLink to={link}>
    
      <div className="col-content">
        <img src={thumb} alt="" />
        <h5>{country}</h5>
        <p>{city}</p>
      </div>
    </NavLink>
  );
}

export default LocationCard;
