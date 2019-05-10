import React, { Component } from 'react';

import LoginFormView from '../components/LoginFormView';

class LoginFormContainer extends Component {
  handleSubmit(data) {
    fetch('https://5cd507849c31c600148a9470.mockapi.io/carnext/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(responseJson => responseJson);
  }

  render() {
    const props = {
      onSubmit: this.handleSubmit
    };

    return <LoginFormView {...props} />;
  }
}

export default LoginFormContainer;
