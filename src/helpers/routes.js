import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';

IsUserRedirect.propTypes = {
  children: PropTypes.object,
  rest_props: PropTypes.object,
  user: PropTypes.object,
  logged_in_path: PropTypes.string,
};

export function IsUserRedirect({
  user,
  logged_in_path,
  children,
  ...rest_props
}) {
  return (
    <Route
      {...rest_props}
      render={() => {
        if (!user) {
          return children;
        }

        if (user) {
          return (
            <Redirect
              to={{
                pathname: logged_in_path,
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}

ProtectedRoute.propTypes = {
  children: PropTypes.object,
  rest_props: PropTypes.object,
  user: PropTypes.object,
};

export function ProtectedRoute({ user, children, ...rest_props }) {
  return (
    <Route
      {...rest_props}
      render={({ location }) => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: 'signin',
                state: { from: location },
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}
