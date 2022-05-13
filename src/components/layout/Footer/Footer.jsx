import React from 'react';
import './Footer.scss';

function Footer() {
  const currYear = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright &copy; {currYear} All rights reserved</p>
    </footer>
  );
}

export default Footer;
