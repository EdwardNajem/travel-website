import axios from 'axios';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { NavLink, useNavigate } from 'react-router-dom';
import Head from '../components/head';
import '../login.css';

function Signup({
  Email,
  Password,
  CPassword,
  setEmail,
  setPass,
  setCPass,
  isLoggedin,
}) {
  const navigate = useNavigate();
  const [emailValidationMessage, setEmailValidationMessage] = useState('');
  const [passwordValidationMessage, setPasswordValidationMessage] =
    useState('');

  const handleR = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let isValid = true;

    if (!emailRegex.test(Email)) {
      setEmailValidationMessage('Invalid email format');
      isValid = false;
    } else {
      setEmailValidationMessage('');
    }

    if (!passwordRegex.test(Password)) {
      setPasswordValidationMessage(
        'Password must contain at least 8 characters, including one lowercase letter, one uppercase letter, one number, and one special character'
      );
      isValid = false;
    } else if (Password !== CPassword) {
      setPasswordValidationMessage('Passwords do not match');
      isValid = false;
    } else {
      setPasswordValidationMessage('');
    }

    if (isValid) {
      axios.post('http://localhost:3001/api/insertUser', {
        mail: Email,
        pass: Password,
      });
      alert('Success!');
      setEmail('');
      setPass('');
      setCPass('');
      navigate('/login');
    }
  };

  return (
    <div>
      <Head />
      <div className="login-background">
        <div className="signup-container">
          <div className="login-section">
            <NavLink to="/">
              <HiArrowNarrowLeft />
            </NavLink>
            <div className="form-box login">
              <form>
                <h2>Sign Up</h2>
                <div className="input-box">
                  <span className="icon">
                    <i className="bx bxs-envelope"></i>
                  </span>
                  <input
                    type="email"
                    id="log_email"
                    value={Email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailValidationMessage('');
                    }}
                    required
                  />
                  <label>Email</label>
                  {emailValidationMessage && (
                    <p className="validation-message">
                      {emailValidationMessage}
                    </p>
                  )}
                </div>
                <div className="input-box">
                  <span className="icon">
                    <i className="bx bxs-lock-alt"></i>
                  </span>
                  <input
                    type="password"
                    id="log_pass"
                    required
                    value={Password}
                    onChange={(e) => {
                      setPass(e.target.value);
                      setPasswordValidationMessage('');
                    }}
                  />
                  <label>Password</label>
                </div>
                <div className="input-box">
                  <span className="icon">
                    <i className="bx bxs-lock-alt"></i>
                  </span>
                  <input
                    type="password"
                    id="log_pass"
                    required
                    value={CPassword}
                    onChange={(e) => {
                      setCPass(e.target.value);
                      setPasswordValidationMessage('');
                    }}
                  />
                  <label>Re-enter Password</label>
                  {passwordValidationMessage && (
                    <p className="validation-message">
                      {passwordValidationMessage}
                    </p>
                  )}
                </div>
                <div className="remember-password">
                  <label for="">
                    <input type="checkbox" />
                    Remember Me
                  </label>
                  Forget Password
                </div>
                <div className="create-account">
                  <p>
                    Already have an Account?{' '}
                    <NavLink to="/login" className="register-link">
                      Sign in
                    </NavLink>
                  </p>
                </div>
                <Button
                  className="btn"
                  id="login"
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    handleR();
                  }}
                >
                  Sign Up
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
