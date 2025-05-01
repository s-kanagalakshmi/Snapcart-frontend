import React from 'react';
import './PromoBanner.css';

const PromoBanner = () => {
  return (
    <section className="promo-banner">
      <div className="promo-image">
        <img
          src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8" 
          alt="Tablet Offer"
        />
      </div>
      <div className="promo-details">
        <div className="badge">Best Price</div>
        <h2>Save up to <span>$150</span></h2>
        <p>on selected laptop & tablets brands</p>
        <small>Terms and conditions apply</small>
        <button>Shop</button>
      </div>
    </section>
  );
};

export default PromoBanner;
