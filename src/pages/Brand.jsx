// client/src/components/Brands.jsx
import React from 'react';
import './Brand.css';

const brandLogos = ['ZODIAC', 'Lenova', 'Apple', 'Louis Vuitton', 'Boat'];

const Brand = () => {
  return (
    <section className="brands">
      <h2>Brands</h2>
      <div className="brand-logos">
        {brandLogos.map((brand, index) => (
          <div key={index} className="brand-card">{brand}</div>
        ))}
      </div>
    </section>
  );
};

export default Brand;
