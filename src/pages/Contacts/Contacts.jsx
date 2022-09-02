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
        <ContactButton
          onClick={() => {
            setIsSearching(current => !current);
            if (isShown) {
              setIsShown(current => !current);
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </ContactButton>
        <ContactButton
          onClick={() => {
            setIsShown(current => !current);
            if (isSearching) {
              setIsSearching(current => !current);
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-person-plus-fill"
            viewBox="0 0 16 16"
          >
            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            <path
              fillRule="evenodd"
              d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
            />
          </svg>
        </ContactButton>
      </ButtonsEl>
      {isSearching && <Filter />}
      {isShown && <ContactForm token={token} />}
      <ContactList token={token} />
    </ContactsEl>
  );
};
