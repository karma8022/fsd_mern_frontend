// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainApp from "./components/MainApp.js";
import Landing from "./landingpage/Landing.js";
import Login from "./login/Login.js";
import Signup from "./login/Signup.js";
import MainLand from "./login/mainlanding.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/fsd" element={<MainLand />} />
        <Route path="/attendance" element={<MainApp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />{" "}
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </Router>
  );
};

export default App;
