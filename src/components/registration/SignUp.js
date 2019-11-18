import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../../css/registration/SignUp.scss';
import { ETXTBSY } from 'constants';

const { REACT_APP_SVR_API } = process.env;

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data:{
        email: '',
        password: '',
        confirmPassword: '',
        location: '',
        fullName: '',
      },
      errors: {
        email: false,
        password: false,
        confirmPassword: false,
        location: false,
        fullName: false,
      },
      HTTPErrorMessage: '',
    };

    this.VALIDATION_ERROR_MESSAGES = {
      badEmail: 'Must use a valid email',
      badPassword: 'Must use a valid password with minimum of 8 characters',
      badConfirmedPassword: 'Passwords do not match',
      badFullName: 'Missing full name',
      badLocation: 'Missing location'
    }
  }

  createUserHandler = () => {
    const { handleSignup } = this.props;
    axios
      .post(`${REACT_APP_SVR_API}/user/`, this.state.data)
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
    this.setState(prevState => ({ 
      ...prevState,
      data: { ...prevState.data, email: evt.target.value },
      errors: { ...prevState.errors, email: false }
    }));
  };

  handlePasswordChange = evt => {
    this.setState(prevState => ({ 
      data: { ...prevState.data, password: evt.target.value },
      errors: { ...prevState.errors, password: false }
    }));
  };

  handleConfirmPassword = evt => {
    this.setState(prevState => ({ 
      data: { ...prevState.data, confirmPassword: evt.target.value },
      errors: { ...prevState.errors, confirmPassword: false }
    }));
  };

  handleFullName = evt => {
    const fullName = evt.target.value; // TODO:
    this.setState(prevState => ({ 
      data: { ...prevState.data, fullName},
      errors: { ...prevState.errors, fullName: false }
    }));
  };

  handleLocation = evt => {
    const location = evt.target.value; // TODO:
    this.setState(prevState => ({ 
      data: { ...prevState.data, location},
      errors: { ...prevState.errors, location: false }
    }));
  };

  validateData = () =>{
    const { email, password, confirmPassword, location, fullName } = this.state.data;
    const errors = {
        email:!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
        password: password === undefined || password.length < 8,
        confirmPassword: password !== confirmPassword || confirmPassword.length < 8,
        location: location === undefined || location.length === 0,
        fullName: fullName.length === 0 || fullName === undefined, // TODO:
    };

    if(Object.keys(errors).every((k)=>!errors[k])){ // TODO:
      this.createUserHandler();
    } else {
      this.setState({errors});
    }    
  }

  render() {
    const { email, password, confirmPassword, location, fullName } = this.state.data;
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
          {this.state.errors.email ?  <p className=
          'ErrorMessage'>{this.VALIDATION_ERROR_MESSAGES.badEmail}</p> : null}
          <h3 className="input-labels">Password</h3>
          <input
            className={errors.password ? 'formError' : null}
            type="password"
            value={password}
            onChange={this.handlePasswordChange}
            placeholder="Minimum length 8 characters"
          />
          {this.state.errors.password ?  <p className=
          'ErrorMessage'>{this.VALIDATION_ERROR_MESSAGES.badPassword}</p> : null}

          <h3 className="input-labels">Confirm Password</h3>
          <input
            className={errors.confirmPassword ? 'formError' : null}
            type="password"
            value={confirmPassword}
            onChange={this.handleConfirmPassword}
          />
          {this.state.errors.confirmPassword ?  <p className=
          'ErrorMessage'>{this.VALIDATION_ERROR_MESSAGES.badConfirmedPassword}</p> : null}

          <h3 className="input-labels">Full Name</h3>
          <input
            className={errors.fullName ? 'formError' : null}
            type="text"
            value={fullName}
            onChange={this.handleFullName}
            placeholder="Jane Doe"
          />
          {this.state.errors.fullName ?  <p className=
          'ErrorMessage'>{this.VALIDATION_ERROR_MESSAGES.badFullName}</p> : null}

          <h3 className="input-labels">Location</h3>
          <input
            className={errors.location ? 'formError' : null}
            type="text"
            value={location}
            onChange={this.handleLocation}
            placeholder="Example: Neverwinter"
          />
         {this.state.errors.location ?  <p className=
          'ErrorMessage'>{this.VALIDATION_ERROR_MESSAGES.badLocation}</p> : null}
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
