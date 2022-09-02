import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';

import styled from 'styled-components';

export const Element = styled.li`
  display: flex;
  justify-content: stretch;
  align-items: center;
  padding: 0;
`;

export const ButtonStyled = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 29px;
  padding: 0;
  position: static;
  max-width: 40px;
`;

export const Edit = styled(ButtonStyled)`
  border-left: 1px solid #dee2e6;
  &:hover {
    background-color: #0d6efd;
    color: white;
    border-color: #0d6efd;
  }
`;

export const Number = styled(ButtonStyled)`
  border-left: 1px solid #dee2e6;
  max-width: 100%;

  &:hover {
    background-color: #0d6efd;
    color: white;
    border-color: #0d6efd;
    border-left-color: white;
  }
`;

export const Contact = styled(ButtonGroup)`
  display: flex;
  width: 100%;
  justify-content: stretch;
  align-items: center;
  position: static;

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
  border: 1px solid #dee2e6;
  padding-left: 10px;
`;
