import React from 'react';
import { Button } from 'react-bootstrap';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { NavLink, useNavigate } from 'react-router-dom';
import Head from '../components/head';
import '../login.css';

function Login({
  Email,
  Password,
  setEmail,
  setPass,
  usersData,
  setIsLoggedin,
}) {
  const navigate = useNavigate();
  console.log(usersData);

  function loginhandle() {
    const user = usersData.find(
      (item) => item.email === Email && item.password === Password
    );

    if (user) {
      setIsLoggedin(true);
      navigate('/');
    } else {
      alert('Invalid email or password');
    }
  }

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
              <form>
                <h2>Sign In</h2>
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
                    }}
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
                    value={Password}
                    onChange={(e) => {
                      setPass(e.target.value);
                    }}
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
                <Button className="btn" type="submit" onClick={loginhandle}>
                  Log In
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
