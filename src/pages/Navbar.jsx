import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { FaShoppingCart, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import AuthContext from './AuthContext';
import axios from 'axios';
// import img from ".images/logo.jpg"
const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      if (user) {
        try {
          const res = await axios.get(`https://snapcart-backend-3sgl.onrender.com/orders/${user.uid}`);
          setOrders(res.data); // Axios returns data in res.data
          console.log(res.data)
        } catch (err) {
          console.error('Error fetching orders:', err);
        }
      }
    };
  
    fetchOrders();
  }, [user]);

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="logo" onClick={() => navigate('/home')}><img className='logoimg' src="/images/logo2.jpg" alt="Logo" />
        Snapcart</span>
      </div>

      <div className="navbar-center">
        <span onClick={() => navigate('/Home')}>Home</span>
        <span onClick={() => navigate('/electronics')}>Products</span>
        <span onClick={() => navigate('/contact')}>Contact</span>
      </div>

      <div className="navbar-right">
        <span onClick={() => navigate('/cart')}><FaShoppingCart /></span>
        {user ? (
          <div className="profile-container">
            <span onClick={() => setShowDropdown(!showDropdown)}><FaUserCircle /></span>
            <span onClick={handleLogout}><FaSignOutAlt /></span>
            {showDropdown && (
              <div className="profile-dropdown">
                <p><strong>{user.email}</strong></p>
                <p>🛍 <strong>Bought Items:</strong></p>
                {orders.length > 0 ? (
                  <ul>
                    {orders.map((order, i) => (
                      <li key={i} style={{ marginBottom: '10px' }}>
                        <div><strong>Order #{i + 1}</strong></div>
                        <div>Total: ₹{order.totalPrice}</div>
                        <div>Paid: {order.isPaid ? 'Yes' : 'No'}</div>
                        {order.paidAt && <div>Paid At: {new Date(order.paidAt).toLocaleString()}</div>}
                        <ul>
                          {order.orderItems.map((item, idx) => (
                            <li key={idx}>
                              {item.name} — {item.qty} x ₹{item.price} = ₹{item.qty * item.price}
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No items yet</p>
                )}
              </div>
            )}
          </div>
        ) : (
          <>
            <span onClick={() => navigate('/login')}>Login</span>
            <span onClick={() => navigate('/signup')}>Signup</span>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
