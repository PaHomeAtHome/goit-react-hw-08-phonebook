import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import Badge from 'react-bootstrap/Badge';

export const Header = styled(Navbar)`
  display: block;
  padding-bottom: 0;
`;

export const NavStyled = styled(Nav)`
  border-bottom: none;
  .nav-link {
    border-bottom: 1px solid #dee2e6;
  }
`;

export const ErrorBox = styled.div`
  background-color: black;
`;

export const Output = styled.div`
  box-sizing: border-box;
  border: 1px solid #dee2e6;
  border-top: none;
  border-bottom-left-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;

  padding: 20px;
`;

export const Path = styled(LinkContainer)``;

export const Item = styled(NavStyled.Item)`
  /* & .nav-link.active {
    background-color: rgb(13, 110, 253);
    color: rgb(13, 110, 253);
  } */
`;

export const Link = styled(NavStyled.Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75px;
`;

export const BadgeStyled = styled(Badge)`
  background-color: rgba(13, 110, 253);
  &:hover {
    background-color: #0a58ca;
  }
`;

export const Title = styled.h1`
  margin: 0;
`;
