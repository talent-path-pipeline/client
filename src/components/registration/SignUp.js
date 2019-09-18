import React, { Component } from 'react';
import Axios from 'axios';
import '../../css/registration/SignUp.scss';
import Aux from './UI/Aux';
import Modal from './UI/Modal';
import RegistrationComplete from './UI/RegistrationComplete';
import Loader from './UI/loader';

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
      // Modal
      showModal: false,
      // Shows error message if server fails
      showRegistrationFailure: false,
      // Shows when waiting for server response
      showSpinner: false,
      successfulRegister: false,
    }
  }
  
  
  /**
   * Controls modal and spinner controlls
   */
  showModal = () => {
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  showSpinner = () => {
    this.setState({ loading: true });
  };

  hideSpinner = () => {
    this.setState({ loading: false });
  };

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
    // this.showSpinner();
    Axios.post('http://localhost:5000/api/user/', data)
      .then(response => {
        console.log(response);
        // this.hideSpinner();
        this.showModal();
      })
      .catch(error => {
        this.setState({ showRegistrationFailure: true });
        // this.hideSpinner();
        try {
          if (error.response.status === 400) {
            console.log('Bad Request');
          } else if (error.response.status === 500) {
            console.log('Something bad happended on the server.');
          } else {
            console.log('Uh oh...');
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

  goHome = () => {
    // Route to homepage
    console.log('Redirecting to homepage, for now getting rid of modal');
    this.setState({ showModal: false });
  };

  canBeSubmitted() {
    const { email, password, confirmPassword,  location, fullName } = this.state;
    const errors = validate(
      email,
      password,
      confirmPassword,
      fullName,
      location
    );
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }
  

  render() {
    const { email, password, confirmPassword,  location, fullName } = this.state;
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

    if (this.state.loading) {
      return <Loader show={this.state.showSpinner} />;
    }
    if (this.state.showModal) {
      return (
        <Modal show={this.state.showModal} modalClosed={this.closeModal}>
          <RegistrationComplete goHome={this.goHome} />
        </Modal>
      );
    }

    return (
      <Aux>
        <div id="signup-container">
          <h1 id="signup-title">Register</h1>
          <form id="signup-form">
            <h3 className="input-labels">Email</h3>
            <h6>Example: janeDoe@email.com</h6>
            <input
              className={shouldMarkError('email') ? 'error' : ''}
              type="text"
              value={this.state.email}
              onChange={this.handleEmailChange}
              onBlur={this.handleBlur('email')}
            />
            <h3 className="input-labels">Password</h3>
            <h6>Minimum length 8 characters</h6>
            <input
              className={shouldMarkError('password') ? 'error' : ''}
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
              onBlur={this.handleBlur('password')}
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
            />
            <h3 className="input-labels">Location</h3>
            <h6>Example: Los Angeles, CA</h6>
            <input
              className={shouldMarkError('location') ? 'error' : ''}
              type="text"
              value={this.state.location}
              onChange={this.handleLocation}
              onBlur={this.handleBlur('location')}
            />
            <p>
              <span role="img">❗️</span> By clicking "Sign Up" you are agreeing
              to our <a href="www.google.com">terms and agreement</a>
            </p>
            <button
              type="button"
              onClick={this.createUserHandler}
              disabled={isDisabled}
            >
              Sign Up
            </button>
          </form>
          <WarningBanner
            warn={this.state.showRegistrationFailure}
            message="( ! ) An error has occurred while registering you. Please try again at a later time."
          />
        </div>
      </Aux>
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


export default SignUp;
