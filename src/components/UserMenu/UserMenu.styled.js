import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';

export const User = styled.div``;

export const LogOutButton = styled(Button)`
  width: 100%;
`;

export const Profile = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Menu = styled(Dropdown)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Toggle = styled(Menu.Toggle)`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: none;

  &[aria-expanded='true'] {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    box-shadow: none;
  }
`;

export const Options = styled(Menu.Menu)`
  text-align: center;
`;

// export const LogOutButton = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-left: 20px;
//   padding: 5px 10px;
//   border: none;
//   color: inherit;
//   font-size: inherit;
//   border-radius: 5px;
//   background-color: red;
//   cursor: pointer;
// `;
