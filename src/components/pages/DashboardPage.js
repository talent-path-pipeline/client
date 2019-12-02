import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { tokenServices } from '../../utils';
import { AccountSettings, DashboardMenu, ProgressOverview } from '..';
import '../../css/pages/DashboardPage.scss';

class DashboardPage extends Component {
  static propTypes = {
    history: PropTypes.shape(PropTypes.object).isRequired,
    handleLogOut: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      user: {
        id: 'No ID',
        fullName: 'Anon',
      },
      active: 'overview',
    };
  }

  componentDidMount() {
    const user = tokenServices.getToken();
    if (!user) {
      // Redirect to HTTP ErrorCode 500 page, this is a placeholder, replace with real
      const { history } = this.props;
      history.push('/login');
    } else {
      this.setState({ user });
    }
  }

  goToSection = section => {
    this.setState({ active: section });
  };

  getBodySection = () => {
    const { active, user } = this.state;

    if (active === 'overview') {
      return <ProgressOverview username={user.fullName} />;
    }
    if (active === 'settings') {
      return <AccountSettings username={user.fullName} user_id={user.id} />;
    }
    return <div className="dashboard-body">No Body</div>;
  };

  render() {
    const { handleLogOut } = this.props;
    const { user, active } = this.state;

    return (
      <main className="dashboard">
        <DashboardMenu
          username={user.fullName}
          active={active}
          section_list={{
            overview: 'Progress Overview',
            settings: 'Account Settings',
          }}
          goToSection={this.goToSection}
          handleLogOut={handleLogOut}
        />
        {this.getBodySection()}
      </main>
    );
  }
}

export default DashboardPage;
