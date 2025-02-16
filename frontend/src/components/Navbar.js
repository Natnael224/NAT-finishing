import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">.</div>
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/testimonials">Testimonials</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
    </ul>
  </nav>
);

export default Navbar;
