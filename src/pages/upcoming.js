import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Head from '../components/head';
import '../upcoming.css'; 
export default function Upcoming() {
  const [docWidth, setDocWidth] = useState(document.body.clientWidth);
  const [slidesWidth, setSlidesWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setDocWidth(document.body.clientWidth);
      setSlidesWidth(document.getElementById('wrap').clientWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseMove = (e) => {
    const mouseX = e.pageX;
    const offset = (mouseX / docWidth) * slidesWidth - mouseX / 2;

    document.querySelectorAll('.hb').forEach((image) => {
      image.style.transform = `translate3d(${-offset}px, 0, 0)`;
    });
  };



  return (
    <div className='upcoming' >
      <Head />
      <Navbar />

      <div id="wrap" onMouseMove={handleMouseMove}>
        <a href="." className="hb">
          <div className="c">
            <img src="./images/sweden.jpg" alt="" />
            <div className="txt">
              <h1 className="upc-desc">Sweden</h1>
              <p>Explore scenic landscapes and charming cities.</p>
            </div>
          </div>
        </a>
        <div className="fullBg">
          <img src="./images/sweden.jpg" alt="" />
        </div>

        <a href="." className="hb">
          <div className="c">
            <img src="./images/egypt.jpg" alt="" />
            <div className="txt">
              <h1 className="upc-desc">Egypt</h1>
              <p>Discover ancient wonders and vibrant culture.</p>
            </div>
          </div>
        </a>
        <div className="fullBg">
          <img src="./images/egypt.jpg" alt="" />
        </div>

        <a href="." className="hb">
          <div className="c">
            <img src="./images/Norway.jpg" alt="" />
            <div className="txt">
              <h1 className="upc-desc">Norway</h1>
              <p>Immerse yourself in majestic fjords and Northern Lights.</p>
            </div>
          </div>
        </a>
        <div className="fullBg">
          <img src="./images/Norway.jpg" alt="" />
        </div>

        <a href="." className="hb">
          <div className="c">
            <img src="./images/Australia.jpg" alt="" />
            <div className="txt">
              <h1 className="upc-desc">Australia</h1>
              <p>Experience stunning natural beauty and laid-back lifestyle.</p>
            </div>
          </div>
        </a>
        <div className="fullBg">
          <img src="./images/Australia.jpg" alt="" />
        </div>
      </div>

     
    </div>
  );
}
