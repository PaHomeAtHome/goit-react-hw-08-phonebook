import PropTypes from 'prop-types';

import { Element, Button } from './ContactListComponentStyled';
import { useDeleteContactMutation } from 'redux/API/api';

export const ContactListComponent = ({ contact, token }) => {
  const [deleteContact, { status }] = useDeleteContactMutation();

  return (
    <Element>
      {(status === 'uninitialized' && (
        <>
          <p>
            {contact.name}: {contact.number}
          </p>
          <Button
            type="button"
            onClick={() => deleteContact({ contact, token })}
          >
            Delete
          </Button>
        </>
      )) || <p>Deleting...</p>}
    </Element>
  );
};

ContactListComponent.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
  }),
};
