import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-help-banner">
        <div className="help-text">
          <h2>Need Help? Check Out Our Help Center</h2>
          <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
          <button>Go to Help Center</button>
        </div>
        <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8" alt="Help Desk" />
      </div>

      <div className="footer-columns">
        <div className="footer-col">
          <h4>Store Location</h4>
          <p>500 Terry Francine Street<br />San Francisco, CA 94158</p>
          <p>info@mysite.com<br />123-456-7890</p>
          <div className="social-icons">
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
