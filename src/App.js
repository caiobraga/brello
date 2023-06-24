import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoginScreen from './ui/features/login';
import SignupScreen from './ui/features/login/signup';
import ForumScreen from './ui/features/forum';
import DashboardScreen from './ui/features/dashbord';
import ProjectScreen from './ui/features/projects'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginScreen} />
        <Route path="/signup" component={SignupScreen} />
        <Route path="/forum" component={ForumScreen} />
        <Route path="/dashbord" component={DashboardScreen} />
        <Route path="/projects" component={ProjectScreen} />
      </Switch>
    </Router>
  );
};

export default App;
