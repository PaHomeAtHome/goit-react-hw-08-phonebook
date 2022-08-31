import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 15px 30px;
  background-color: black;
  > nav {
    display: flex;
    justify-content: space-between;
    &:hover {
      & > *:not(:hover) {
        opacity: 0.2;
      }
    }
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  transition-duration: 200ms;
  font-size: 21px;
  margin: 5px;
  box-shadow: 0px 0px 2px yellow;
  &.active {
    background-color: yellow;
    color: black;
  }
  &.active,
  &:hover {
    cursor: pointer;
  }
  &:hover:not(.active) {
    color: white;
    background-color: red;
    box-shadow: 0px 0px 2px red;
  }
`;

export const ErrorBox = styled.div`
  background-color: black;
`;
