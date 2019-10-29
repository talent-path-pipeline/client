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
      this.props.history.push('/login');
    } else {
      this.setState({userID: token.id});
      this.setState({userPersona: token.persona});
      this.setState({userName: token.fullName});
    }
  }

  goToOverview = () => {
    this.setState({ active: 'overview' });
  };

  goToSettings = () => {
    this.setState({ active: 'settings' });
  };

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
            <h1 className="dashboardHeader">
Welcome,
              {' '}
              {this.state.userName ? this.state.userName : 'Anon'}
!
            </h1>
           
          </div>
        ) : (
          ''
        )}
        {this.state.active === 'settings' ? (
          <div className="dashboardBody">
            <h1 className="dashboardHeader">
              {this.state.userName}
's Account
            </h1>
            <p className="dashboardText">
              {' '}
User ID:
              {' '}
              {this.state.userID}
            </p>
          </div>
        ) : (
          ''
        )}
      </main>
    );
  }
}

export default DashboardPage;
