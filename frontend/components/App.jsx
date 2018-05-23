import React from 'react';
import HomeContainer from './home/home_container';
import SessionFormContainer from './session_form/session_form_container';
import ProfileContainer from './profile/profile_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Switch>
      <ProtectedRoute exact path='/' component={HomeContainer} />
      <AuthRoute path='/login' component={SessionFormContainer} />
      <AuthRoute path='/signup' component={SessionFormContainer} />
      <ProtectedRoute path='/users/:userId' component={ProfileContainer} />
    </Switch>
  </div>
);

export default App;
