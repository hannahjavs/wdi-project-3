import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from '../utility/ProtectedRoute';

import PlansIndex from '../plans/PlansIndex';
import PlansShow from  '../plans/PlansShow';
import PlansNew from '../plans/PlansNew';
import PlansEdit from '../plans/PlansEdit';
import UserProfile from '../plans/UserProfile';
import NoRoute from './NoRoute';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={PlansIndex} />
      <ProtectedRoute exact path="/plans/new" component={PlansNew} />
      <ProtectedRoute exact path="/plans/:id/edit" component={PlansEdit} />
      <Route exact path="/plans/:id" component={PlansShow} />

      {/* USER PROFILE PAGE ROUTE */}
      <Route exact path="/users/:id" component={UserProfile} />

      <Route component={NoRoute} />
    </Switch>
  );
};

export default Routes;
