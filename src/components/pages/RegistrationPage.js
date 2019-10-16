import React, { Component } from 'react';
import LogIn from '../registration/LogIn';
import SignUp from '../registration/SignUp';
import TokenServices from '../../utils/tokenServices'
import '../../css/pages/RegistrationPage.scss';

class RegistrationPage extends Component {
  /**
   * Checks wether or not the user is already logged in
   */
  componentDidMount() {
    if(TokenServices.getToken()){
      console.log("You are logged in redirecting")
      this.props.history.push("/dashboard");
    }else{
      console.log("You are not logged in doing nothing")
    }
  }
  constructor() {
    super();

    this.state = {
      hideSignUp: true,
    }
  }

  changeToSignup = event => {
    event.preventDefault();
    this.setState({ hideSignUp: false });
  }

  backToLogin = event => {
    event.preventDefault();
    this.setState({ hideSignUp: true });
  }

  render() {
    const { hideSignUp } = this.state;
    return (
      <div className="registration-container">
        {hideSignUp
          ? <LogIn history ={this.props.history} changeToSignup={() => this.changeToSignup} />
          : <SignUp history ={this.props.history} backToLogin={() => this.backToLogin} /> }
      </div>
    )
  }
}

export default RegistrationPage;
