import { Outlet } from 'react-router-dom';
import {
  Header,
  NavStyled,
  Path,
  Item,
  Link,
  Output,
  BadgeStyled,
  Title,
} from './Navigation.styled';
import { Suspense } from 'react';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Navigation = ({ token, user }) => {
  return (
    <>
      <Header>
        {token ? (
          <UserMenu token={token} user={user} />
        ) : (
          <NavStyled fill variant="tabs" bg="light">
            <Item>
              <Path to="/">
                <Link>
                  <Title>
                    <BadgeStyled>Phonebook</BadgeStyled>
                  </Title>
                </Link>
              </Path>
            </Item>
            <Item>
              <Path to="/login">
                <Link>Log in</Link>
              </Path>
            </Item>
            <Item>
              <Path to="/register">
                <Link>Sign up</Link>
              </Path>
            </Item>
          </NavStyled>
        )}
      </Header>
      <Output>
        <Suspense fallback={<div>Loading...</div>}></Suspense>
        <Outlet />
      </Output>
    </>
  );
};
