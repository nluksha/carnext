import React from 'react';

import './styles.css';

const Button = ({ text, type, onClick }) => (
  <button className="form-button" type={type} onClick={onClick}>
    {text}
  </button>
);

export default Button;
