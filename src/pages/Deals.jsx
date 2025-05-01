import React from 'react';
import './Deals.css';

const Deals = () => {
  return (
    <section className="deals">
      <div className="deal-card red">
        <div className="text">
          <h4>Holiday Deals</h4>
          <h2>Up to 30% off</h2>
          <p>Selected Smartphone Brands</p>
          <button>Shop</button>
        </div>
        <img src="https://i.imgur.com/2nCt3Sbl.jpg" alt="Smartphone" />
      </div>
      <div className="deal-card purple">
        <div className="text">
          <h4>Just In</h4>
          <h2>Take Your Sound Anywhere</h2>
          <p>Top Headphone Brands</p>
          <button>Shop</button>
        </div>
        <img src="https://i.imgur.com/8Km9tLL.png" alt="Headphones" />
      </div>
    </section>
  );
};

export default Deals;
