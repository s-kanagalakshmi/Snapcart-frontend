import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Make sure to create this CSS file for styling

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const sendUserToBackend = async (user) => {
    const token = await auth.currentUser.getIdToken();
    console.log(user,"checking")
    try {
      const res = await axios.post(
        'http://localhost:5000/users/firebase-login',
        {
          // uid: user.uid,
          // email: user.email,
          // name: user.displayName || '',

        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('User saved in MongoDB:', res.data.user);
    } catch (error) {
      console.error('Failed to save user to backend:', error.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      // alert("Login successful ✅");
      await sendUserToBackend(userCred.user); 

      navigate("/Home");
    } catch (error) {
      alert("Login error ❌");
    }
  };
  const goToSignup = () => {
    navigate('/signup');  // Navigate to signup page
  };
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit" className="login-button">Login</button>
      <p>New User? 
        <span style={{ color: 'blue', cursor: 'pointer' }} onClick={goToSignup}>
          Sign Up
        </span></p>
        </form>
        
      </div>
    
    </div>
  );
};

export default Login;
