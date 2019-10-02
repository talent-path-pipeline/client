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

  changeLogin = event => {
    event.preventDefault();
    console.log('changing modal');
    this.setState({ hideSignUp: false });
  }

  render() {
    const { hideSignUp } = this.state;
    return (
      <div className="registration-container">
        {hideSignUp
          ? <LogIn changeLogin={() => this.changeLogin} />
          : <SignUp /> }
      </div>
    )
  }
}

export default RegistrationPage;
