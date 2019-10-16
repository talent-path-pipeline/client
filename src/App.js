import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import DUMMY_DATA from './DUMMY_DATA';
import tokenServices from './utils/tokenServices';
import ProtectedDashboardRoute from './components/dashboard/ProtectedDashboardRoute';
import {
  NavBar,
  HomePage,
  PathPage,
  LessonPage,
  CatalogPage,
  RegistrationPage,
  DashboardPage,
  SupportPage,
  AboutPage,
  ErrorPage,
} from './components';

import './css/main.scss';

const links = {
  home: '/',
  path: '/path',
  catalog: '/catalog',
  support: '/support',
  login: '/login',
  about: '/about',
  dashboard: '/dashboard',
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isAuthenticated: false,
    }
  }

  componentWillMount = () => {
    const { history, location } = this.props;
    console.log(history);
    console.log(location);
  }

  /**
   * get user data from database
   */
  componentDidMount = () => {
    const user = tokenServices.getToken();
    if (user) {
      this.setState({ isAuthenticated: true, user });
    }
  }

  handleLogin = () => {
    const user = tokenServices.getToken();
    if (user) {
      this.setState({ isAuthenticated: true, user });
    } else {
      this.setState({ isAuthenticated: null, user: null });
    }
  }

  
  render() {
    const { courses } = DUMMY_DATA;
    //const { user, isAuthenticated } = this.state;
    return (
      <div id="start-page">
        <NavBar links={links} isAuthenticated={this.state.isAuthenticated} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path={links.path}
            render={props => <PathPage {...props} path_data={DUMMY_DATA} />}
          />
          <Route exact path={links.catalog} component={CatalogPage} />
          <Route
            path={links.login}
            render={props => (
              <RegistrationPage
                {...props}
                handleLogin={this.handleLogin}
              />
            )}
          />
          <ProtectedDashboardRoute
            path="/dashboard"
            isAuthenticated={this.state.isAuthenticated}
            component={DashboardPage}
          />
          <Route exact path={links.support} component={SupportPage} />
          <Route exact path={links.about} component={AboutPage} />

          <Redirect exact from="/courses/:course" to="/courses/:course/0" />
          <Route
            path="/courses/:course/:order"
            render={props => {
              const courseObj = courses.find(
                course => course.slug === props.match.params.course,
              );
              if (!courseObj) return <ErrorPage />;
              return (
                <LessonPage
                  {...props}
                  lessons={courseObj.lessons}
                  curr_lesson_num={parseInt(props.match.params.order, 10)}
                  base_path={props.match.params.course}
                />
              );
            }}
          />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      order: PropTypes.string,
      course: PropTypes.string,
    }),
  }).isRequired,
};

export default App;
