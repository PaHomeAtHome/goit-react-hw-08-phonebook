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
          <NavStyled fill justify variant="tabs" bg="light">
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
              <Path to="/contacts">
                <Link>
                  <UserMenu token={token} user={user} />
                </Link>
              </Path>
            </Item>
          </NavStyled>
        ) : (
          <NavStyled fill justify variant="tabs" bg="light">
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
                <Link>
                  <h6>Log in</h6>
                </Link>
              </Path>
            </Item>
            <Item>
              <Path to="/register">
                <Link>
                  <h6>Sign up</h6>
                </Link>
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
