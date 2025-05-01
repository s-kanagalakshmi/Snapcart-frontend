import React from 'react';
import './Categories.css';

const categories = [
  { name: 'Tv', img: '/src/assets/tv.jpeg', path: '/category/computers' },
  { name: 'Laptop', img: '/src/assets/laptop.png', path: '/category/pc' },
  { name: 'Mobiles', img: '/src/assets/mobile.jpeg', path: '/category/mobiles' },
  { name: 'Headphones', img: '/src/assets/headphone.png', path: '/category/headphones' },
  { name: 'Dress', img: '/src/assets/cloth.png', path: '/category/dress' },
];

const Categories = () => {
  return (
    <section className="categories">
      <h2>Shop by Category</h2>
      <div className="category-list">
        {categories.map((cat, index) => (
          <div key={index} className="category-item" onClick={() => window.location.href = cat.path}>
            <img src={cat.img} alt={cat.name} />
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
