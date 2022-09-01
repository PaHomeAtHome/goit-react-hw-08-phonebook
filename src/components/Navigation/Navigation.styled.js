import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

export const Header = styled(Navbar)`
  display: block;
  padding-bottom: 0;
`;

export const NavStyled = styled(Nav)``;

export const ErrorBox = styled.div`
  background-color: black;
`;

export const Output = styled.div`
  box-sizing: border-box;
  border: 1px solid #dee2e6;
  border-top: none;
  border-bottom-left-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
`;

export const Path = styled(LinkContainer)``;

export const Item = styled(NavStyled.Item)`
  /* & .nav-link.active {
    background-color: rgb(13, 110, 253);
    color: white;
  } */
`;

export const Link = styled(NavStyled.Link)``;
