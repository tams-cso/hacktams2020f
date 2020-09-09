import React from 'react';
import './fonts.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Noise from './components/noise';
import Landing from './components/landing';

const App = () => (
  <Router>
    

    <Switch>
      
      <Route path='/registration'>
        <div>
          Registration
        </div>
      </Route>
      <Route path='/'>
        <div>
          <Noise />
          <Landing />
        </div>
      </Route>
    </Switch>
  </Router>
)

export default App;
