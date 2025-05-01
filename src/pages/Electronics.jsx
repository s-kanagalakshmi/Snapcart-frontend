import React, { useEffect, useState } from 'react';

const Electronics = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Electronics</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(product => (
          <div key={product._id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', width: '200px' }}>
            <h4>{product.name}</h4>
            <img src={product.image} alt={product.name} width="100%" />
            <p>₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Electronics;
