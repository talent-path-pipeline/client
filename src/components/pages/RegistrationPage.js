import React, { Component } from 'react';
import LogIn from '../registration/LogIn';
import SignUp from '../registration/SignUp';

import '../../css/pages/RegistrationPage.scss';

class RegistrationPage extends Component {
  constructor() {
    super();

    this.state = {
      hideSignUp: true,
    }
  }

  changeToSignup = event => {
    event.preventDefault();
    this.setState({ hideSignUp: false });
  }

  backToLogin = event => {
    event.preventDefault();
    this.setState({ hideSignUp: true });
  }

  render() {
    const { hideSignUp } = this.state;
    return (
      <div className="registration-container">
        {hideSignUp
          ? <LogIn history ={this.props.history} changeToSignup={() => this.changeToSignup} />
          : <SignUp history ={this.props.history} backToLogin={() => this.backToLogin} /> }
      </div>
    )
  }
}

export default RegistrationPage;
