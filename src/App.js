import React from 'react';
import './fonts.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Noise from './components/noise';
import Landing from './components/landing';

import RegistrationForm from './components/RegistrationForm/registration-form';
import VolunteerForm from './components/VolunteerForm/volunteer-form';

const App = () => (
  <Router>
    <Switch>
      <Route path='/register'>
        <RegistrationForm />
      </Route>
      <Route path='/mentor'>
        <VolunteerForm />
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
