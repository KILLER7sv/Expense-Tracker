import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";

const LandingPage = () => {
  const [view, setView] = useState("login"); // 'login' or 'register'
  const { isLoggedIn, user, logout } = useAuth();

  const switchView = () => {
    setView(view === "login" ? "register" : "login");
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Welcome to the Expense Tracker</h1>
        <Link to="/login">
        <button style={{ margin: '10px' }}>Login</button>
        </Link>
        <Link to="/register">
        <button style={{ margin: '10px' }}>Register</button>
        </Link>
    </div>
  );
};

export default LandingPage;
