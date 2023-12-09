import React, { useEffect, useState } from 'react';
import Head from '../components/head';
import Navbar from '../components/navbar';
import '../upcoming.css';
export default function Upcoming({ isLoggedin, setIsLoggedin }) {
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
    <div className="upcoming">
      <Head />
      <Navbar isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />

      <div id="wrap" onMouseMove={handleMouseMove}>
        <a href="." className="hb">
          <div className="c">
            <img src="./images/California.jpg" alt="" />
            <div className="txt">
              <h1 className="upc-desc">Californa</h1>
              <p>Explore scenic landscapes and charming cities.</p>
            </div>
          </div>
        </a>
        <div className="fullBg">
          <img src="./images/California.jpg" alt="" />
        </div>

        <a href="." className="hb">
          <div className="c">
            <img src="./images/Chicago.jpg" alt="" />
            <div className="txt">
              <h1 className="upc-desc">Chicago</h1>
              <p>Discover ancient wonders and vibrant culture.</p>
            </div>
          </div>
        </a>
        <div className="fullBg">
          <img src="./images/Chicago.jpg" alt="" />
        </div>

        <a href="." className="hb">
          <div className="c">
            <img src="./images/SanFrancisco.jpg" alt="" />
            <div className="txt">
              <h1 className="upc-desc">San Francisco</h1>
              <p>Immerse yourself in majestic fjords and Northern Lights.</p>
            </div>
          </div>
        </a>
        <div className="fullBg">
          <img src="./images/SanFrancisco.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
