import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from backend API
  useEffect(() => {
    axios
      .get('https://snapcart-backend-3sgl.onrender.com/products') // Adjust URL if needed (e.g., add your backend server address)
      .then(response => {
        setProducts(response.data);
        console.log(response.data,"data") // Store data in state
        setLoading(false);
      })
      .catch(err => {
        setError('Error fetching products');
        setLoading(false);
      });
  }, []);

  // Render loading, error, or products
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="products-list">
        <h2>Products</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {Array.isArray(products) && products.length > 0 ? (
        products.map(product => (
          <div key={product._id} style={{ margin: '10px', border: '1px solid #ccc', padding: '10px', width: '200px' }}>
            <img src={product.image} alt={product.name} width="100%" />
            <h4>{product.name}</h4>
            <p>₹{product.price}</p>
          </div>
        ))
      ) : (
        <div>No products found</div>
      )}
    </div>

    </div>
  );
};

export default Products;
