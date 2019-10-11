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
    if(token === null){
      // Redirect to HTTP ErrorCode 500 page
      // This following code is a placeholder to show that the user isn't loggedIn
      this.setState({userID: -1});
      this.setState({userPersona: "Not Logged In"});
    }
    else {
      this.setState({userID: token.id});
      this.setState({userPersona: token.persona});
    }
  }
  render(){
    return (
      <div>
        <p>Greetings</p>
        <p>User ID: {this.state.userID}</p>
        <p>Role: {this.state.userPersona}</p>
      </div>
    )
  }
}

export default DashboardPage;
