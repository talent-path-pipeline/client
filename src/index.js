import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import ReactGA from 'react-ga';

ReactGA.initialize(process.env.TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(<Router><Route component={App} /></Router>, document.getElementById('root'));
