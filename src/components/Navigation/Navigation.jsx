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
            ''
          ) : (
            <>
              <Link to="/login">Log in</Link>
              <Link to="/register">Sign up</Link>
            </>
          )}
        </nav>
        {token && <UserMenu token={token} user={user} />}
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
