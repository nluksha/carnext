import React from 'react';

import Field from '../Field';
import CheckBox from '../CheckBox';
import Button from '../Button';
import './styles.css';

const LoginView = () => (
  <div>
    <div className="name-fields">
      <Field name="name" label="First name" placeholder="Enter first name" message="Invalid first name" />
      <Field name="surname" label="Surname" placeholder="Enter surname" message="Invalid surname" />
    </div>
    <Field name="email" label="Email address" placeholder="Enter your email address" message="Invalid email address" />
    <Field
      name="phone"
      label="Phone number"
      placeholder="Enter phone number"
      message="Invalid phone number"
      isError={true}
    />
    <Field name="code" label="Voucher code" placeholder="Enter voucher code" message="Invalid voucher code" />
    <CheckBox name="settlement" label="Accept Privacy Settlement" message="Required" />
    <Button text="Get offer" />
  </div>
);

export default LoginView;
