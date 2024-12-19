import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Made in Yajnas</h1>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/PCBuild">Build PC</a></li>
        <li><a href="/consultant">Consulting</a></li>
        <li><a href="/repair">Repair</a></li>
        <li><a href="/community">Community</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
