import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../../css/registration/SignUp.scss';

const { REACT_APP_SVR_API } = process.env;

/**
 * @description Validates all inputs to theses constraints
 */
const validate = (email, password, confirmedPassword, fullName, location) => ({
  email: email.length === 0,
  password: password.length < 8 || password !== confirmedPassword,
  fullName: fullName.length === 0,
  location: location.length === 0,
});

const WarningBanner = warn_data =>
  // eslint-disable-next-line implicit-arrow-linebreak
  warn_data.warn ? <div className="warning">{warn_data.message}</div> : null;

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Form information
      email: '',
      password: '',
      confirmPassword: '',
      location: '',
      fullName: '',
      // Might have to refactor this...
      touched: {
        email: false,
        password: false,
      },
    };
  }

  /**
   * Creates a user with the server
   */
  createUserHandler = () => {
    const { email, password, location, fullName } = this.state;
    const { handleSignup } = this.props;
    const data = {
      email,
      password,
      location,
      fullName,
    };
    axios
      .post(`${REACT_APP_SVR_API}/user/`, data)
      .then(response => {
        // console.log(response);
        // Stores token in local storeage for the time being
        localStorage.setItem('app-token', response.data.token);
        // Sweet Alert for successful registration
        handleSignup();
      })
      .catch(error => {
        try {
          // Handles errors that are not HTTP specific
          console.error(error);
          this.setState({ showRegistrationFailure: true });
          if (!error.status) {
            console.error('A network error has occured.');
          } else if (error.response.status === 400) {
            console.error('Bad Request');
          } else if (error.response.status === 500) {
            console.error('Something bad happended on the server.');
          } else {
            console.error('An unknown error has occurred');
          }
        } catch (ex) {
          alert('Something went wrong...');
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
    this.setState(prevState => ({
      touched: { ...prevState.touched, [field]: true },
    }));
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
    const { email, password, confirmPassword, location, fullName } = this.state;
    const errors = validate(
      email,
      password,
      confirmPassword, // Moda
      fullName,
      location,
    );
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  render() {
    const { email, password, confirmPassword, location, fullName, touched } = this.state;
    const { backToLogin } = this.props;
    const errors = validate(email, password, confirmPassword, fullName, location);
    const isDisabled = Object.keys(errors).some(x => errors[x]);

    const shouldMarkError = field => {
      const hasError = errors[field];
      const shouldShow = touched[field];

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
            value={email}
            onChange={this.handleEmailChange}
            onBlur={this.handleBlur('email')}
            placeholder="JaneDoe@email.com"
          />
          <h3 className="input-labels">Password</h3>
          <input
            className={shouldMarkError('password') ? 'error' : ''}
            type="password"
            value={password}
            onChange={this.handlePasswordChange}
            onBlur={this.handleBlur('password')}
            placeholder="Minimum length 8 characters"
          />
          <h3 className="input-labels">Confirm Password</h3>
          <input
            className={shouldMarkError('confirmedPassword') ? 'error' : ''}
            type="password"
            value={confirmPassword}
            onChange={this.handleConfirmPassword}
            onBlur={this.handleBlur('confirmPassword')}
          />
          <h3 className="input-labels">Full Name</h3>
          <input
            className={shouldMarkError('fullName') ? 'error' : ''}
            type="text"
            value={fullName}
            onChange={this.handleFullName}
            onBlur={this.handleBlur('fullName')}
            placeholder="Jane Doe"
          />
          <h3 className="input-labels">Location</h3>
          <input
            className={shouldMarkError('location') ? 'error' : ''}
            type="text"
            value={location}
            onChange={this.handleLocation}
            onBlur={this.handleBlur('location')}
            placeholder="Example: Neverwinter"
          />
          {/* <p>
              {`By clicking "Sign Up" you are agreeing to our `} 
            <a href="https://www.termsandcondiitionssample.com/live.php?token=bYAxBa2kby8ugr9x4eWMbKKgXnxOQyNg" rel="noopener noreferrer" target="_blank">Terms and Agreement</a>
          </p> */}
          <button
            id="register-button"
            type="button"
            onClick={this.createUserHandler}
            disabled={isDisabled}
          >
            {`Sign Up`}
          </button>
          <p>
            {`Go back to `}
            <button id="login-button" type="button" onClick={backToLogin()}>
              {`Log in!`}
            </button>
          </p>
        </form>
        <WarningBanner
          warn={this.state.showRegistrationFailure}
          message="( ! ) An error has occurred while registering you. Please try again at a later time."
        />
      </div>
    );
  }
}

SignUp.propTypes = {
  handleSignup: PropTypes.func.isRequired,
};

export default SignUp;
