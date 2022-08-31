import { Outlet } from 'react-router-dom';
import { Header, Link } from './Navigation.styled';
import { Suspense } from 'react';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Navigation = ({ token, user }) => {
  return (
    <>
      <Header>
        <nav>
          {token ? (
            <>
              <Link to="/contacts">Contacts</Link>
              <UserMenu token={token} user={user} />
            </>
          ) : (
            <>
              <Link to="/login">Log in</Link>
              <Link to="/register">Sign up</Link>
            </>
          )}
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
