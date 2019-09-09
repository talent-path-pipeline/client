import React,{Component} from 'react';
import Axios from "axios";
import "../../css/registration/LogIn.scss";


class LogIn extends Component{
  state = {
    email: "",
    password: ""
  }
  LogInHandler = () =>{
    const data = {
      email: this.state.email,
      password: this.state.password
    }
    
    // TODO: Add email and password validations

    console.log(`Data being sent: ${data.email} ${data.password} `)
    Axios.post('http://localhost:5000/api/user/login',data)
    .then(response=>{
      console.log(response);
    })
    .catch(error=>{
      this.showSuccess = false;
      this.showError = true;
      try{
        if(error.response.status === 400){
          console.log("Bad Request");
        }else if(error.response.status === 500){
          console.log("Something bad happended on the server.")
        }else{
          console.log("Uh oh...")
        }
      }catch(ex){
        this.errors = error.response.data;
        Promise.reject(error);
      }
    })
  }

render(){
  return (
    <div>
      <h1 id="title" >Login</h1>
      <form>
        <label>Email</label>
        <input type="email"  value={this.state.email} onChange={(event) => this.setState({email:event.target.value})}/>
        <label>Password</label>
        <input type="password" value={this.state.password} onChange={(event) => this.setState({password:event.target.value})}/>
        <button type="button" onClick={this.LogInHandler}>Submit</button>
      </form>
    </div>
  );
}
}


export default LogIn;