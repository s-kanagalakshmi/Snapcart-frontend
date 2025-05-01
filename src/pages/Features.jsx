import React from 'react';
import './Features.css';
import { FaTruckPickup, FaShippingFast, FaTags, FaClock } from 'react-icons/fa';

const Features = () => {
  return (
    <section className="features">
      <div className="feature"><FaTruckPickup /><p>Curb-side pickup</p></div>
      <div className="feature"><FaShippingFast /><p>Free shipping on orders over $50</p></div>
      <div className="feature"><FaTags /><p>Low prices guaranteed</p></div>
      <div className="feature"><FaClock /><p>Available to you 24/7</p></div>
    </section>
  );
};
export default Features