import React, { useState } from 'react';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import '../login.css';
import Head from '../components/head';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Fetching:', '/login');
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        // Handle successful login, e.g., redirect to another page
        console.log('Login successful');
      } else {
        // Handle failed login, show an error message
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };

  return (
    <div>
      <Head />
      <div className="login-background">
        <div className="signup-container">
        
            <NavLink to="/">
              <HiArrowNarrowLeft />
            </NavLink>
            
            
        
          <div className="login-section">
            <div className="form-box login">
              <form onSubmit={handleLogin}>
                <h2>Sign In</h2>
                <div className="input-box">
                  <span className="icon">
                    <i className="bx bxs-envelope"></i>
                  </span>
                  <input
                    type="email"
                    id="log_email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                  <label>Email</label>
                </div>
                <div className="input-box">
                  <span className="icon">
                    <i className="bx bxs-lock-alt"></i>
                  </span>
                  <input
                    type="password"
                    id="log_pass"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                  <label>Password</label>
                </div>
                <div className="remember-password">
                  <label>
                    <input type="checkbox" />
                    Remember Me
                  </label>
                  Forget Password
                </div>
                <div className="create-account">
                  <p>
                    Create A New Account?{' '}
                    <NavLink to="/signup" className="register-link">
                      Sign Up
                    </NavLink>
                  </p>
                </div>
                <button className="btn" type="submit">
                  Log In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
