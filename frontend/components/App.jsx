import React from 'react';
import HomeContainer from './home/home_container';
import SessionFormContainer from './session_form/session_form_container';
import PostFormContainer from './post_form/post_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Route exact path='/' component={SessionFormContainer} />
    <ProtectedRoute path='/posts' component={HomeContainer} />
    <ProtectedRoute path='/upload' component={PostFormContainer} />
    <AuthRoute path='/login' component={SessionFormContainer} />
    <AuthRoute path='/signup' component={SessionFormContainer} />
  </div>
);

export default App;
