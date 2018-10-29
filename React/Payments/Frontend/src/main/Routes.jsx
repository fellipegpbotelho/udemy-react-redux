import React from 'react';
import {
  Router, Route, Redirect, hashHistory, IndexRoute,
} from 'react-router';

import App from './App';
import Dashboard from '../Dashboard/Dashboard';
import BillingCycle from '../BillingCycle/BillingClycle';

export default () => (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="billingCycles" component={BillingCycle} />
    </Route>
    <Redirect from="*" to="/" />
  </Router>
);
