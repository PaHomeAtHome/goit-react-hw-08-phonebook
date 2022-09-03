import { useSelector } from 'react-redux';
import { ContactListComponent } from 'components/ContactListComponent/ContactListComponent';
import { ContactListStyled } from './ContactListStyled';
import { useGetContactByNameQuery } from 'redux/API/api';
import { Spinner } from 'react-bootstrap';

export const ContactList = ({ token }) => {
  const { data, error, isLoading } = useGetContactByNameQuery(token);

  const filter = useSelector(state => state.filter.filter);
  return (
    <ContactListStyled>
      {isLoading && <Spinner animation="border" variant="primary" />}
      {error && <p>{error}</p>}
      {data &&
        [...data]
          .filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )
          .sort((a, b) =>
            a.name.localeCompare(b.name, { ignorePunctuation: true })
          )
          .map(contact => (
            <ContactListComponent
              key={contact.id}
              contact={contact}
              token={token}
            />
          ))}
    </ContactListStyled>
  );
};
