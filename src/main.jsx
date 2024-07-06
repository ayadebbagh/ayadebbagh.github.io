import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navBar.jsx";
import Homepage from "./pages/Homepage.jsx";
import ResourceLibrary from "./pages/ResourceLibrary.jsx";
import Discover from "./pages/Discover.jsx";
import Community from "./pages/Community.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/resource-library" element={<ResourceLibrary />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
