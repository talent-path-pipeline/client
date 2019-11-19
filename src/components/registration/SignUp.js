import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { FormQuestion } from '..';
import '../../css/registration/RegisForm.scss';

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
      email: 'Must use a valid email',
      password: 'Must use a valid password with minimum of 8 characters',
      confirm_password: 'Passwords do not match',
      full_name: 'Missing full name',
      location: 'Missing location',
    };
  }

  createUserHandler = () => {
    const { data } = this.state;
    const { handleSignup } = this.props;

    // TODO: Fix the back-end so it actually uses the correct naming conventions so this isn't necessary
    const no_name_convention_data = {
      ...data,
      fullName: data.full_name,
      confirmPassword: data.confirm_password,
    };

    axios
      .post(`${REACT_APP_SVR_API}/user/`, no_name_convention_data)
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
      <div className="regis-form-container">
        <h1 className="regis-form-title">Register</h1>
        <form className="regis-form-form">
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
          <button className="submit-button" type="button" onClick={this.validateData}>
            {`Sign Up`}
          </button>
          {HTTPErrorMessage ? <p className="error-message">{HTTPErrorMessage}</p> : null}
          <p className="bottom-link">
            {`Go back to `}
            <button className="switch-button" type="button" onClick={backToLogin()}>
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
