import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import getWeightedRandom from '../../../services/getWeightedRandom';
import LoginFormView from '../components/LoginFormView';

class LoginFormContainer extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    fetch('https://5cd507849c31c600148a9470.mockapi.io/carnext/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(responseJson => responseJson)
      // eslint-disable-next-line no-console
      .catch(error => console.log(error));

    const isSuccess = getWeightedRandom([
      {
        value: true,
        weight: 1
      },
      {
        value: false,
        weight: 10
      }
    ]);

    this.props.history.replace('/result', { isSuccess });
  }

  render() {
    const props = {
      onSubmit: this.handleSubmit
    };

    return <LoginFormView {...props} />;
  }
}

export default withRouter(LoginFormContainer);
