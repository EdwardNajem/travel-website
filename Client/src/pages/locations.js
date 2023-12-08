import React from 'react';
import Location_Detail from '../components/Location_Detail';
import Footer from '../components/footer';
import Head from '../components/head';
import { loc } from '../components/loc';
import Navbar from '../components/navbar';
import '../style.css';
export default function Locations() {
    const listItems = loc.map((item) => <Location_Detail data={item}/>)
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
          <div className="location-detail" id="Vernazza">
            <div className="location-img">
              <img src="./images/t1.jpg" alt="" />
            </div>
            <h1>Vernazza</h1>
            <div className="stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>
            <p>
              Vernazza is a picturesque village nestled on the rugged coastline
              of the Italian Riviera. With its colorful buildings, narrow
              streets, and stunning sea views, it's no wonder that Vernazza has
              become a must-visit destination for tourists from all over the
              world. Whether you're looking to soak up the sun on the beach,
              enjoy fresh seafood at a local restaurant, or simply wander the
              charming streets and take in the sights, Vernazza has something to
              offer everyone. Come see for yourself why this enchanting town has
              captured the hearts of so many travelers.
            </p>
          </div>

          <div className="location-detail" id="istanbul">
            <div className="location-img">
              <img src="./images/t2.jpg" alt="" />
            </div>
            <h1>Istanbul</h1>
            <div className="stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>
            <p>
              Istanbul, that offers unique historical and cultural riches
              together has hosted many different civilizations with its
              geography spread over two continents. This unique city which is
              admired by its charming nature and the attractive atmosphere is
              also the symbol of dynamic and modern city life. Istanbul has a
              multicultural texture and a lively atmosphere that melts the past
              and future in a single pot which provides a sense of universal
              history at every step.
            </p>
          </div>

          <div className="location-detail" id="paris">
            <div className="location-img">
              <img src="./images/t3.jpg" alt="" />
            </div>
            <h1>Paris</h1>
            <div className="stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>
            <p>
              Paris is a diverse and sophisticated city that appeals to the
              wealthy but can also be enjoyed on a budget. In addition to the
              Eiffel Tower, Paris has countless other gorgeous landmarks and
              monuments that add to the beauty of the spacious boulevards and
              their charming cafes. French cuisine is also world famous, and you
              can find some of the best of it in Paris. It has many stunning
              sights that showcase impressive architecture and design, and these
              places have become world-famous for their beauty.
            </p>
          </div>

          <div className="location-detail" id="bali">
            <div className="location-img">
              <img src="./images/t4.jpg" alt="" />
            </div>
            <h1>Bali</h1>
            <div className="stars">
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star-half"></i>
            </div>
            <p>
              Bali's beauty goes way deeper than its beautiful appearances.
              Matching Bali's natural wonders are its ever-growing choice of
              awesome accommodations. From lavish resorts to affordable hostels,
              developers go all-out to create outstanding, well-equipped and
              enjoyable places to stay. Private villas can even be rented at
              unbelievably affordable prices. Many resorts and hotels have
              splendid swimming and infinity pools, most of which are
              attractions in themselves.
            </p>
          </div>

          <div className="location-detail" id="dubai">
            <div className="location-img">
              <img src="./images/t5.jpg" alt="" />
            </div>
            <h1>Dubai</h1>
            <div className="stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>
            <p>
              Dubai is an ideal holiday destination for families, with theme
              parks, beaches, Friday brunches and more to keep everyone happy.
              The famous Burj Khalifa, the tallest building in the world, is
              well worth the entrance fee. Burj Al-Arab, often touted as the
              world's only 7-star hotel, remains underwhelming. Similarly, the
              Aquaventure Water Park at the Palms Atlantis Hotel is not to be
              missed. Jumeriah Beach Residence is well established as Dubai's
              most popular beachfront, and its close proximity to a whole host
              of restaurants, cafes and shops make it more than worthy of its
              status.
            </p>
          </div>

          <div className="location-detail" id="geneva">
            <div className="location-img">
              <img src="./images/t6.jpg" alt="" />
            </div>
            <h1>Geneva</h1>
            <div className="stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>
            <p>
              The charming city of Geneva comes with a plethora of attractions
              and tremendous natural beauty that makes every traveler fall in
              love with it. However, because of this overabundance of
              attractions, it becomes difficult for the backpackers to determine
              where to go first. Most of them generally miss out on all the best
              things that this fantastic city has to offer. The capital of
              Switzerland and a beautiful lakeside city, Geneva is home to many
              international organisations like the UN.
            </p>
          </div>

          <div className="location-detail" id="port-blair">
            <div className="location-img">
              <img src="./images/t7.jpg" alt="" />
            </div>
            <h1>Port Blair</h1>
            <div className="stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>
            <p>
              Port Blair is an alluring destination for tourists as it includes
              a host of attractive locales. There are shimmering but clean
              beaches, beaches that defy the ferocity of sea and let tourists
              swim leisurely, relics of colonial power and oppression, many
              must-go museums, libraries, coral reefs, and more.
            </p>
          </div>

          <div className="location-detail" id="rome">
            <div className="location-img">
              <img src="./images/t8.jpg" alt="" />
            </div>
            <h1>Rome</h1>
            <div className="stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>
            <p>
              The capital of one of the most powerful ancient empires in the
              world, Rome is a fascinating place that has inspired people to
              visit for millennia. With incredible works of art, a leisurely
              pace of life and world-renowned cuisine, the Eternal City is worth
              a visit at least once, though it would take a lifetime to see all
              it has to offer.
            </p>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
