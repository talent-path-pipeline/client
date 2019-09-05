import React from 'react';
// import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import DUMMY_DATA from './DUMMY_DATA';
import {
  NavBar,
  HomePage,
  PathPage,
  LessonPage,
  CatalogPage,
  // SupportPage,
  // DashboardPage,
} from './components';

import './css/main.scss';

const links = {
  home: '/',
  path: '/path',
  lesson: '/lesson', // remove this once the correct flow is linked/put together
  catalog: '/catalog',
  support: '/support',
  login: '/login',
  about: '/about',
  dashboard: '/dashboard',
};

function App() {
  const course1 = DUMMY_DATA.courses[0];
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
        <Route
          exact
          path={links.lesson}
          render={props => (
            <LessonPage
              {...props}
              lessons={course1.lessons}
              curr_lesson_num={course1.curr_lesson_num}
            />
          )}
        />
        <Route exact path={links.catalog} component={CatalogPage} />
        {/* <Route exact path={links.support} component={SupportPage} /> */}
        {/* <Route exact path={links.dashboard} component={DashboardPage} /> */}
      </Switch>
    </div>
  );
}

export default App;
