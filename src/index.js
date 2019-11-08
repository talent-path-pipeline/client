import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import App from './App';

ReactGA.initialize(process.env.TRACKING_ID);

ReactDOM.render(<App />, document.getElementById('root'));
