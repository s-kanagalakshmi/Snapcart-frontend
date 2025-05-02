import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CategoryPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/products/category/${categoryName}`)
      .then(response => setProducts(response.data))
      .catch(err => console.error('Axios error:', err));
  }, [categoryName]);
  const navigate = useNavigate();

  const handleBuyNow = (productId) => {
    navigate(`/product/${productId}`);
  };
  return (
    <div style={{ padding: '20px' }}>
      <h2>{categoryName.toUpperCase()}</h2>
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
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
              onClick={() => handleBuyNow(product._id)}

            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
