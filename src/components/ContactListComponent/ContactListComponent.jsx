import PropTypes from 'prop-types';
import { useState } from 'react';
import { ContactEditForm } from './ContactEditForm';

import {
  Element,
  Button,
  Edit,
  Number,
  Contact,
} from './ContactListComponentStyled';
import {
  useDeleteContactMutation,
  useUpdateContactMutation,
} from 'redux/API/api';

export const ContactListComponent = ({ contact, token }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const [updateContact, { isLoading: updating }] = useUpdateContactMutation();
  const [isEdited, setIsEdited] = useState(false);
  const { name, number } = contact;

  return (
    <>
      {(!isLoading && !updating && (
        <>
          <Element>
            <Contact>
              👤 {name} {'\u00a0'}
              <Number href={`tel:${number}`}>📞 {number}</Number>
              <Edit
                type="button"
                onClick={() => {
                  setIsEdited(current => !current);
                }}
              >
                ✏️
              </Edit>
              <Button
                type="button"
                onClick={() => deleteContact({ contact, token })}
              >
                ❌
              </Button>
            </Contact>
          </Element>

          {isEdited && (
            <ContactEditForm
              contact={contact}
              updateContact={updateContact}
              isLoading={updating}
              token={token}
              isEdited={isEdited}
              setIsEdited={setIsEdited}
            />
          )}
        </>
      )) ||
        (isLoading && <p>Deleting...</p>) ||
        (updating && <p>Renaming...</p>)}
    </>
  );
};

ContactListComponent.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
  }),
};
