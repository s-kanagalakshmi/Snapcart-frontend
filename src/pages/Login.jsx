import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Login = () => {
    const handleLogin = async (e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:5000/api/users/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });
        const data = await res.json();
        if (res.ok) {
          setIsLoggedIn(true);
          navigate('/');
        } else {
          alert(data.error);
        }
      };
      
  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" onClick={handleLogin}>Login</button>
        </form>
        <p className="auth-toggle">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
