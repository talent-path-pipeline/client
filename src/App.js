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
        {/* <Route
          exact
          path={links.lesson}
          render={() => <Redirect to="/lesson/0"/>}
        /> */}
        <Redirect exact from={links.lesson} to={`${links.lesson}/0`} />
        <Route path={`${links.lesson}/:order`}
          render={props => <LessonPage {...props} lessons={course1.lessons} curr_lesson_num={parseInt(props.match.params.order,10)} path={links.lesson} />}
        />
        <Route exact path={links.catalog} component={CatalogPage} />
        {/* <Route exact path={links.support} component={SupportPage} /> */}
        {/* <Route exact path={links.dashboard} component={DashboardPage} /> */}
      </Switch>
    </div>
  );
}

App.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      order: PropTypes.string,
    }),
  }).isRequired,
};

export default App;
