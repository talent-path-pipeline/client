import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import '../../css/registration/SignUp.scss';

class SignUp extends Component {
  constructor(props){
    super(props);

    this.state = {
      // Form information
      email: '',
      password: '',
      confirmPassword: '',
      location: '',
      fullName: '',
      // Might have to refactored this...
      touched: {
        email: false,
        password: false,
      },
      // Controls when there are failed validations when registering
      disableButton: true,
      // Showsgdfgsdgss error message if server fails
      showRegsgdfgsdgsistrationFailure: false,
      // Showsgdfgsdgss when waiting for server response
      showSpisgdfgsdgsnner: false,
      successfulRegister: false,
      // Used for redirecting
      loggedIn: false
    }
  }
  
  /**
   * Creates a user with the server
   */
  createUserHandler = () => {
    const { email, password, location, fullName } = this.state;
    const data = {
      email,
      password,
      location,
      fullName,
    };
    Axios.post('http://localhost:5000/api/user/', data)
      .then(response => {
        console.log(response);
        // Stores token in local storeage for the time being
        localStorage.setItem('app-token', response.data.token);
        // Sweet Alert for successful registration
        this.props.handleSignup();
      })
      .catch(error => {
        try {
          // Handles errors that are not HTTP specific
          console.log(error)
          this.setState({ showRegistrationFailure: true });
          if (!error.status) {
            console.log('A network error has occured.')
          } else if (error.response.status === 400) {
            console.log('Bad Request');
          } else if (error.response.status === 500) {
            console.log('Something bad happended on the server.');
          } else {
            console.log('An unknown error has occurred');
          }
        } catch (ex) {
          Promise.reject(ex);
        }
      });
  };

  // Handles getting values
  handleEmailChange = evt => {
    const email = evt.target.value;
    this.setState({ email });
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

  handleBlur = field => event => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };
  
  /**
   * @description Controls the submit button
   */
  handleSubmit = evt => {
    if (!this.canBeSubmitted()) {
      evt.preventDefault();
      return;
    }
    const { email, password } = this.state;
    alert(`Signed up with email: ${email} password: ${password}`);
  };

  canBeSubmitted() {
    const { email, password, confirmPassword,  location, fullName } = this.state;
    const errors = validate(
      email,
      password,
      confirmPassword,// Moda
      fullName,
      location
    );
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }
  

  render() {
    const { email, password, confirmPassword,  location, fullName } = this.state;
    const { backToLogin } = this.props;
    const errors = validate(
      email,
      password,
      confirmPassword,
      fullName,
      location
    );
    const isDisabled = Object.keys(errors).some(x => errors[x]);

    const shouldMarkError = field => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];

      return hasError ? shouldShow : false;
    };
    return (
      <div id="signup-container">
        <h1 id="signup-title">Register</h1>
        <form id="signup-form">
          <h3 className="input-labels">Email</h3>
          <input
            className={shouldMarkError('email') ? 'error' : ''}
            type="text"
            value={this.state.email}
            onChange={this.handleEmailChange}
            onBlur={this.handleBlur('email')}
            placeholder='JaneDoe@email.com'
          />
          <h3 className="input-labels">Password</h3>
          <input
            className={shouldMarkError('password') ? 'error' : ''}
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            onBlur={this.handleBlur('password')}
            placeholder='Minimum length 8 characters'
          />
          <h3 className="input-labels">Confirm Password</h3>
          <input
            className={shouldMarkError('confirmedPassword') ? 'error' : ''}
            type="password"
            value={this.state.confirmPassword}
            onChange={this.handleConfirmPassword}
            onBlur={this.handleBlur('confirmPassword')}
          />
          <h3 className="input-labels">Full Name</h3>
          <input
            className={shouldMarkError('fullName') ? 'error' : ''}
            type="text"
            value={this.state.fullName}
            onChange={this.handleFullName}
            onBlur={this.handleBlur('fullName')}
            placeholder='Jane Doe'
          />
          <h3 className="input-labels">Location</h3>
          <input
            className={shouldMarkError('location') ? 'error' : ''}
            type="text"
            value={this.state.location}
            onChange={this.handleLocation}
            onBlur={this.handleBlur('location')}
            placeholder='Example: Neverwinter'
          />
          <p>
              By clicking "Sign Up" you are agreeing
              to our <a href="www.google.com">Terms and Agreement</a>
          </p>
          <button
            id="register-button"
            type="button"
            onClick={this.createUserHandler}
            disabled={isDisabled}
          >
              Sign Up
          </button>
          <p>Go back to <button id='login-button' type="button" onClick={backToLogin()}>Log in!</button></p>
        </form>
        <WarningBanner
          warn={this.state.showRegistrationFailure}
          message="( ! ) An error has occurred while registering you. Please try again at a later time."
        />
      </div>
    );
  }
}

/**
 * @description Validates all inputs to theses constraints
 */
const validate = (email, password, confirmedPassword, fullName, location) => ({
  email: email.length === 0,
  password: password.length < 8 || password !== confirmedPassword,
  fullName: fullName.length === 0,
  location: location.length === 0,
});

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }
  return <div className="warning"> {props.message}</div>;
}

SignUp.propTypes = {
  handleSignup: PropTypes.func.isRequired,
};

export default SignUp;
