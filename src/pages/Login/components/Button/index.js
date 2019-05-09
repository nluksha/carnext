import React from 'react';

import './styles.css';

const Button = ({ text, onClick }) => (
  <button className="form-button" onClick={onClick}>
    {text}
  </button>
);

export default Button;
