import ContainerStyle from './ContainerStyles';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';

function Container({ children }) {
  return (
    <ContainerStyle>
      <Col>{children}</Col>
    </ContainerStyle>
  );
}

export default Container;

Col.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
