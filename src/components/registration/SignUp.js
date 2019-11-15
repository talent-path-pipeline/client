import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../../css/registration/SignUp.scss';

const { REACT_APP_SVR_API } = process.env;

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      location: '',
      fullName: '',
      errors: {
        email: false,
        password: false,
        confirmPassword: false,
        location: false,
        fullName: false,
      },
      ValidationErrorMessages: {
        badEmail: 'Must use a valid email',
        badPassword: 'Must use a valid password with minimum of 8 characters',
        badConfirmedPassword: 'Passwords do not match',
        badFullName: 'Missing full name',
        badLocation: 'Missing location',
      },
      HTTPErrorMessage: '',
    };
  }

  createUserHandler = () => {
    const { handleSignup } = this.props;
    const { email, password, location, fullName } = this.state;
    const data = {
      email,
      password,
      location,
      fullName,
    };
    axios
      .post(`${REACT_APP_SVR_API}/user/`, data)
      .then(response => {
        localStorage.setItem('app-token', response.data.token);
        handleSignup();
      })
      .catch(error => {
        if (error.message === 'Network Error') {
          this.setState({
            HTTPErrorMessage:
              'A network error has occurred while contacting our servers...',
          });
        } else if (error.response.status === 400) {
          this.setState({ HTTPErrorMessage: `Error: ${error.response.data}` });
        } else if (error.response.status === 500) {
          this.setState({
            HTTPErrorMessage: `Something went wrong on our side. Please try again at a later time.\n Error: ${error.response.data}`,
          });
        }
      });
  };

  // Handles getting values
  handleEmailChange = evt => {
    this.setState({ email: evt.target.value });
  };

  handlePasswordChange = evt => {
    this.setState({ password: evt.target.value });
  };

  handleConfirmPassword = evt => {
    this.setState({ confirmPassword: evt.target.value });
  };

  handleFullName = evt => {
    this.setState({ fullName: evt.target.value });
  };

  handleLocation = evt => {
    this.setState({ location: evt.target.value });
  };

  validateData = () => {
    const { email, password, confirmPassword, location, fullName } = this.state;
    let setErrors = {
      email: false,
      password: false,
      confirmPassword: false,
      location: false,
      fullName: false,
    };
    let atLeastOneFailed = false;
    // Validating Email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrors.email = true;
      atLeastOneFailed = true;
    }
    // Validating password
    if (password.length === 0 || password === undefined || password.length < 8) {
      setErrors.password = true;
      atLeastOneFailed = true;
    }
    // Validating Confirmed Password
    if (password !== confirmPassword || confirmPassword.length === 0) {
      setErrors.confirmPassword = true;
      atLeastOneFailed = true;
    }
    // Validating Full Name
    if (fullName.length === 0 || fullName === undefined) {
      setErrors.fullName = true;
      atLeastOneFailed = true;
    }
    // Validating Location
    if (location.length === 0 || location === undefined) {
      setErrors.location = true;
      atLeastOneFailed = true;
    }
    // Setting error flags in state
    if (!atLeastOneFailed) {
      this.createUserHandler();
    } else {
      this.setState({ errors: setErrors });
    }
  };

  render() {
    const {
      email,
      password,
      confirmPassword,
      location,
      fullName,
      errors,
      HTTPErrorMessage,
    } = this.state;
    const { backToLogin } = this.props;
    return (
      <div id="signup-container">
        <h1 id="signup-title">Register</h1>
        <form id="signup-form">
          <h3 className="input-labels">Email</h3>
          <input
            className={errors.email ? 'formError' : null}
            type="email"
            value={email}
            onChange={this.handleEmailChange}
            placeholder="JaneDoe@email.com"
          />
          {errors.email ? (
            <p className="ErrorMessage">{this.state.ValidationErrorMessages.badEmail}</p>
          ) : null}
          <h3 className="input-labels">Password</h3>
          <input
            className={errors.password ? 'formError' : null}
            type="password"
            value={password}
            onChange={this.handlePasswordChange}
            placeholder="Minimum length 8 characters"
          />
          {errors.password ? (
            <p className="ErrorMessage">
              {this.state.ValidationErrorMessages.badPassword}
            </p>
          ) : null}

          <h3 className="input-labels">Confirm Password</h3>
          <input
            className={errors.confirmPassword ? 'formError' : null}
            type="password"
            value={confirmPassword}
            onChange={this.handleConfirmPassword}
          />
          {errors.confirmPassword ? (
            <p className="ErrorMessage">
              {this.state.ValidationErrorMessages.badConfirmedPassword}
            </p>
          ) : null}

          <h3 className="input-labels">Full Name</h3>
          <input
            className={errors.fullName ? 'formError' : null}
            type="text"
            value={fullName}
            onChange={this.handleFullName}
            placeholder="Jane Doe"
          />
          {errors.fullName ? (
            <p className="ErrorMessage">
              {this.state.ValidationErrorMessages.badFullName}
            </p>
          ) : null}

          <h3 className="input-labels">Location</h3>
          <input
            className={errors.location ? 'formError' : null}
            type="text"
            value={location}
            onChange={this.handleLocation}
            placeholder="Example: Neverwinter"
          />
          {errors.location ? (
            <p className="ErrorMessage">
              {this.state.ValidationErrorMessages.badLocation}
            </p>
          ) : null}
          {/* <p>
              {`By clicking "Sign Up" you are agreeing to our `} 
            <a href="https://www.termsandcondiitionssample.com/live.php?token=bYAxBa2kby8ugr9x4eWMbKKgXnxOQyNg" rel="noopener noreferrer" target="_blank">Terms and Agreement</a>
          </p> */}
          <button id="register-button" type="button" onClick={this.validateData}>
            {`Sign Up`}
          </button>
          {HTTPErrorMessage ? <p className="ErrorMessage">{HTTPErrorMessage}</p> : null}
          <p id="bottomLink">
            {`Go back to `}
            <button id="login-button" type="button" onClick={backToLogin()}>
              {`Log in!`}
            </button>
          </p>
        </form>
      </div>
    );
  }
}

SignUp.propTypes = {
  handleSignup: PropTypes.func.isRequired,
  backToLogin: PropTypes.func.isRequired,
};

export default SignUp;
