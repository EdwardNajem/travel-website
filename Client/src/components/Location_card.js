import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style.css';
function LocationCard(props) {
  const { link, thumb, country } = props.data;

  return (
    <NavLink to={link}>
      <div className="col-content">
        <img src={thumb} alt="" />
        <p>{country}</p>
      </div>
    </NavLink>
  );
}

export default LocationCard;
