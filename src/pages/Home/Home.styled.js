import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';

export const Slider = styled(Carousel)`
  .carousel-caption p {
    margin-bottom: 0;
    background-color: #00000099;
  }
  .carousel-indicators button {
    border: 1px solid #00000099;
  }
`;
