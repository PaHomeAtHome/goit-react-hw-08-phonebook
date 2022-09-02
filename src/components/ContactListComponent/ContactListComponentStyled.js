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
  max-width: 40px;
`;

export const Edit = styled(ButtonStyled)`
  border-left: 1px solid #dee2e6;

  &:hover {
    background-color: #ffc107;
    color: white;
    border-color: #ffc107;
  }
`;

export const Number = styled(ButtonStyled)`
  border-left: 1px solid #dee2e6;
  max-width: 100%;

  &:hover {
    background-color: #ffc107;
    color: white;
    border-color: #ffc107;
    border-left-color: white;
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

  span {
    display: flex;
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

  background-color: #198754;
  color: white;
  /* border: 1px solid #dee2e6; */
  padding-left: 10px;
`;
