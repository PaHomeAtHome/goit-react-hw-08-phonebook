import PropTypes from 'prop-types';

import { Element, Button, Edit } from './ContactListComponentStyled';
import {
  useDeleteContactMutation,
  useUpdateContactMutation,
} from 'redux/API/api';

export const ContactListComponent = ({ contact, token }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const [updateContact, { isLoading: updating }] = useUpdateContactMutation();
  const { name, number, id } = contact;
  const newContact = { name, number };

  return (
    <Element>
      {(!isLoading && !updating && (
        <>
          <p>
            {name}
            <Edit
              type="button"
              onClick={() => {
                const name = prompt('Please type new name');
                if (name) {
                  newContact.name = name;
                  updateContact({ newContact, token, id });
                }
              }}
            >
              ✏️
            </Edit>
            : {number}
            <Edit
              type="button"
              onClick={() => {
                const number = prompt('Please type new number');
                if (number) {
                  newContact.number = number;
                  updateContact({ newContact, token, id });
                }
              }}
            >
              ✏️
            </Edit>
          </p>
          <Button
            type="button"
            onClick={() => deleteContact({ contact, token })}
          >
            Delete
          </Button>
        </>
      )) ||
        (isLoading && <p>Deleting...</p>) ||
        (updating && <p>Renaming...</p>)}
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
