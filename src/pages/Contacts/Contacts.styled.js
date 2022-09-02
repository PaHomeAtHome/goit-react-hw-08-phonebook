import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const ContactsEl = styled.div`
  padding: 5px 10px;
  color: inherit;
  font-size: 18px;
`;

export const ButtonsEl = styled(ContactsEl)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContactButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;

  &:not(:first-child) {
    margin-left: 30px;
  }
`;
