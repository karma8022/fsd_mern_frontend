import React from "react";
import "./Landing.css"; // Import your CSS file

const Landing = () => {
  return (
    <div className="landing-page">
      <header>
        <h1>FSD PROJECT</h1>
        <h1>Student Assistant</h1>
      </header>
      <div className="section-buttons">
        <button className="button button-primary">
          <a href="http://localhost:3000/">InfoFLOW</a>
        </button>
        <button className="button button-secondary">
          <a href="https://mern-attendance-client.vercel.app/">
            Attendance Tracker
          </a>
        </button>
      </div>
    </div>
  );
};

export default Landing;
