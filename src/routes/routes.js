import { Route, Navigate } from 'react-router-dom';

export function PublicRoute({ children, token, redirect }) {
  return (
    <Route
      render={({ location }) =>
        !token ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: redirect,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export function PrivateRoute({ children, token, redirect }) {
  return (
    <Route
      render={({ location }) =>
        token ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: redirect,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
