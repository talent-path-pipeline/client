import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReactGA from 'react-ga';

ReactGA.initialize(process.env.TRACKING_ID);

ReactDOM.render(<App />, document.getElementById('root'));
