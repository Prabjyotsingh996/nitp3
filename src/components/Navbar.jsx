
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/style.css';

const Navbar = ({ toggleDarkMode, darkMode }) => {
  return (
    <div className="navbar">
      <img
        src="images/ku logo.png"
        alt="Logo"
        className="logo"
      />
      <div className="navbar-controls">
       {/* <Link to="/"><button className="nav-button">Home</button></Link>
        <Link to="/signin"><button className="nav-button">Sign In</button></Link>*/}
        <Link to="/signup"><button className="nav-button">Sign Up</button></Link>
        <button
          className="toggle-mode icon-button"
          onClick={toggleDarkMode}
          title="Toggle Dark Mode"
          style={{ cursor: "pointer" }}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
