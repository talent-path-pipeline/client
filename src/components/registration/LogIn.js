import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../../css/registration/LogIn.scss';

const { REACT_APP_SVR_API } = process.env;

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        email: '',
        password: '',
      },
      errors: {
        email:false,
        password: false,
      },  
      HTTPErrorMessage: '',
    };
    this.VALIDATION_ERROR_MESSAGES = {
      badEmail: 'Missing or invalid email',
      badPassword: 'Missing password',
    }
  }
  
  LogInHandler = () => {
    axios
      .post(`${REACT_APP_SVR_API}/user/login`, this.state.data)
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
    const email = evt.target.value;
    this.setState(prevState => ({ 
      data: {email,password: prevState.data.password},
      errors: { ...prevState.errors, email: false }
    }));
  };

  handlePasswordChange = evt => {
    const password = evt.target.value;
    this.setState(prevState => ({ 
      data: {email: prevState.data.email,password},
      errors: { ...prevState.errors, password: false }
    }));
  };

  validateData = () =>{
    const { email, password} = this.state.data;
    const errors = {
      email:!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
      password: password.length === 0 || password === undefined
    };

    if(Object.keys(errors).every((k)=>!errors[k])){
      this.LogInHandler();
    }else{
      this.setState({errors});
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
            'ErrorMessage'>{this.VALIDATION_ERROR_MESSAGES.badEmail}</p> : null}
          <h3>Password</h3>
          <input
            className= {this.state.errors.password ? 'formError':null}
            type="password"
            value={password}
            onChange={this.handlePasswordChange}
            placeholder=""
          />
          {this.state.errors.password ?  <p className=
            'ErrorMessage'>{this.VALIDATION_ERROR_MESSAGES.badPassword}</p> : null}
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
