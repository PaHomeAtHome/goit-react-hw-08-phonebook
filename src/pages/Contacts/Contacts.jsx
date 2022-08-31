import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { useState } from 'react';
import { ContactButton, ContactsEl, ButtonsEl } from './Contacts.styled';

export const Contacts = ({ token }) => {
  const [isShown, setIsShown] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  return (
    <ContactsEl>
      <ButtonsEl>
        <ContactButton onClick={() => setIsSearching(current => !current)}>
          🔍
        </ContactButton>
        <ContactButton onClick={() => setIsShown(current => !current)}>
          ➕
        </ContactButton>
      </ButtonsEl>
      {isSearching && <Filter />}
      {isShown && <ContactForm token={token} />}
      <ContactList token={token} />
    </ContactsEl>
  );
};
