import React from 'react';

import './styles.css';

const CheckBox = ({ name, label, value, onChange, message, isError }) => (
  <div className={`checkbox ${isError ? 'checkbox_error' : ''}`}>
    <input className="checkbox__input" id={name} type="checkbox" checked={value} onChange={onChange} />
    <label className="checkbox__label" htmlFor={name}>
      {label}
    </label>
    {isError && <span className="checkbox__message">{message}</span>}
  </div>
);

export default CheckBox;
