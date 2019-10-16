import React from 'react';
import tokenService from '../../utils/tokenServices';
import DashboardMenu from '../dashboard/DashboardMenu';
import '../../css/pages/DashboardPage.scss';


class DashboardPage extends React.Component{
  state = {
    userName: '',
    userID: '',
    userPersona: '',
    active: 'overview',
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

  goToOverview = () => {
    this.setState({ active: 'overview' });
  };

  goToSettings = () => {
    this.setState({ active: 'settings' });
  };

  // TODO: Implement Logout
  logout = () => {
    console.log('LOGGING OUT');
  }


  render(){
    return (
      <main className="dashboard">
        <DashboardMenu
          activeView={this.state.active}
          showOverview={this.goToOverview}
          showSettings={this.goToSettings}
          logout={this.logout}
        />
        {this.state.active === 'overview' ? (
          <div className="dashboardBody">
            <h1 className="dashboardHeader">Welcome, {this.state.userName ? this.state.userName : 'Anon'}!</h1>
            <p className="dashboardText">Persona: {this.state.userPersona}</p>
          </div>
        ) : (
          ''
        )}
        {this.state.active === 'settings' ? (
          <div className="dashboardBody">
            <h1 className="dashboardHeader">{this.state.userName}'s Account</h1>
            <p className="dashboardText"> User ID: {this.state.userID}</p>
          </div>
        ) : (
          ''
        )}
      </main>
    )
  }
}

export default DashboardPage;
