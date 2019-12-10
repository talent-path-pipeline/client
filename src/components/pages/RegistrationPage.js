import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LogIn, SignUp } from '..';
import { tokenServices } from '../../utils';
import '../../css/pages/RegistrationPage.scss';

class RegistrationPage extends Component {
  constructor() {
    super();

    this.state = {
      hideSignUp: true,
    };
  }

  /**
   * Checks wether or not the user is already logged in
   */
  componentDidMount() {
    if (tokenServices.getToken()) {
      // console.log("You are logged in redirecting")
      // this.props.history.push("/dashboard");
      this.handleLogIn();
    } else {
      // console.log("You are not logged in doing nothing")
    }
  }

  handleLogIn = event => {
    // event.preventDefault();
    // this.props.history.push("/dashboard");
    this.props.handleLogIn();
  };

  changeToSignUp = event => {
    // event.preventDefault();
    this.setState({ hideSignUp: false });
  };

  backToLogIn = event => {
    // event.preventDefault();
    this.setState({ hideSignUp: true });
  };

  render() {
    const { hideSignUp } = this.state;
    return (
      <div className="registration-container">
        {hideSignUp ? (
          <LogIn changeToSignUp={this.changeToSignUp} handleLogIn={this.handleLogIn} />
        ) : (
          <SignUp backToLogIn={this.backToLogIn} handleSignUp={this.handleLogIn} />
        )}
      </div>
    );
  }
}

RegistrationPage.propTypes = {
  handleLogIn: PropTypes.func.isRequired,
};

export default RegistrationPage;
