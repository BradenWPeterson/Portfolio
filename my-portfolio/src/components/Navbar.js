// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="nav">
            <h1>Braden Peterson</h1>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="social-links">
                <a href="https://www.instagram.com/braden.peterson__/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://x.com/bradenwpeterson" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                </a>
                <a href="https://www.linkedin.com/in/bradenwpeterson/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;