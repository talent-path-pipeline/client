import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../../css/registration/LogIn.scss';

const { REACT_APP_SVR_API } = process.env;

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {
        email:false,
        password: false,
      },
      ValidationErrorMessages: {
        badEmail: 'Missing email',
        badPassword: 'Missing password',
      },
      HTTPErrorMessage: ''
    };
  }

  LogInHandler = () => {
    const { email, password } = this.state;
    const data = {
      email,
      password,
    };

    axios
      .post(`${REACT_APP_SVR_API}/user/login`, data)
      .then(response => {
        localStorage.setItem('app-token', response.data.token);
        this.props.handleLogin();
      })
      .catch(error => {
        if(error.message === 'Network Error'){
          this.setState({ HTTPErrorMessage: 'A network error has occurred while contacting our servers...' });
        } else if (error.response.status === 400) {
          this.setState({ HTTPErrorMessage: `${error.response.data}` });
        } else if (error.response.status === 500) {
          this.setState({ HTTPErrorMessage: `Something went wrong on our side. Please try again at a later time.\n Error: ${error.response.data}` });
        }
      });
  };
  handleEmailChange = evt => {
    this.setState({email: evt.target.value });
  };

  handlePasswordChange = evt => {
    this.setState({  password: evt.target.value });
  };
  validateData = () =>{
    const { email, password} = this.state;
    let setErrors = {
        email:false,
        password: false,
    }
    let atLeastOneFailed = false;
    // Validating Email
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      setErrors.email = true;
      atLeastOneFailed = true;
    }
    // Validating password
    if(password.length === 0 || password === undefined){
      setErrors.password = true;
      atLeastOneFailed = true;
    }
    // Setting error flags in state
    if(!atLeastOneFailed){
      this.LogInHandler();
    }else{
      this.setState({errors: setErrors})
    }
    
  }
  render() {
    const { email, password } = this.state;
    const { changeToSignup } = this.props;
    return (
      <div id="login-container">
        <h1 id="title">Login</h1>
        <form id="login-form">
          <h3>Email</h3>
          <input
            className= {this.state.errors.email ? 'formError':null}
            type="text"
            value={email}
            onChange={this.handleEmailChange}
            placeholder=""
          />
          {this.state.errors.email ?  <p className=
          'ErrorMessage'>{this.state.ValidationErrorMessages.badEmail}</p> : null}
          <h3>Password</h3>
          <input
          className= {this.state.errors.password ? 'formError':null}
            type="password"
            value={password}
            onChange={this.handlePasswordChange}
            placeholder=""
          />
          {this.state.errors.password ?  <p className=
          'ErrorMessage'>{this.state.ValidationErrorMessages.badPassword}</p> : null}
          <button id="submit-button" type="button" onClick={this.validateData}>
            {`Submit`}
          </button>
          {this.state.HTTPErrorMessage ?  <p className=
          'ErrorMessage'>{this.state.HTTPErrorMessage}</p> : null}
        </form>
        <p id='bottomLink'>
          {`Don't have an account, `}
          <button id="signup-button" type="button" onClick={changeToSignup()}>
            {`Sign up!`}
          </button>
        </p>
      </div>
    );
  }
}

LogIn.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};

export default LogIn;
