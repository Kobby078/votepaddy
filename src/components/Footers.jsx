import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/styles.css';
import Rectangle from "../assets/images/Rectangle.png";

const Footers = () => {
  return (
    <footer className="footer">
      <div className="red">
        <div className="footer-image">
          <Link to="/" className='title'>
            <img
            src={Rectangle}
            alt="Logo"
            className="logo-foot"
            />
          </Link>
        </div>
        <div className="footer-text">
          <p className="text-main">
            Who We Are:
            VotePaddy is one of the top leading voting 
            companies in Ghana, built on a foundation of integrity, innovation, and inclusivity. 
            Established with a passion for driving positive 
            change, we have earned a reputation as a trusted 
            and reliable partner for conducting various types 
            of elections, polls, surveys, and more. 
          </p>
        </div>
      </div>
      <div className="blue">
        <div className="footer-box1">
          <p className="text-title">
            <p>Contact:</p>
          </p>
          <p className="text-main">
            <p>0500049129</p>
            <p>0500049129</p>
          </p>
        </div>
        <div className="footer-box2">
          <p className="text-title">
            <p>Whatsapp NUmbers:</p>
          </p>
          <p className="text-main">
            <p>0500049129</p>
            <p>0500049129</p>
          </p>
        </div>
        <div className="footer-box3">
          <p className="text-title">
            <p>Email:</p>
          </p>
          <a href="mailto:">contact@votepaddy.com</a>
        </div>
      </div>
      <div className="green">
        <p className="text-title">Quick Links</p>
        <ul className="nav-bottom">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/aboutUs">About Us</NavLink></li>
          <li><NavLink to="/events">Events</NavLink></li>
          <li><NavLink to="/Terms-Condition">Terms</NavLink></li>
        </ul>
      </div>
      <div className="orange">
        <p className="text-title">Offices</p>
        <p className="text-main">
            <p>0500049129</p>
            <p>0500049129</p>
          </p>
      </div>
    </footer>
  );
};

export default Footers;
