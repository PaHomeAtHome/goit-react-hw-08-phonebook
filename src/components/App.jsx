import { ContactForm } from './ContactForm/ContactForm';
import Container from './Container/Container';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { UserMenu } from './UserMenu/UserMenu';
import { useSelector, useDispatch } from 'react-redux';
import { authorizationApi } from 'redux/API/api';
import { changeToken } from 'redux/actions/actions';

export function App() {
  const token = useSelector(state => state.token.token);
  const [logOut] = authorizationApi.useLogOutMutation();
  const dispatch = useDispatch();

  return (
    <Container>
      <h2>Phonebook</h2>

      <UserMenu />
      {token && (
        <>
          <button
            type="button"
            onClick={() => {
              logOut(token);
              dispatch(changeToken(null));
            }}
          >
            Log out
          </button>
          <h2>Contacts</h2>
          <ContactForm token={token} />
          <Filter />
          <ContactList token={token} />
        </>
      )}
    </Container>
  );
}
