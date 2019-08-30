import React, { Component } from "react";
import Axios from "axios";
import "../../css/registration/SignUp";
import Aux from './UI/Aux';
import Modal from './UI/Modal';
import RegistrationComplete from './UI/RegistrationComplete'
import Loader from './UI/loader'
const validate = (email, password, confirmedPassword, fullName, location) => {
  return {
    email: email.length === 0,
    password: password.length < 8 || password !== confirmedPassword,
    fullName: fullName.length === 0,
    location: location.length === 0
  };
};
class Signup extends Component {
  state = {
    email: "",
    password: "",
    confirmPassword: "",
    location: "",
    fullName: "",
    touched: {
      email: false,
      password: false
    },
  
    disableButton: true,
    // Modal
    showModal: false,
    showRegistrationFailure: false,
    showSpinner: false
  };
  showModal = () => {
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };
  showSpinner = () =>{
this.setState({showSpinner: true})
  }
  hideSpinner = () =>{
      this.setState({showSpinner: false})
  }
  createUserHandler = () => {
    const data = {
      email: this.state.email,
      password: this.state.password,
      location: this.state.location,
      fullName: this.state.fullName
    };
    this.showSpinner();
    Axios.post("http://localhost:5000/api/user/", data)
      .then(response => {
        console.log(response);
        this.hideSpinner();
        this.showModal();
      })
      .catch(error => {
        this.setState({showRegistrationFailure: true})
        this.hideSpinner();
        console.log(`State changed for reg: ${this.state.failedRegistration}`)
        try {
          if (error.response.status === 400) {
            console.log("Bad Request");
          } else if (error.response.status === 500) {
            console.log("Something bad happended on the server.");
          } else {
            console.log("Uh oh...");
          }
        } catch (ex) {
          console.log(ex);
          Promise.reject(error);
        }
      });
  };

  // Handles getting values
  handleEmailChange = evt => {
    const email = evt.target.value;
    this.setState({ email:email});
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
  handleBlur = field => evt => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  };

  handleSubmit = evt => {
    if (!this.canBeSubmitted()) {
      evt.preventDefault();
      return;
    }
    const { email, password } = this.state;
    alert(`Signed up with email: ${email} password: ${password}`);
  };

  canBeSubmitted() {
    const errors = validate(
      this.state.email,
      this.state.password,
      this.state.confirmPassword,
      this.state.fullName,
      this.state.location
    );
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }
goHome=()=>{
  // Route to homepage
  console.log("Redirecting to homepage, for now getting rid of modal");
  this.setState({ showModal: false });

}
  render() {
    
    const errors = validate(
      this.state.email,
      this.state.password,
      this.state.confirmPassword,
      this.state.fullName,
      this.state.location
    );
    const isDisabled = Object.keys(errors).some(x => errors[x]);

    const shouldMarkError = field => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];

      return hasError ? shouldShow : false;
    };
    return (
      
      <Aux>
      <Loader show ={this.state.showSpinner}></Loader>
        <Modal show={this.state.showModal}
        modalClosed={this.closeModal}
        >
          <RegistrationComplete
          goHome={this.goHome}/>
        </Modal>
        <div>
        <h1>Register</h1>
        <form>
          <label>Email</label>
          <h6>Example: janeDoe@email.com</h6>
          <input
            className={shouldMarkError("email") ? "error" : ""}
            type="text"
            value={this.state.email}
            onChange={this.handleEmailChange}
            onBlur={this.handleBlur("email")}
          />
          <label>Password</label>
          <h6>Minimum length 8 characters</h6>
          <input
            className={shouldMarkError("password") ? "error" : ""}
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            onBlur={this.handleBlur("password")}
          />
          <label>Confirm Password</label>
          <input
            className={shouldMarkError("confirmedPassword") ? "error" : ""}
            type="password"
            value={this.state.confirmPassword}
            onChange={this.handleConfirmPassword}
            onBlur={this.handleBlur("confirmPassword")}
          />
          <label>Full Name</label>
          <input
            className={shouldMarkError("fullName") ? "error" : ""}
            type="text"
            value={this.state.fullName}
            onChange={this.handleFullName}
            onBlur={this.handleBlur("fullName")}
          />
          <label>Location</label>
          <h6>ie: Los Angeles, CA</h6>
          <input
            className={shouldMarkError("location") ? "error" : ""}
            type="text"
            value={this.state.location}
            onChange={this.handleLocation}
            onBlur={this.handleBlur("location")}
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
        <WarningBanner warn={this.state.showRegistrationFailure} message={"( ! ) An error has occurred while registering you. Please try again at a later time."}/>
      </div>
      </Aux>
      
    );
  }
}
function WarningBanner (props){
  if(!props.warn){
    return null;
  }
  return (
    <div className="warning"> {props.message}</div>
  )
}

export default Signup;
