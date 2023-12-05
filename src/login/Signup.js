// Signup.js

import React from "react";
import "./global-styles.css"; // Import the global CSS file
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="login-container">
      <div className="login-header">
        <h1>WMEN</h1>
      </div>
      <div className="login-form">
        <form action="#" method="post">
          <div className="form-group">
            <label htmlFor="username">Email</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            {/* Apply the "login-button" class to the "Continue" button */}
            <Link to="/landing">
              <button type="submit" className="login-button" href="/attendance">
                Continue
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
