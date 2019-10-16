import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

/**
 * Higher Order Component that wraps the Router component to obfuscate authentication in routes.
 * @param {Object} props Props Variables
 * @param {Symbol} props.component Rendered component
 * @param {String} props.redirectLink Link for default route
 * @param {bool} props.isSomething A boolean flag
 */
const ProtectedDashboardRoute = ({ component: Component, isSomething, redirectLink, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isSomething ? (
        <Component {...props} {...rest} />
      ) : (
        <Redirect to={{ pathname: redirectLink, state: { from: props.location } }} />
      )
    }
  />
);

ProtectedDashboardRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isSomething: PropTypes.bool.isRequired,
  redirectLink: PropTypes.string.isRequired,
  location: PropTypes.object, // FIXME: Check out how to get this to not yell with .isRequired
};

export default ProtectedDashboardRoute;
