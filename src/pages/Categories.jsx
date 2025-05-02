import React from 'react';
import './Categories.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const categories = [
  { name: 'Tv', img: '/images/tv.jpeg', path: '/category/tv' },
  { name: 'Laptop', img: '/images/laptop.png', path: '/category/laptop' },
  { name: 'Mobiles', img: '/images/mobile.jpeg', path: '/category/mobile' },
  { name: 'Headphones', img: '/images/headphone.png', path: '/category/headphone' },
  { name: 'Dress', img: '/images/cloth.png', path: '/category/clothing' },
];

const Categories = () => {
  const navigate = useNavigate();
  
  return (
    <section className="categories">
      <h2>Shop by Category</h2>
      <div className="category-list">
        {categories.map((cat, index) => (
          <div key={index} className="category-item" onClick={() => navigate(cat.path)} >
            <img src={cat.img} alt={cat.name} />
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
