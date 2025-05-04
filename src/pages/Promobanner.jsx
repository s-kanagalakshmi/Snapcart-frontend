import React from 'react';
import './PromoBanner.css';
import { Navigate, useNavigate } from 'react-router-dom';
const PromoBanner = () => {
  const navigate=useNavigate()
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
        <button onClick={() => navigate('/electronics')}> Shop</button>
        </div>
    </section>
  );
};

export default PromoBanner;
