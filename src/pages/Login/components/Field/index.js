import React from 'react';

import './styles.css';

const Field = ({ placeholder, input, label, type, meta: { touched, error } }) => {
  const isError = touched && error;

  return (
    <div className={`field ${isError ? 'field_error' : ''}`}>
      <label className="field__label" htmlFor={input.name}>
        {label}
      </label>
      <input className="field__input" id={input.name} placeholder={placeholder} {...input} type={type} />
      {isError && <span className="field__message">{error}</span>}
    </div>
  );
};

export default Field;
