import styled from 'styled-components';
export const ContactListStyled = styled.ul`
  padding: 20px 0px;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 380px));
  gap: 10px;
  justify-content: center;

  @media screen and (max-width: 360px) {
    margin-left: -10px;
  }
`;
