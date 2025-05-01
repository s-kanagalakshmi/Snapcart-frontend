import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { FaShoppingCart, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="logo" onClick={() => navigate('/')}>Snapcart</span>
      </div>
      <div className="navbar-center">
        <span onClick={() => navigate('/')}>Home</span>
        <span onClick={() => navigate('/electronics')}>Electronics</span>
        <span onClick={() => navigate('/clothing')}>Clothing</span>
        <span onClick={() => navigate('/contact')}>Contact</span>
        
      </div>
      <div className="navbar-right">
        <span onClick={() => navigate('/cart')}><FaShoppingCart /></span>
        <span onClick={() => navigate('/profile')}><FaUserCircle /></span>
        <span onClick={() => navigate('/logout')}><FaSignOutAlt /></span>
      </div>
    </nav>
  );
};
export default Navbar