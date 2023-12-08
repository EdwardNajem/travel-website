import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Head from '../components/head';
import { NavLink } from 'react-router-dom';
import {loc} from '../components/loc';
import LocationCard from '../components/Location_card';
import '../style.css'
export default function Home()
{
  const listItems = loc.map((item) => <LocationCard data={item}/> );
    return(
    <div>
        <Head/>
        <div className="banner">
            <video src="./images/bgvid.mp4" type="video/mp4" autoPlay muted loop></video>
            <div className="content" id="home">
                <Navbar/>
                <div className="title">
                    <h1>JUST TRAVEL</h1>
                    <p>Plan your trip with us and travel around the US with the most affordable packages!</p>
                    <NavLink to="./book" className="button">Book Now!</NavLink>
                </div>
            </div> 
        </div>

  <section className="container">
        <div className="text">
            <h2>We have the best services available for you!</h2>
        </div>
    <div className="rowitems">
        <div className="container-box">
            <div className="container-image">
                <img src="./images/1a.jpg" alt="Flight Services"/>
            </div>
            <h4>Flight Services</h4>
            <p>Arrival and Departure</p>
        </div>
    
        <div className="container-box">
            <div className="container-image">
                <img src="./images/2a.jpg" alt="Food Services"/>
            </div>
            <h4>Food Services</h4>
            <p>Catering</p>
        </div>

        <div className="container-box">
            <div className="container-image">
                <img src="./images/3a.jpg" alt="Travel Services"/>
            </div>
            <h4>Travel Services</h4>
            <p>Pick-up/drop</p>
        </div>

        <div className="container-box">
            <div className="container-image">
                <img src="./images/4a.jpg" alt="Hotel Services"/>
            </div>
            <h4>Hotel Services</h4>
            <p>Check-in/out</p>
        </div>

    </div>

    

  </section>

  <h1>Locations</h1>
  
 <section className="locations" id="locations">
 <div className="location-content">
   {listItems};
   </div>
 </section>

<h1>Packages</h1>
<div className="packages-wrapper"> 
    <div className="package silver">
      <img src="./images/p1.jpg" alt="Silver Package" class="package-img"/>
      <h2 className="package-name">Silver Package</h2>
      <ul className="package-benefits">
        <li className="benefit-item">2 Nights Accommodation</li>
        <li className="benefit-item">Daily Breakfast Included</li>
        <li className="benefit-item">City Tour</li>
      </ul>
      <div className="package-price">$499</div>
    </div>
    <div className="package gold">
      <img src="./images/p2.jpg" alt="Gold Package" class="package-img"/>
      <h2 className="package-name">Gold Package</h2>
      <ul className="package-benefits">
        <li className="benefit-item">4 Nights Accommodation</li>
        <li className="benefit-item">Daily Breakfast Included</li>
        <li className="benefit-item">City Tour + Day Trip</li>
        <li className="benefit-item">Complimentary Airport Transfer</li>
      </ul>
      <div className="package-price">$999</div>
    </div>
    <div className="package platinum">
      <img src="./images/p3.jpg" alt="Platinum Package" class="package-img"/>
      <h2 className="package-name">Platinum Package</h2>
      <ul className="package-benefits">
        <li className="benefit-item">7 Nights Accommodation</li>
        <li className="benefit-item">Daily Breakfast Included</li>
        <li className="benefit-item">City Tour + 2 Day Trips</li>
        <li className="benefit-item">Complimentary Airport Transfer</li>
        <li className="benefit-item">Exclusive Access to VIP Lounge</li>
      </ul>
      <div className="package-price">$1999</div>
    </div>
  </div>




  <h1 >Testimonials</h1>
<div className="testimonials-wrapper">
  <div className="testimonial">
    <div className="testimonial-text">"I had the most amazing vacation thanks to this travel agency! The itinerary was perfectly planned and the accommodations were top-notch."</div>
    <div className="testimonial-author">- John Smith, New York</div>
  </div>
  <div className="testimonial">
    <div className="testimonial-text">"I can't recommend this travel agency enough! They made the booking process so easy and the trip itself was unforgettable."</div>
    <div className="testimonial-author">- Sarah Johnson, London</div>
  </div>
  <div className="testimonial">
    <div className="testimonial-text">"Thank you to this travel agency for helping me plan my dream vacation. The staff were knowledgeable and attentive, and everything went smoothly."</div>
    <div className="testimonial-author">- Alex Martinez, Sydney</div>
  </div>
</div>



<section className="newsletter">
    <div className="newstext">
        <h2>Newsletter</h2>
        <p>Subscribe to get offers and latest<br/>updates every week!</p>
    </div>

    <div className="send">
        <form action="">
            <input type="email" name="emailid" placeholder="E-mail" required/>
            <input type="submit" value="Subscribe"/>
        </form>
    </div>

</section>







        <Footer/>
    </div>

    );
}