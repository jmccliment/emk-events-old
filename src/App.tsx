import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Shell from './components/shell';
import Routes from './Routes';

import './App.css';

const App = () => (
  <BrowserRouter>
    <Shell>
      <Routes />
    </Shell>
  </BrowserRouter>
);

export default App;
