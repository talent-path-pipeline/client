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
  render(){
    return (
      <main className="dashboard">
        <DashboardMenu
          user={user}
          activeView={this.state.active}
          showOverview={this.goToOverview}
          showSettings={this.goToSettings}
          logout={logout}
        />
        {this.state.active === 'overview' ? (
          <div className="dashboardBody">
            <h1 className="dashboardHeader">Welcome, {user.username ? user.username : 'Anon'}!</h1>
            {/* <Favorites
              modalDetails={modalDetails}
              isShowing={isModalShowing}
              openModal={openModal}
              closeModal={closeModal}
            /> */}
            <h3>You do not have any favorites saved.</h3>
          </div>
        ) : (
          ''
        )}
        {this.state.active === 'settings' ? (
          <div className="dashboardBody">
            <h1 className="dashboardHeader">Account Settings</h1>
            <AccountSettings user={user} />
          </div>
        ) : (
          ''
        )}
      </main>
    )
  }
}

export default DashboardPage;
