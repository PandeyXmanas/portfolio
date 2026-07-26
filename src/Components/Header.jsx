import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import profilePic from '../assets/profile.jpeg'; 
import ThemeToggle from './ThemeToggle'; // Import the toggle

function Header() {
  return (
    <header className="header">
      {/* Positioned the toggle at the top right of the header */}
      <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
        <ThemeToggle />
      </div>

      <img src={profilePic} alt="Manas Pandey" className="profile-img" />
      <h1>Manas Pandey</h1>
      <p>Full-Stack & AI Enthusiast</p>
      
      {/* Navigation Menu */}
      <nav className="nav-menu">
        <Link to="/">About</Link>
        <Link to="/education">Education</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;