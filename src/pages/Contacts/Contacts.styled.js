import styled from 'styled-components';

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

export const ContactButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  border: none;
  color: inherit;
  font-size: inherit;
  border-radius: 5px;
  cursor: pointer;

  &:not(:first-child) {
    margin-left: 30px;
  }
`;
