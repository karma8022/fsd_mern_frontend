// Login.js

import React from "react";
import "./global-styles.css"; // Import the global CSS file
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-header">
        <h1>WMEN</h1>
      </div>
      <div className="login-form">
        <form action="#" method="post">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            <Link to="/landing">
              <button type="submit" className="login-button">
                Login
              </button>
            </Link>
          </div>
        </form>
        <div className="form-group">
          <a href="fsd" className="back-link">
            Back
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
