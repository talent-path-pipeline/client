import React from 'react';
import tokenService from '../../utils/tokenServices';


class DashboardPage extends React.Component{
  state = {
    userName: "",
    userID: "",
    userPersona: "",
  }
  componentDidMount(){
    const token = tokenService.getToken();
    if(!token){
      // Redirect to HTTP ErrorCode 500 page, this is a placeholder, replace with real
      //this.props.history.push("/forbidenPage");
      // This following code is a placeholder to show that the user isn't loggedIn
      this.setState({userID: -1});
      this.setState({userPersona: "Not Logged In"});
    }
    else {
      this.setState({userID: token.id});
      this.setState({userPersona: token.persona});
      this.setState({userName: token.fullName})
    }
  }
  render(){
    return (
      <div>
        <p>Greetings {this.state.userName}!</p>
        <p>User ID: {this.state.userID}</p>
        <p>Role: {this.state.userPersona}</p>
      </div>
    )
  }
}

export default DashboardPage;
