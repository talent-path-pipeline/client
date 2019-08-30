import React from 'react';
// import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import DUMMY_DATA from './DUMMY_DATA';
import {
  NavBar,
  HomePage,
  PathPage,
  CatalogPage,
  SupportPage,
  DashboardPage,
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
  return (
    /* Insert app stuff here */
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
        <Route exact path={links.support} component={SupportPage} />
        <Route exact path={links.dashboard} component={DashboardPage} />
      </Switch>
    </div>
  );
}

export default App;
