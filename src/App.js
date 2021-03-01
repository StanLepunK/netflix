/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

import { Home, Signin, Signup, Browse } from './pages/h';
import * as ROUTES from './constants/routes_constants';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.SIGN_IN}>
          <Signin />
          {/* <p>I will be the sign in page</p> */}
        </Route>
        <Route path={ROUTES.SIGN_UP}>
          <Signup />
          {/* <p>I will be the sign up page</p> */}
        </Route>
        <Route path={ROUTES.BROWSE}>
          {/* <p>I will be the browse page</p> */}
          <Browse />
        </Route>
        <Route path={ROUTES.HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
