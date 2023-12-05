import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css"; // Import your CSS file

const Landing = () => {
  return (
    <div className="landing-page">
      <header>
        <h1>FSD PROJECT</h1>
        <h1>Student Assistant</h1>
      </header>
      <div className="section-buttons">
        <button className="button button-primary">InfoFLOW</button>
        <Link to="/attendance" className="button button-secondary">
          Attendance Tracker
        </Link>
      </div>
    </div>
  );
};

export default Landing;
