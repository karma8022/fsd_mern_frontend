// Landing.js

import React from "react";
import "./global-styles.css"; // Import the global CSS file

const Landing = () => {
  return (
    <div className="container">
      <form>
        <div className="login-header">
          <h1>WMEN</h1>
        </div>
        <div className="form-group">
          <a href="login">
            <input type="button" value="Login" />
          </a>
          <a href="signup">
            <input type="button" value="Register" />
          </a>
        </div>
      </form>
    </div>
  );
};

export default Landing;
