import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config';
import { useNavigate } from 'react-router-dom';
import './Signup.css';  // You can add custom styles for the signup page
import { signOut } from 'firebase/auth';
const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      await signOut(auth);


      alert("Signup successful ✅");
      navigate("/");  

      console.log(userCred.user);
    } catch (error) {
      alert("Signup error ❌");
      console.error(error.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="input-group">
            <input 
              type="email" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              placeholder="Enter your email" 
              required 
            />
          </div>
          <div className="input-group">
            <input 
              type="password" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              placeholder="Enter your password" 
              required 
            />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <p className="login-link">
          Already have an account? 
          <span onClick={() => navigate('/')} className="link">Log In</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
