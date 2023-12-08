import React from 'react';
import '../style.css';


function Location_Detail(props) {
   const{ id ,thumb2 , country, description } = props.data;
  return (
    <div className="location-detail" id={id}>
      <div className="location-img">
        <img src={thumb2} alt="" />
      </div>
      <h1>{country}</h1>
      <div className="stars">
        <i className="bx bxs-star"></i>
        <i className="bx bxs-star"></i>
        <i className="bx bxs-star"></i>
        <i className="bx bxs-star"></i>
        <i className="bx bxs-star"></i>
      </div>
      <p>
       {description}
      </p>
    </div>
  );
}

export default Location_Detail;
