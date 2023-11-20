import React, { useState } from 'react';

import { Link, NavLink } from 'react-router-dom';
import '../styles/styles.css';
import '../styles/index.css';
import Rectangle from "../assets/images/Rectangle.png";


const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navigation">
        <div className="nav-image">
          <Link to="/" className='flexCenter title'>
            <img
            src={Rectangle}  // Replace with the path to your image
            alt="Logo"
            className="logo"
            />
          </Link>
        </div>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className= "nav-links">
          <ul className={menuOpen ? "open" : ""}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/events">Events</NavLink>
            <NavLink to="/aboutUs">About Us</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
            <NavLink to="/Terms-Condition">Terms & Conditions</NavLink>
          </ul>
        </div>
    </nav>
  );
};

export default Navigation;