import { ContactForm } from './ContactForm/ContactForm';
import Container from './Container/Container';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { UserMenu } from './UserMenu/UserMenu';

export function App() {
  return (
    <Container>
      <h2>Phonebook</h2>

      <UserMenu />

      <h2>Contacts</h2>
      <ContactForm />
      <Filter />
      <ContactList />
    </Container>
  );
}
