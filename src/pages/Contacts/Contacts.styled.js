import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const ContactsEl = styled.div``;

export const ButtonsEl = styled(ContactsEl)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const ContactButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;

  &:not(:first-child) {
    margin-left: 30px;
  }
`;
