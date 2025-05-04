// src/pages/ProductDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { auth } from '../config'; // your Firebase config file
import axios from 'axios';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://snapcart-backend-3sgl.onrender.com/products/${productId}`)
      .then(res => setProduct(res.data))
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
    const user = auth.currentUser;
    if (!user) {
      alert("Please login to proceed.");
      return;
    }

    const token = await user.getIdToken(); // 🔐 Get Firebase Auth token

    const sdkLoaded = await loadRazorpay("https://checkout.razorpay.com/v1/checkout.js");
    if (!sdkLoaded) {
      alert("Failed to load Razorpay");
      return;
    }

    try {
      const { data: order } = await axios.post(
        'https://snapcart-backend-3sgl.onrender.com/payment/create-order',
        { totalPrice: product.price },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const options = {
        key: 'rzp_test_nQFgORQudhpB3r',
        amount: order.amount,
        currency: order.currency,
        name: 'Snapcart',
        description: product.name,
        image: product.image,
        order_id: order.id,
        handler: async function (response) {
          const verifyRes = await axios.post(
            'https://snapcart-backend-3sgl.onrender.com/payment/verify',
            {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              orderItems: [{
                product: product._id,
                name: product.name,
                price: product.price,
                qty: 1
              }],              totalPrice: product.price
            },
            { headers: { Authorization: `Bearer ${token}` } }
          );

          if (verifyRes.data.success) {
            alert("✅ Payment successful and order saved!");
          } else {
            alert("❌ Payment verification failed.");
          }
        },
        prefill: {
          name: user.displayName || "Firebase User",
          email: user.email,
          contact: "9999999999"
        },
        theme: {
          color: "#f39c12"
        }
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (err) {
      console.error("Checkout error:", err);
    }
  };

  if (!product) return <p>Loading product...</p>;

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '12px' }} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p style={{ fontWeight: 'bold' }}>₹{product.price}</p>
      <button onClick={handleCheckout} style={{ marginTop: '10px', backgroundColor: '#f39c12', color: '#fff', padding: '10px 20px', borderRadius: '8px' }}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default ProductDetails;
