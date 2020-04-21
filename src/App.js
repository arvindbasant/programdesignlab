import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import RaiseHandPrivacy from './_html_serve';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/raisehand_privacy_document">
          <RaiseHandPrivacy />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
