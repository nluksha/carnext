import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import LoginView from '../components/LoginView';

class LoginContainer extends Component {
  render() {
    return <LoginView />;
  }
}

export default withRouter(LoginContainer);
