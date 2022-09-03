import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';

export const Slider = styled(Carousel)`
  .carousel-caption p {
    background-color: #00000099;
    margin-bottom: 0;
    padding: 5px;
  }
  .carousel-indicators button {
    border: 1px solid #00000011;
  }

  .carousel-control-next-icon,
  .carousel-control-prev-icon {
    background-color: #00000033;
  }
  max-width: 900px;
  max-height: 700px;
  margin: auto;
`;
