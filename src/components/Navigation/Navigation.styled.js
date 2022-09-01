import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

export const Header = styled(Navbar)`
  display: block;
`;

export const NavStyled = styled(Nav)``;

export const ErrorBox = styled.div`
  background-color: black;
`;

export const Path = styled(LinkContainer)``;

export const Item = styled(NavStyled.Item)`
  & .nav-link.active {
    background-color: rgb(13, 110, 253);
    color: white;
  }
`;

export const Link = styled(NavStyled.Link)``;
