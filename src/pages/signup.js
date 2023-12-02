import React from 'react';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import './login.css';

function Signup() {
  return (
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
                  required
                  onchange="reverse()"
                />
                <label>Email</label>
              </div>
              <div class="input-box">
                <span class="icon">
                  <i class="bx bxs-lock-alt"></i>
                </span>
                <input type="password" id="log_pass" required />
                <label>Password</label>
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
                  Create A New Account?{' '}
                  <NavLink to="/signup" class="register-link">
                    Sign Up
                  </NavLink>
                </p>
              </div>
              <button class="btn" id="login" type="submit" onclick="redirect()">
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
