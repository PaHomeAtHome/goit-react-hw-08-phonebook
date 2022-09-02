import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';

import styled from 'styled-components';

export const Element = styled.li`
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 0;
`;

export const ButtonStyled = styled(Button)`
  height: 38px;
  position: static;

  svg {
    line-height: 1;
  }
`;

export const Edit = styled(ButtonStyled)`
  border-left: 1px solid #dee2e6;
  position: static;
  &:hover {
    background-color: #0d6efd;
    color: white;
    border-color: #0d6efd;
  }
`;

export const Number = styled(ButtonStyled)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #dee2e6;
  &:hover {
    background-color: #0d6efd;
    color: white;
    border-color: #0d6efd;
  }
`;

export const Contact = styled(ButtonGroup)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: static;

  .btn-group > .btn {
    position: static;
  }

  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  padding-left: 10px;

  &:hover {
    background-color: #198754;
    color: white;
  }
`;
