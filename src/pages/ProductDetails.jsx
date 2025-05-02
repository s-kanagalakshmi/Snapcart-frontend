import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [user, setUser] = useState({
    _id: 'YOUR_USER_ID', // Replace this with actual user data or use context
    name: 'Test User',
    email: 'test@example.com',
    phone: '9999999999'
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/products/${productId}`)
      .then(response => setProduct(response.data))
      .catch(err => console.error(err));
  }, [productId]);

  const loadRazorpay = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleCheckout = async () => {
    const res = await loadRazorpay('https://checkout.razorpay.com/v1/checkout.js');
    if (!res) {
      alert('Razorpay SDK failed to load.');
      return;
    }

    try {
      const { data: order } = await axios.post('http://localhost:5000/api/payment/create-order', {
        totalPrice: product.price
      });

      const options = {
        key: 'YOUR_KEY_ID', // Replace with your Razorpay key
        amount: order.amount,
        currency: order.currency,
        name: 'Snapcart',
        description: product.name,
        image: product.image,
        order_id: order.id,
        handler: async function (response) {
          const verifyRes = await axios.post('http://localhost:5000/api/payment/verify', {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            userId: user._id,
            orderItems: [{
              product: product._id,
              quantity: 1
            }],
            totalPrice: product.price
          });

          if (verifyRes.data.success) {
            alert("✅ Payment successful and order saved!");
          } else {
            alert("❌ Payment verification failed.");
          }
        },
        prefill: {
          name: user.name,
          email: user.email,
          contact: user.phone
        },
        theme: {
          color: '#f39c12'
        }
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error('Checkout error:', error);
    }
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '12px' }} />
      <h2 style={{ margin: '10px 0' }}>{product.name}</h2>
      <p style={{ fontSize: '1.1rem', color: '#555' }}>{product.description}</p>
      <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>₹{product.price}</p>
      <button
        onClick={handleCheckout}
        style={{
          backgroundColor: '#f39c12',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '8px',
          cursor: 'pointer',
          marginTop: '10px'
        }}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default ProductDetails;
