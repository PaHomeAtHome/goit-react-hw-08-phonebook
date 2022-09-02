import styled from 'styled-components';
export const ContactListStyled = styled.ul`
  padding: 20px 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 5px;

  @media screen and (max-width: 360px) {
    margin-left: -10px;
  }
`;
