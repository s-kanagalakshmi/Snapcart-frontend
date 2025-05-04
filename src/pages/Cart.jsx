import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { auth } from '../config';
import { useParams } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const token = await user.getIdToken();
          const res = await axios.get('https://snapcart-backend-3sgl.onrender.com/cart', {
            headers: { Authorization: `Bearer ${token}` }
          });
          setCartItems(res.data);
          calculateTotal(res.data);
        } catch (err) {
          console.error('Failed to load cart', err);
        }
      } else {
        console.log('No user logged in');
      }
    });

    return () => unsubscribe();
  }, []);

  const calculateTotal = (items) => {
    const total = items.reduce((acc, item) => acc + item.productId.price * item.quantity, 0);
    setTotalAmount(total);
  };

  const handleRemove = async (productId) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const token = await user.getIdToken();
          const res = await axios.post(
            'https://snapcart-backend-3sgl.onrender.com/cart/remove',
            { productId },
            { headers: { Authorization: `Bearer ${token}` } }
          );
          setCartItems(res.data.cart);
          calculateTotal(res.data.cart);
        } catch (err) {
          console.error('Failed to remove item', err);
        }
      } else {
        console.log('No user logged in');
        navigate('/'); // optional: redirect to login
      }
    });
  };
  const loadRazorpay = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleBuyNow = async () => {
    const sdkLoaded = await loadRazorpay("https://checkout.razorpay.com/v1/checkout.js");
    if (!sdkLoaded) {
      alert("Failed to load Razorpay");
      return;
    }
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const token = await user.getIdToken();
          console.log(token)
          const res = await axios.post(
            'https://snapcart-backend-3sgl.onrender.com/payment/checkout',
            { amount: totalAmount * 100 },
            { headers: { Authorization: `Bearer ${token}` } }
          );

          const { id, amount } = res.data;

          console.log(res, "ers")
          console.log(cartItems)
          const orderItems = cartItems.map(item => ({
            product: item._id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
          }));

          const options = {
            key: 'rzp_test_nQFgORQudhpB3r',
            amount: amount * 100,
            currency: 'INR',
            name: 'Snapcart',
            description: 'Purchase Electronics',
            // image:cartItems.image,
            order_id: id,
            handler: async function (response) {
              const verifyRes = await axios.post(
                'https://snapcart-backend-3sgl.onrender.com/payment/verify-cart',
                {
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                  orderItems,
                  totalPrice: totalAmount
                },
                { headers: { Authorization: `Bearer ${token}` } }
              );
              console.log(verifyRes, "verify")

              if (verifyRes.data.success) {
                alert('Payment Successful ✅');
                setCartItems([]);
              } else {
                alert('Payment verification failed ❌');
              }
            },
            theme: { color: '#3399cc' }
          };

          const rzp = new window.Razorpay(options);
          rzp.open();
        } catch (error) {
          console.error('Error in payment:', error);
        }
      } else {
        console.log('No user logged in');
        navigate('/');
      }
    });
  };


  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Cart 🛒</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div>
            {cartItems.map((item) => (
              <div
                key={item.productId._id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px',
                  border: '1px solid #ccc',
                  marginBottom: '10px',
                  borderRadius: '8px'
                }}
              >
                <img src={item.productId.image} alt={item.productId.name} width="80" />
                <div style={{ flex: 1, marginLeft: '10px' }}>
                  <h4>{item.productId.name}</h4>
                  <p>₹{item.productId.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <button
                  onClick={() => handleRemove(item.productId._id)}
                  style={{
                    background: 'crimson',
                    color: 'white',
                    border: 'none',
                    padding: '6px 12px',
                    borderRadius: '5px',
                    cursor: 'pointer'
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <h3>Total: ₹{totalAmount}</h3>
          <button
            onClick={handleBuyNow}
            style={{
              background: 'green',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '6px',
              border: 'none',
              fontSize: '1rem',
              cursor: 'pointer'
            }}
          >
            Buy Now
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
