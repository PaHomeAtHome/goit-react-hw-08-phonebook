import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { useState } from 'react';

export const Contacts = ({ token }) => {
  const [isShown, setIsShown] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  return (
    <>
      <button onClick={() => setIsSearching(current => !current)}>🔍</button>
      <button onClick={() => setIsShown(current => !current)}>➕</button>
      {isSearching && <Filter />}
      {isShown && <ContactForm token={token} />}
      <ContactList token={token} />
    </>
  );
};
