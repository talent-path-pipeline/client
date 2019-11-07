import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
// import DUMMY_DATA from './DUMMY_DATA';
import { contentAPI, tokenServices, ProtectedRoute } from './utils';
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

class App extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        order: PropTypes.string,
        course: PropTypes.string,
      }),
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      only_path: {
        title: 'Path Title',
        subtitle: 'Path Subtitle',
        image_name: 'path-image-main.jpg',
        courses: [],
      },
      user: null,
      isAuthenticated: false,
    };
  }

  componentDidMount() {
    contentAPI.getAllNestedPaths().then(contentResp => {
      if (contentResp.data[0]) {
        this.setState({ only_path: contentResp.data[0] });
      }
    });
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
  };

  handleLogoff = () => {
    tokenServices.removeToken();
    this.setState({ isAuthenticated: false, user: null });
  };

  render() {
    const { only_path, user, isAuthenticated } = this.state;
    const { courses } = only_path;

    return (
      <div id="start-page">
        <NavBar
          links={links}
          isAuthenticated={isAuthenticated}
          handleLogoff={this.handleLogoff}
        />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path={links.path}
            render={props => <PathPage {...props} path_data={only_path} />}
          />
          <Route exact path={links.catalog} component={CatalogPage} />
          {/* Login Protected Route */}
          <ProtectedRoute
            path={links.login}
            isAuthenticated={!isAuthenticated}
            redirectLink={links.dashboard}
            component={RegistrationPage}
            handleLogin={this.handleLogin}
          />
          {/* Dashboard Protected Route */}
          <ProtectedRoute
            path={links.dashboard}
            isAuthenticated={isAuthenticated}
            redirectLink={links.login}
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
              const prevCourse = courses.find(
                course => course.order === courseObj.order - 1,
              );
              const nextCourse = courses.find(
                course => course.order === courseObj.order + 1,
              );
              const order = parseInt(props.match.params.order, 10);
              if (!courseObj || order >= courseObj.lessons.length) return <ErrorPage />;
              return (
                <LessonPage
                  {...props}
                  course_title={courseObj.title}
                  lessons={courseObj.lessons}
                  curr_lesson_num={order}
                  base_path={courseObj.slug}
                  prev_slug={prevCourse ? prevCourse.slug : undefined}
                  next_slug={nextCourse ? nextCourse.slug : undefined}
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

export default App;
