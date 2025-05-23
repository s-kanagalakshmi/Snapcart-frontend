const placeOrder = async () => {
    const orderData = {
      userId: 'USER_ID_HERE',
      orderItems: cartItems, // should be an array with product and quantity
      totalPrice: calculateTotal(cartItems),
    };
  
    const res = await fetch('https://snapcart-backend-3sgl.onrender.com/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData),
    });
  
    const data = await res.json();
    if (res.ok) {
      alert('Order placed successfully');
    } else {
      alert(data.error);
    }
  };
  