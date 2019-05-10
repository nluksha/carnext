import React from 'react';

import './styles.css';

const CheckBox = ({ input, label, type, meta: { touched, error } }) => (
  <div className={`checkbox ${error && touched ? 'checkbox_error' : ''}`}>
    <input className="checkbox__input" id={input.name} {...input} type={type} />
    <label className="checkbox__label" htmlFor={input.name}>
      {label}
    </label>
    {error && touched && <span className="checkbox__message">{error}</span>}
  </div>
);

export default CheckBox;
