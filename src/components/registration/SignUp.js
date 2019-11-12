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
        email:false,
        password: false,
        confirmPassword: false,
        location: false,
        fullName: false,
        SentSuccessfully: null
      },
      ValidationErrorMessages: '',
      HTTPErrorMessage: ''
    };
  }

  createUserHandler = () => {
    const { handleSignup } = this.props;
   
    axios
      .post(`${REACT_APP_SVR_API}/user/`, this.state.userData)
      .then(response => {
        localStorage.setItem('app-token', response.data.token);
        handleSignup();
      })
      .catch(error => {
        console.error(error);
        if (!error.status) {
          this.setState({ HTTPErrorMessage: 'A network error has occurred' });
        } else if (error.response.status === 400) {
          this.setState({ HTTPErrorMessage: 'You\'ve sent incorrect data' });
        } else if (error.response.status === 500) {
          this.setState({ HTTPErrorMessage: 'Something went wrong on our side. Please try again at a later time.' });
        }
      });
  };

  // Handles getting values
  handleEmailChange = evt => {
    this.setState({email: evt.target.value });
  };

  handlePasswordChange = evt => {
    this.setState({  password: evt.target.value });
  };

  handleConfirmPassword = evt => {
    this.setState({ confirmPassword: evt.target.value});
  };

  handleFullName = evt => {
    this.setState({ fullName: evt.target.value });
  };

  handleLocation = evt => {
    this.setState({ location: evt.target.value });
  };

  validateData = () =>{
    const { email, password, confirmPassword, location, fullName } = this.state;
    let validationMessages = '';
    let setErrors = {
        email:false,
        password: false,
        confirmPassword: false,
        location: false,
        fullName: false,
        SentSuccessfully: null
    }
    // Validating Email
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      setErrors.email = true;
      validationMessages += "Must use a valid email\n";
    }
    // Validating password
    if(password.length === 0 || password === undefined){
      setErrors.password = true;
      validationMessages += 'Your password can\'t be empty\n';
    }
    if(password.length < 8){
      setErrors.email = true;
      validationMessages += 'Your password is too short, 8 character minimum\n';
    }
    // Validating Confirmed Password
    if(password !== confirmPassword){
      setErrors.confirmPassword = true;
      validationMessages += 'Your passwords do not match\n';
    }
    // Validating Full Name
    if(fullName.length === 0 || fullName === undefined){
      setErrors.fullName = true;
      validationMessages += 'Full name can\'t be empty\n'
    }
    // Validating Location
    if(location.length === 0 || location === undefined){
      setErrors.location = true;
      validationMessages += 'Location can\'t be empty\n'
    }
    console.log("FINISHED")
    console.log(validationMessages)
    console.log(setErrors)
  }

  render() {
    const { email, password, confirmPassword, location, fullName } = this.state;
    const { backToLogin } = this.props;
    return (
      <div id="signup-container">
        <h1 id="signup-title">Register</h1>
        <form id="signup-form">
          <h3 className="input-labels">Email</h3>
          <input
            type="text"
            value={email}
            onChange={this.handleEmailChange}
            placeholder="JaneDoe@email.com"
          />
          {/* Show Validation Warnings */}
          <h3 className="input-labels">Password</h3>
          <input
            type="password"
            value={password}
            onChange={this.handlePasswordChange}
            placeholder="Minimum length 8 characters"
          />
          {/* Show Validation Warnings */}

          <h3 className="input-labels">Confirm Password</h3>
          <input
            type="password"
            value={confirmPassword}
            onChange={this.handleConfirmPassword}
          />
          {/* Show Validation Warnings */}

          <h3 className="input-labels">Full Name</h3>
          <input
            type="text"
            value={fullName}
            onChange={this.handleFullName}
            placeholder="Jane Doe"
          />
          {/* Show Validation Warnings */}

          <h3 className="input-labels">Location</h3>
          <input
            type="text"
            value={location}
            onChange={this.handleLocation}
           
            placeholder="Example: Neverwinter"
          />
          {/* Show Validation Warnings */}
          {/* <p>
              {`By clicking "Sign Up" you are agreeing to our `} 
            <a href="https://www.termsandcondiitionssample.com/live.php?token=bYAxBa2kby8ugr9x4eWMbKKgXnxOQyNg" rel="noopener noreferrer" target="_blank">Terms and Agreement</a>
          </p> */}
          <button
            id="register-button"
            type="button"
            onClick={this.validateData}
          >
            {`Sign Up`}
          </button>
          {/* Show HTTP Warnings */}
          <p>
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
};

export default SignUp;
