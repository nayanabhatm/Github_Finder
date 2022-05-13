import React from 'react';
import Button from '../../components/button/Button';
import './NotFound.scss';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

function NotFound() {
  return (
    <div className="notfound-container">
      <h1>Oops!</h1>
      <p>404 - Page not found!</p>
      <Link to="/">
        <Button />
      </Link>
    </div>
  );
}

export default NotFound;
