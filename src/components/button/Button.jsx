import React from 'react';
import './Button.scss';

function Button({ text }) {
  return <button>{text}</button>;
}

Button.defaultProps = {
  text: 'Back to Home',
};

export default Button;
