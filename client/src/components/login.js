import React from 'react';
import './login.css';
import logo from '../assets/images/Man sitting at desk and unlocking computer.jpg'


const Login = () => {
  return (
    <div className="login-container">
     <div className="login-image">
        <img
          src={logo}
          alt="Login Image"
          className="login-image-content"
        />
      </div>
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter your username" />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>

          <button type="submit">Login</button>
        </form>

        <p className="signup-link">
          Don't have an account? <a href="#">Create now</a>
        </p>
      </div>

     
    </div>
  );
};

export default Login;

