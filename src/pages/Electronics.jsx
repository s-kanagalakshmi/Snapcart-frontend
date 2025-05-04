import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { auth } from '../config';
const Electronics = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://snapcart-backend-3sgl.onrender.com/products')  
      .then(response => {
        setProducts(response.data); 
      })
      .catch(error => {
        console.error('Error fetching products:', error);  
      });
  }, []);  // Empty dependency array means this runs once on component mount
  const addToCart = async (product) => {
    try {
      const user = auth.currentUser;
      if (!user) return navigate('/');
      const token = await user.getIdToken();
  
      const res = await axios.post(
        'https://snapcart-backend-3sgl.onrender.com/cart/save',
        {
          productId: product._id, // ✅ must match schema
          quantity: 1             // optional if default is 1
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
  
      console.log('Product added to cart:', res.data);
    } catch (err) {
      console.error('Cart save error:', err);
    }
  };
  
  
  return (
    <div style={{ padding: '20px' }}>
      <h2>Electronics</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map(product => (
          <div
            key={product._id}
            style={{
              margin: '10px',
              border: '1px solid #e0e0e0',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              padding: '15px',
              width: '250px',
              transition: 'transform 0.2s',
              backgroundColor: '#fff',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '8px'
              }}
            />
            <h4 style={{ marginTop: '10px', fontSize: '1.1rem' }}>{product.name}</h4>
            <p style={{
              color: '#888',
              fontSize: '0.9rem',
              height: '40px',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>
              {product.description}
            </p>
            <p style={{ margin: '5px 0', fontWeight: 'bold', fontSize: '1rem' }}>
              ₹{product.price}
            </p>
            <p style={{ fontSize: '0.9rem', color: '#f39c12' }}>
              ⭐ {product.rating || 4.5} / 5
            </p>
            <button
              style={{
                marginTop: '10px',
                backgroundColor: '#2196f3',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
              onClick={() => addToCart(product)}

            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Electronics;
