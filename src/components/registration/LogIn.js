import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { FormQuestion } from '..';
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
        email: false,
        password: false,
      },
      HTTPErrorMessage: '',
    };

    this.VALIDATION_ERROR_MESSAGES = {
      email: 'Missing or invalid email',
      password: 'Missing or invalid password',
    };
  }

  LogInHandler = () => {
    const { data } = this.state;
    const { handleLogin } = this.props;

    axios
      .post(`${REACT_APP_SVR_API}/user/login`, data)
      .then(response => {
        localStorage.setItem('app-token', response.data.token);
        handleLogin();
      })
      .catch(error => {
        if (error.message === 'Network Error') {
          this.setState({
            HTTPErrorMessage:
              'A network error has occurred while contacting our servers...',
          });
        } else if (error.response.status === 400) {
          this.setState({ HTTPErrorMessage: `${error.response.data}` });
        } else if (error.response.status === 500) {
          this.setState({
            HTTPErrorMessage: `Something went wrong on our side. Please try again at a later time.\n Error: ${error.response.data}`,
          });
        }
      });
  };

  // Handles getting values
  handleDataChange = (event, type) => {
    const new_data = event.target.data;
    this.setState(prevState => ({
      data: { ...prevState.data, [type]: new_data },
      errors: { ...prevState.errors, [type]: false },
    }));
  };

  validateData = () => {
    const { data } = this.state;
    const errors = {
      email: data.email === undefined || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email),
      password: data.password === undefined || data.password.length < 8,
    };

    if (Object.keys(errors).every(err_type => !errors[err_type])) {
      this.LogInHandler();
    } else {
      this.setState({ errors });
    }
  };

  render() {
    const { data, errors, HTTPErrorMessage } = this.state;
    const { changeToSignup } = this.props;
    return (
      <div id="login-container">
        <h1 id="title">Login</h1>
        <form id="login-form">
          {Object.keys(data).map(element => (
            <FormQuestion
              key={element}
              data_type={element}
              info={data[element]}
              has_error={errors[element]}
              err_msg={this.VALIDATION_ERROR_MESSAGES[element]}
              handleDataChange={this.handleDataChange}
            />
          ))}
          <button id="submit-button" type="button" onClick={this.validateData}>
            {`Submit`}
          </button>
          {HTTPErrorMessage ? <p className="ErrorMessage">{HTTPErrorMessage}</p> : null}
        </form>
        <p id="bottomLink">
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
  changeToSignup: PropTypes.func.isRequired,
};

export default LogIn;
