import React from 'react';
import './css/main.scss';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { NavBar, HomePage } from './components';
// import { LessonInfo } from './components';

function App() {
  return (
  /* Insert app stuff here */
    <div id="start-page">
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
