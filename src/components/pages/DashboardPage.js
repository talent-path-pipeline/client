import React from 'react';

class DashboardPage extends React.Component{
  state = {
    isAuthenticated:  false,
    userName: "",
    userID: "",
    storedToken: ""
  }
  componentWillMount(){
    console.log("HELLO BEFORE RENDER")
    // Call a service that checks Token and pulls id
    const tempa = window.localStorage.getItem('app-token');
    this.setState({ storedToken:  tempa});
  }
  render(){
    return (
      <div>
        <p>Hello World</p>
        <p>Token: {this.state.storedToken}</p>
      </div>
    )
  }
}

export default DashboardPage;
