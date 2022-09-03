import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';

import styled from 'styled-components';

export const Element = styled.li`
  display: flex;
  justify-content: stretch;
  align-items: center;
  padding: 0;
  min-height: 38px;
`;

export const ButtonStyled = styled(Button)`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  line-height: 1;
  max-height: 100%;

  padding: 0;
  position: static;
  min-width: 40px;
  max-width: 40px;
`;

export const Edit = styled(ButtonStyled)`
  border-left: 1px solid #dee2e6;

  &:hover {
    background-color: #ffc107;
    color: white;
    border-color: #ffc107;
    /* border-right: 1px solid white; */
  }
`;

export const Number = styled(ButtonStyled)`
  max-width: 150px;
  min-width: 150px;

  &:hover {
    background-color: #ffc107;
    color: white;
    border-color: #ffc107;
    border-left: 1px solid white;
  }
`;

export const Contact = styled(ButtonGroup)`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: stretch;
  align-items: center;
  position: static;
  line-height: 1;
  word-wrap: break-word;
  overflow-wrap: anywhere;

  svg {
    min-width: 16px;
  }

  > .btn {
    position: static;
  }

  > .btn-check:checked + .btn,
  > .btn-check:focus + .btn,
  > .btn:hover,
  > .btn:focus,
  > .btn:active,
  > .btn.active {
    z-index: 0;
  }

  > .btn:not(:first-child),
  > .btn-group:not(:first-child) {
    margin-left: 0;
  }

  span {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: stretch;
    align-items: center;
    background-color: #198754;
    color: white;
    border-radius: inherit;
    /* border: 1px solid #dee2e6; */
    padding: 10px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;

    svg {
      margin-right: 5px;
    }
  }
`;
