import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/Login';
import Result from './pages/Result';
import Header from './controls/Header';
import Layout from './controls/Layout';

function AppRouter() {
  return (
    <Router>
      <Header />
      <Layout>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/result" component={Result} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default AppRouter;
