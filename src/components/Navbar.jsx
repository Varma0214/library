// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className='home' to="/">Home</Link>
      <Link to="/mylibrary">My Library</Link>
    </nav>
  );
};

export default Navbar;
