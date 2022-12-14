import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';

import { SignUpForm } from './SignUpForm/SignUpForm';
import { LogInForm } from './LogInForm/LogInForm';
import { Contacts } from 'pages/Contacts/Contacts';
import { Home } from 'pages/Home/Home';
import Container from './Container/Container';

export function App() {
  const token = useSelector(state => state.token.token);
  const user = useSelector(state => state.token.user);

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Navigation token={token} user={user} />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              !token ? <SignUpForm /> : <Navigate to="/contacts" replace />
            }
          />
          <Route
            path="/login"
            element={
              !token ? <LogInForm /> : <Navigate to="/contacts" replace />
            }
          />
          <Route
            path="/contacts"
            element={
              token ? (
                <Contacts token={token} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Container>
  );
}
