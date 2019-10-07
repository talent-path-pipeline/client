import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import DUMMY_DATA from './DUMMY_DATA';
import {
  NavBar,
  HomePage,
  PathPage,
  LessonPage,
  CatalogPage,
  // RegistrationPage,
  // DashboardPage,
  // SupportPage,
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

function App() {
  const { courses } = DUMMY_DATA;

  return (
    <div id="start-page">
      <NavBar links={links} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path={links.path}
          render={props => <PathPage {...props} path_data={DUMMY_DATA} />}
        />
        <Route exact path={links.catalog} component={CatalogPage} />
        {/* <Route exact path={links.login} component={RegistrationPage} /> */}
        {/* <Route exact path={links.dashboard} component={DashboardPage} /> */}
        {/* <Route exact path={links.support} component={SupportPage} /> */}
        <Route exact path={links.about} component={AboutPage} />

        <Redirect exact from="/courses/:course" to="/courses/:course/0" />
        <Route
          path="/courses/:course/:order"
          render={props => (
            <LessonPage
              {...props}
              lessons={
                courses.find(course => course.slug === props.match.params.course).lessons
              }
              curr_lesson_num={parseInt(props.match.params.order, 10)}
              base_path={props.match.params.course}
            />
          )}
        />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
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
