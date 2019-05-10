import React, { Component } from 'react';

import LoginFormView from '../components/LoginFormView';

class LoginFormContainer extends Component {
  handleSubmit(data) {
    // eslint-disable-next-line no-console
    console.log(data);
  }

  render() {
    const props = {
      onSubmit: this.handleSubmit
    };

    return <LoginFormView {...props} />;
  }
}

export default LoginFormContainer;
