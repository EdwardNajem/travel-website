import React from 'react';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import '../login.css';
import Head from '../components/head';
function Signup() {
  return (
    <div><Head/>
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
              <div class="input-box">
                <span class="icon">
                  <i class="bx bxs-lock-alt"></i>
                </span>
                <input type="password" id="log_pass" required />
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
              <button class="btn" id="login" type="submit" onclick="redirect()">
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