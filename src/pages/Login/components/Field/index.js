import React from 'react';

import './styles.css';

const Field = ({ name, label, placeholder, value, onChange, message, isError }) => (
  <div className={`field ${isError ? 'field_error' : ''}`}>
    <label className="field__label" htmlFor={name}>
      {label}
    </label>
    <input className="field__input" type="text" id={name} placeholder={placeholder} value={value} onChange={onChange} />
    {isError && <span className="field__message">{message}</span>}
  </div>
);

export default Field;
