import React from 'react';
import './Hero.css';
import { useNavigate } from 'react-router-dom';
import Electronics from './Electronics';
const Hero = () => {
  const navigate=useNavigate()
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Snapcart</h1>
        <p>Your one-stop shop for Electronics and Clothing</p>
        <button className="shop-now" onClick={() => navigate('/electronics')}> Shop Now</button>
      </div>
    </section>
  );
};

export default Hero;
