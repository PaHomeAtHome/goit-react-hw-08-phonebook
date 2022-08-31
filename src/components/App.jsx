import { ContactForm } from './ContactForm/ContactForm';
import Container from './Container/Container';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { SignInForm } from './SignInForm/SignInForm';
import { useSelector } from 'react-redux';
import { UserMenu } from './UserMenu/UserMenu';

export function App() {
  const token = useSelector(state => state.token.token);
  const user = useSelector(state => state.token.user);

  return (
    <Container>
      <h2>Phonebook</h2>

      {token ? (
        <>
          <UserMenu token={token} user={user} />
          <h2>Contacts</h2>
          <ContactForm token={token} />
          <Filter />
          <ContactList token={token} />
        </>
      ) : (
        <SignInForm />
      )}
    </Container>
  );
}
