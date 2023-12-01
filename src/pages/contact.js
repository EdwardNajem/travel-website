import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Head from '../components/head';
export default function contact() {
  return (
    <div>
      <Head />
      <Navbar />
      <div className="contact-container">
        <div className="map">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.0244872789303!2d35.53518267486209!3d33.837479129041576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f1826928eeb3d%3A0xfd356d0625e311ab!2sAntonine%20University%20(UA)!5e0!3m2!1sen!2slb!4v1684083286912!5m2!1sen!2slb"
            width="600"
            height="450"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <form className="contact-form">
          <h1>Contact Us</h1>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
