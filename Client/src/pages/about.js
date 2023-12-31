import React from 'react';
import Footer from '../components/footer';
import Head from '../components/head';
import Navbar from '../components/navbar';
import '../style.css';
export default function about({ isLoggedin, setIsLoggedin }) {
  return (
    <div>
      <Head />
      <Navbar isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />
      <div className="aboutbody">
        <section className="about">
          <div className="main">
            <img src="./images/logo.png" alt="logo" />
            <div className="abt-text">
              <h1>
                About <span>Us</span>
              </h1>
              <p>
                The following Travel agency website was developed using ReactJS
                for the Mobile development Course.
              </p>
              <a
                href="*"
                className="connectbtn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect with US!
              </a>

              <div className="connect-section">
                <div className="social-icons">
                  <a href="*" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a href="*" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-instagram"></i>
                  </a>
                  <a href="*" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-twitter"></i>
                  </a>
                  <a href="*" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                  <a href="*" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-youtube"></i>
                  </a>
                  <a href="*" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-wordpress"></i>
                  </a>
                  <a href="*" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-github"></i>
                  </a>
                  <a href="*" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-amazon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
