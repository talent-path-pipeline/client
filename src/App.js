import React from 'react';
// import PropTypes from 'prop-types';
import { Switch, Route} from 'react-router-dom';
import { NavBar, HomePage, PathInfo, CatalogPage, SupportPage, DashboardPage, RegistrationPage,LogIn  } from './components';
// import { LessonInfo } from './components';

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
        <Route exact path="/support" component={SupportPage} />
        <Route exact path="/dashboard" component={DashboardPage} />
        <Route exact path="/signup" component={RegistrationPage} />
        <Route exact path="/login" component={LogIn} />
      </Switch>
    </div>
  );
}

export default App;
