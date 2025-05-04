import React from 'react';
import './Helpcenter.css'; // Add styles for this page

const HelpCenter = () => {
  return (
    <div className="help-center">
      <h1>Need Help? We're Here for You!</h1>
      
      {/* Section 1: Editing Billing & Shipping Address */}
      <div className="help-section">
        <h2>1) Where can I edit my billing and shipping address?</h2>
        <p>
          If you created a new account after or while ordering, you can edit both addresses (for billing and shipping) in your customer account.
        </p>
        <button className="help-btn" onClick={() => alert("Redirecting to your account settings...")}>
          Go to Account Settings
        </button>
      </div>

      {/* Section 2: Orders via Phone or E-mail */}
      <div className="help-section">
        <h2>2) Do you accept orders via Phone or E-mail?</h2>
        <p>
          No, we do not take orders via Phone, E-mail, or Social Media. Please place your orders on our online shop, which is available 24/7.
        </p>
        <button className="help-btn" onClick={() => alert("Redirecting to shop...")}>
          Visit Online Shop
        </button>
      </div>
    </div>
  );
};

export default HelpCenter;
