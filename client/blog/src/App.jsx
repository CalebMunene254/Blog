import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import your components from the components folder
import HomePage from "./components/HomePage";
import SinglePostPage from "./components/SinglePostPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      {/* Navbar is placed here to be visible on all pages */}
      <Navbar isLoggedIn={false} onLogout={() => {}} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/:id" element={<SinglePostPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;