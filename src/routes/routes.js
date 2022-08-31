import { Route, Navigate } from 'react-router-dom';

export function PublicRoute({ children, token, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !token ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: '/home',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export function PrivateRoute({ children, token, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
