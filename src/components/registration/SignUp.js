import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../../css/registration/SignUp.scss';

const { REACT_APP_SVR_API } = process.env;

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        email: '',
        password: '',
        confirm_password: '',
        location: '',
        full_name: '',
      },
      errors: {
        email: false,
        password: false,
        confirm_password: false,
        location: false,
        full_name: false,
      },
      HTTPErrorMessage: '',
    };

    this.VALIDATION_ERROR_MESSAGES = {
      bad_email: 'Must use a valid email',
      bad_password: 'Must use a valid password with minimum of 8 characters',
      bad_confirmed_password: 'Passwords do not match',
      bad_full_name: 'Missing full name',
      bad_location: 'Missing location',
    };
  }

  createUserHandler = () => {
    const { data } = this.state;
    const { handleSignup } = this.props;

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
  handleDataChange = (event, type) => {
    const new_data = event.target.value;
    this.setState(prevState => ({
      data: { ...prevState.data, [type]: new_data },
      errors: { ...prevState.errors, [type]: false },
    }));
  };

  handleEmailChange = event => this.handleDataChange(event, 'email');

  handlePasswordChange = event => this.handleDataChange(event, 'password');

  handleConfirmPassword = event => this.handleDataChange(event, 'confirm_password');

  handleFullName = event => this.handleDataChange(event, 'full_name');

  handleLocation = event => this.handleDataChange(event, 'location');

  validateData = () => {
    const { data } = this.state;
    const errors = {
      email: data.email === undefined || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email),
      password: data.password === undefined || data.password.length < 8,
      confirm_password:
        data.confirm_password === undefined || data.password !== data.confirm_password,
      location: data.location === undefined || data.location.length === 0,
      full_name: data.full_name === undefined || data.full_name.length === 0,
    };

    if (Object.keys(errors).every(err_type => !errors[err_type])) {
      this.createUserHandler();
    } else {
      this.setState({ errors });
    }
  };

  render() {
    const { data, errors, HTTPErrorMessage } = this.state;
    const { backToLogin } = this.props;

    return (
      <div id="signup-container">
        <h1 id="signup-title">Register</h1>
        <form id="signup-form">
          <h3 className="input-labels">Email</h3>
          <input
            className={errors.email ? 'formError' : null}
            type="email"
            value={data.email}
            onChange={this.handleEmailChange}
            placeholder="JaneDoe@email.com"
          />
          {errors.email ? (
            <p className="ErrorMessage">{this.VALIDATION_ERROR_MESSAGES.bad_email}</p>
          ) : null}
          <h3 className="input-labels">Password</h3>
          <input
            className={errors.password ? 'formError' : null}
            type="password"
            value={data.password}
            onChange={this.handlePasswordChange}
            placeholder="Minimum length 8 characters"
          />
          {errors.password ? (
            <p className="ErrorMessage">{this.VALIDATION_ERROR_MESSAGES.bad_password}</p>
          ) : null}

          <h3 className="input-labels">Confirm Password</h3>
          <input
            className={errors.confirm_password ? 'formError' : null}
            type="password"
            value={data.confirm_password}
            onChange={this.handleConfirmPassword}
          />
          {errors.confirm_password ? (
            <p className="ErrorMessage">
              {this.VALIDATION_ERROR_MESSAGES.bad_confirmed_password}
            </p>
          ) : null}
          <h3 className="input-labels">Full Name</h3>
          <input
            className={errors.full_name ? 'formError' : null}
            type="text"
            value={data.full_name}
            onChange={this.handleFullName}
            placeholder="Jane Doe"
          />
          {errors.full_name ? (
            <p className="ErrorMessage">{this.VALIDATION_ERROR_MESSAGES.bad_full_name}</p>
          ) : null}
          <h3 className="input-labels">Location</h3>
          <input
            className={errors.location ? 'formError' : null}
            type="text"
            value={data.location}
            onChange={this.handleLocation}
            placeholder="Example: Neverwinter"
          />
          {errors.location ? (
            <p className="ErrorMessage">{this.VALIDATION_ERROR_MESSAGES.bad_location}</p>
          ) : null}
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
