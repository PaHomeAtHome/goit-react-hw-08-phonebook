import styled from 'styled-components';
export const Element = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  margin-left: 10px;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 5px;

  &:hover {
    scale: 1.1;
    background-color: red;
  }
`;

export const Edit = styled(Button)`
  &:hover {
    scale: 1.1;
    background-color: yellow;
  }
`;

export const Number = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline solid red 4px;
    text-underline-position: under;
  }
`;

export const Contact = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;
