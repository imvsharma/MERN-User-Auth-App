import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import LoginPage from './__pages/Login/login';
import SignupPage from './__pages/Signup/signup';
import History from './__helper/history';

class App extends Component {
  render() {
    return (
      <div >
        <Router history={History}>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route path="/signup" component={SignupPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
