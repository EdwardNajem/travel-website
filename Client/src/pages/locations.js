import React from 'react';
import LocationDetail from '../components/Location_Detail';
import Footer from '../components/footer';
import Head from '../components/head';
import { loc } from '../components/loc';
import Navbar from '../components/navbar';
import '../style.css';
export default function Locations({ isLoggedin, setIsLoggedin }) {
  const listItems = loc.map((item) => <LocationDetail data={item} />);
  return (
    <div>
      <Head />
      <div className="location-body">
        <Navbar isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />

        <section className="location-section">
          <div className="location-heading">
            <h1>
              Discover The <span>Beautiful World</span>
            </h1>
          </div>
          {listItems}
        </section>
        <Footer />
      </div>
    </div>
  );
}
