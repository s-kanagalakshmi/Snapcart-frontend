import React from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';
const Footer = () => {
  const navigate=useNavigate()
  return (
    <footer className="footer">
      <div className="footer-help-banner">
        <div className="help-text">
          <h2>Need Help? Check Out Our Help Center</h2>
          <p>Stuck on something? Don’t worry! Our Help Center is packed with all the info you need to get back on track. From order details to service queries, we’ve got the solutions you’re looking for—just a click away!</p>
          <button onClick={() => navigate('/helpcenter')}> Go to Help Center</button>
        </div>
        <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8" alt="Help Desk" />
      </div>

      <div className="footer-columns">
        <div className="footer-col">
          <h4>Store Location</h4>
          <p>500 New Street<br />Chennai</p>
          <p>info@snapcart.com<br />9999999999</p>
          <div className="social-icons" style={{color:"blue"}}>
            <i className="fa fa-facebook"></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-youtube"></i>
          </div>
        </div>

        <div className="footer-col">
          <h4>Shop</h4>
          <p>Computers</p>
          <p>Audio</p>
          <p>Mobile</p>
          <p>TV & Home Cinema</p>
          <p>Men and Women Clothing</p>
        </div>

        <div className="footer-col">
          <h4>Customer Support</h4>
          <p>Contact Us</p>
          <p>Help Center</p>
          <p>About Us</p>
        </div>

        <div className="footer-col">
          <h4>Policy</h4>
          <p>Shipping & Returns</p>
          <p>Terms & Conditions</p>
          <p>Payment Methods</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
