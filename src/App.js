import React from 'react';
// import PropTypes from 'prop-types';
import { Switch, Route} from 'react-router-dom';
import { NavBar, HomePage, PathInfo, CatalogPage, LessonPage, SupportPage, DashboardPage } from './components';
import {DUMMY_DATA as dummyprops } from './components/lesson/DUMMYDATA.js';

import './css/main.scss';


function App() {
  return (
  /* Insert app stuff here */
    <div id="start-page">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/path" component={PathInfo} />
        <Route exact path="/catalog" component={CatalogPage} />
        <Route exact path="/lesson" render={() => <LessonPage {...dummyprops} />} />
        <Route exact path="/support" component={SupportPage} />
        <Route exact path="/dashboard" component={DashboardPage} />
      </Switch>
    </div>
  );
}

export default App;
