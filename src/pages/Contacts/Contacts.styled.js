import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const ContactsEl = styled.div`
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
  width: 80px;
  margin-bottom: 15px;

  &:not(:first-child) {
    margin-left: 30px;
  }
`;
