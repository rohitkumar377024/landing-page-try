import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav className="nav-bar">
        <div className="nav-logo">Rohit Kumar</div>
        <ul className="nav-items">
          <li className="nav-item">
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/skills">
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/about">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/contact">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
