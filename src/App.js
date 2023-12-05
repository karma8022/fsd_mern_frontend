// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainApp from "./components/MainApp.js";
import Landing from "./landingpage/Landing.js";
import Login from "./login/Login.js"; // Import the Login component
import Signup from "./login/Signup.js"; // Import the Signup component
import MainLand from "./login/mainlanding.js"; // Import the Signup component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/attendance" element={<MainApp />} />
        <Route path="/login" element={<Login />} /> {/* Add the Login route */}
        <Route path="/signup" element={<Signup />} />{" "}
        {/* Add the Signup route */}
        <Route path="/landing" element={<Landing />} />
        <Route path="/fsd" element={<MainLand />} />
      </Routes>
    </Router>
  );
};

export default App;
