import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import '../../css/registration/LogIn.scss';


class LogIn extends Component{
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }
  }

  LogInHandler = () =>{
    const { email, password } = this.state;
    const data = {
      email,
      password,
    }
    
    Axios.post('http://localhost:5000/api/user/login',data)
      .then(response=>{
        localStorage.setItem('app-token', response.data.token);
        // this.props.history.push("/dashboard");
        this.props.handleLogin();
      })
      .catch(error=>{
        this.showSuccess = false;
        this.showError = true;
        try{
          if(error.response.status === 400){
            console.log('Bad Request');
          }else if(error.response.status === 500){
            console.log('Something bad happended on the server.')
          }else{
            console.log('Uh oh...')
          }
        }catch(ex){
          console.log(ex);
          // this.errors = error.response.data;
          Promise.reject(error);
        }
      })
  }

  render(){
    const { email, password } = this.state;
    const { changeToSignup } = this.props;
    return (
      <div id="login-container">
        <h1 id="title" >Login</h1>
        <form id="login-form">
          <h3>Email</h3>
          <input type="email"  value={email} onChange={event => this.setState({email:event.target.value})}/>
          <h3>Password</h3>
          <input type="password" value={password} onChange={event => this.setState({password:event.target.value})}/>
          <button id="submit-button" type="button" onClick={this.LogInHandler}>Submit</button>
        </form>
        <p>Don't have an account, <button id='signup-button' type="button" onClick={changeToSignup()}>Sign up!</button></p>
      </div>
    );
  }
}


LogIn.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};

export default LogIn;