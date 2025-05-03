import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { FaShoppingCart, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import AuthContext from './AuthContext'; // Import AuthContext

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext); // Access user and logout function from context
  
  const handleLogout = () => {
    logout();  // Call the logout function when user clicks logout
    navigate('/login');  // Redirect to login page after logout
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="logo" onClick={() => navigate('/')}>Snapcart</span>
      </div>

      <div className="navbar-center">
        <span onClick={() => navigate('/Home')}>Home</span>
        <span onClick={() => navigate('/electronics')}>Electronics</span>
        <span onClick={() => navigate('/clothing')}>Clothing</span>
        <span onClick={() => navigate('/contact')}>Contact</span>
      </div>

      <div className="navbar-right">
        <span onClick={() => navigate('/cart')}><FaShoppingCart /></span>
        {user ? (
          <>
            {/* Show Profile and Logout buttons when user is logged in */}
            <span onClick={() => navigate('/profile')}><FaUserCircle /></span>
            <span onClick={handleLogout}><FaSignOutAlt /></span>
          </>
        ) : (
          <>
            {/* Show Login button when user is not logged in */}
            <span onClick={() => navigate('/login')}>Login</span>
            <span onClick={() => navigate('/signup')}>Signup</span>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
