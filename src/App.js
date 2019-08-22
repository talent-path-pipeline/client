import React from 'react';
import './css/main.css';
import { PathPage } from './components';
import DUMMY_PATH from './DUMMY_DATA';

function App() {
  return <PathPage path_data={DUMMY_PATH} />;
}

export default App;
