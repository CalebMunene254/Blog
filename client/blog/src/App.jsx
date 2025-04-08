import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import your page components
import HomePage from "./src/HomePage";
import SinglePostPage from "./src/SinglePostPage";
import LoginPage from "./src/LoginPage";
import RegisterPage from "./src/RegisterPage";
import Dashboard from "./src/Dashboard";


// Import your component
import Navbar from "./src/Navbar";

function App() {
  return (
    <Router>
      <Navbar /> {/* Include the Navbar component */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/:id" element={<SinglePostPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/navbar" element={<navbar/>} /> 
      </Routes>
    </Router>
  );
}

export default App;