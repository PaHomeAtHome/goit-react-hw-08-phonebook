import { Button } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import styled from 'styled-components';

export const Element = styled.li`
  display: flex;
  justify-content: left;
  align-items: center;
`;

export const ButtonStyled = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 38px;
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

  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  padding-left: 10px;

  &:hover {
    background-color: #198754;
    color: white;
  }
`;
