import React from 'react';
import Location_Detail from '../components/Location_Detail';
import Footer from '../components/footer';
import Head from '../components/head';
import { loc } from '../components/loc';
import Navbar from '../components/navbar';
import '../style.css';
export default function Locations() {
  const listItems = loc.map((item) => <Location_Detail data={item} />);
  return (
    <div>
      <Head />
      <div className="location-body">
        <Navbar />

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
