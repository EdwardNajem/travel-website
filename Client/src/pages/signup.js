import axios from 'axios';
import React from 'react';
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
  const handleR = () => {
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Password validation regex
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (
      emailRegex.test(Email) &&
      passwordRegex.test(Password) &&
      Password === CPassword
    ) {
      axios.post('http://localhost:3001/api/insertUser', {
        mail: Email,
        pass: Password,
      });
      alert('Success!');
      navigate('/login');
    } else {
      alert('Please fill in all the required fields correctly.');
    }
  };

  return (
    <div>
      <Head />
      <div class="login-background">
        <div class="signup-container">
          <div class="login-section">
            <NavLink to="/">
              <HiArrowNarrowLeft />
            </NavLink>
            <div class="form-box login">
              <form>
                <h2>Sign Up</h2>
                <div class="input-box">
                  <span class="icon">
                    <i class="bx bxs-envelope"></i>
                  </span>
                  <input
                    type="email"
                    id="log_email"
                    value={Email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                  />
                  <label>Email</label>
                </div>
                <div class="input-box">
                  <span class="icon">
                    <i class="bx bxs-lock-alt"></i>
                  </span>
                  <input
                    type="password"
                    id="log_pass"
                    required
                    value={Password}
                    onChange={(e) => {
                      setPass(e.target.value);
                    }}
                  />
                  <label>Password</label>
                </div>
                <div class="input-box">
                  <span class="icon">
                    <i class="bx bxs-lock-alt"></i>
                  </span>
                  <input
                    type="password"
                    id="log_pass"
                    required
                    value={CPassword}
                    onChange={(e) => {
                      setCPass(e.target.value);
                    }}
                  />
                  <label>Re-enter Password</label>
                </div>
                <div class="remember-password">
                  <label for="">
                    <input type="checkbox" />
                    Remember Me
                  </label>
                  Forget Password
                </div>
                <div class="create-account">
                  <p>
                    Already have an Account?{' '}
                    <NavLink to="/login" class="register-link">
                      SIgn in
                    </NavLink>
                  </p>
                </div>
                <button
                  class="btn"
                  id="login"
                  type="submit"
                  onClick={() => {
                    handleR();
                  }}
                >
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

export default Signup;
