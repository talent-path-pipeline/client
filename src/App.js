import React, { Component } from 'react';
import { Switch, Router, Route, Redirect } from 'react-router-dom';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
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
  Footer,
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

const history = createBrowserHistory();
history.listen(location => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      only_path: {
        title: 'Path Title',
        subtitle: 'Path Subtitle',
        image_name: 'path-image-main.jpg',
        courses: [],
      },
      isAuthenticated: false,
    };
  }

  componentDidMount() {
    ReactGA.pageview(window.location.pathname);

    contentAPI.getAllNestedPaths().then(contentResp => {
      if (contentResp.data[0]) {
        this.setState({ only_path: contentResp.data[0] });
      }
    });
    const user = tokenServices.getToken();
    if (user) {
      this.setState({ isAuthenticated: true });
    }
  }

  handleLogIn = () => {
    const user = tokenServices.getToken();
    if (user) {
      this.setState({ isAuthenticated: true });
    } else {
      this.setState({ isAuthenticated: null });
    }
  };

  handleLogOut = () => {
    tokenServices.removeToken();
    this.setState({ isAuthenticated: false });
  };

  render() {
    const { only_path, isAuthenticated } = this.state;
    const { courses } = only_path;

    return (
      <Router history={history}>
        <div id="start-page">
          <NavBar
            links={links}
            isAuthenticated={isAuthenticated}
            handleLogOut={this.handleLogOut}
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
              handleLogIn={this.handleLogIn}
            />
            {/* Dashboard Protected Route */}
            <ProtectedRoute
              path={links.dashboard}
              isAuthenticated={isAuthenticated}
              redirectLink={links.login}
              component={DashboardPage}
              handleLogOut={this.handleLogOut}
            />

            <Route exact path={links.support} component={SupportPage} />
            <Route exact path={links.about} component={AboutPage} />

            <Redirect exact from="/courses/:course" to="/courses/:course/0" />
            {/* <Route
              exact
              path="/courses/:course"
              render={props => {
                // TODO: calculate lesson_num if logged in
                // const courseObj = courses.find(
                //   course => course.slug === props.match.params.course,
                // );
                // if (!courseObj) {
                //   return <ErrorPage />;
                // }
                let lesson_num = 0;
                if (isAuthenticated) {
                  // do stuff
                }
                props.history.push(`${props.match.url}/${lesson_num}`);
              }}
            /> */}
            <Route
              path="/courses/:course/:lesson_num"
              render={props => {
                const courseObj = courses.find(
                  course => course.slug === props.match.params.course,
                );
                const lesson_num = parseInt(props.match.params.lesson_num, 10);
                if (
                  !courseObj ||
                  lesson_num >= courseObj.lessons.length ||
                  lesson_num < 0
                ) {
                  return <ErrorPage />;
                }
                const prevCourse = courses.find(
                  course => course.order === courseObj.order - 1,
                );
                const nextCourse = courses.find(
                  course => course.order === courseObj.order + 1,
                );
                return (
                  <LessonPage
                    {...props}
                    course_title={courseObj.title}
                    lessons={courseObj.lessons}
                    curr_lesson_num={lesson_num}
                    course_slug={courseObj.slug}
                    prev_slug={prevCourse ? prevCourse.slug : undefined}
                    next_slug={nextCourse ? nextCourse.slug : undefined}
                  />
                );
              }}
            />
            <Route component={ErrorPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
