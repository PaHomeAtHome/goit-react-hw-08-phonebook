import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

export const Contacts = ({ token, user }) => {
  return (
    <>
      <ContactForm token={token} />
      <Filter />
      <ContactList token={token} />
    </>
  );
};
