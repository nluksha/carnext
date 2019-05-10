import React from 'react';
import { Field, reduxForm } from 'redux-form';

import getChecksumMod11 from '../../../../services/getChecksumMod11';
import FieldComponent from '../Field';
import CheckBox from '../CheckBox';
import Button from '../Button';
import './styles.css';

const required = value => (value || typeof value === 'number' ? undefined : 'Required');
const minLength = min => value => (value && value.length < min ? `Must be ${min} characters or more` : undefined);
const minLength2 = minLength(2);
const fixedLength = length => value => (value && value.length !== length ? `Must be ${length} characters` : undefined);
const fixedLength9 = fixedLength(9);
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;
const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value) ? 'Invalid phone number, must be 10 digits' : undefined;
// eslint-disable-next-line no-restricted-globals
const number = value => (value && isNaN(Number(value)) ? 'Must be a number' : undefined);
const checksumMod11 = value => (value && getChecksumMod11([...value]) !== 0 ? 'Invalid code' : undefined);

const LoginFormView = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div className="name-fields">
      <Field
        name="username"
        type="text"
        component={FieldComponent}
        label="First name"
        placeholder="Enter first name"
        validate={[required, minLength2]}
      />
      <Field
        name="surname"
        type="text"
        component={FieldComponent}
        label="Surname"
        placeholder="Enter surname"
        validate={[required, minLength2]}
      />
    </div>
    <Field
      name="email"
      type="email"
      component={FieldComponent}
      label="Email"
      placeholder="Enter your email address"
      validate={[required, email]}
    />
    <Field
      name="phone"
      type="text"
      component={FieldComponent}
      label="Phone number"
      placeholder="Enter phone number"
      validate={[required, phoneNumber]}
    />
    <Field
      name="code"
      type="text"
      component={FieldComponent}
      label="Voucher code"
      placeholder="Enter voucher code"
      validate={[required, number, fixedLength9, checksumMod11]}
    />
    <Field
      name="settlement"
      type="checkbox"
      component={CheckBox}
      label="Accept Privacy Settlement"
      placeholder="Enter voucher code"
      validate={required}
    />
    <Button text="Get offer" type="submit" />
  </form>
);

export default reduxForm({
  form: 'loginForm'
})(LoginFormView);
