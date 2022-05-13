import React from 'react';
import './Navbar.scss';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar-container">
      <Link to="/" className="logo">
        <FaGithub />
        <strong>Github Finder</strong>
      </Link>
      <ul className="navbar">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
