import { authorizationApi } from 'redux/API/api';
import { changeToken } from 'redux/actions/actions';
import { useDispatch } from 'react-redux';
import { User, LogOutButton } from './UserMenu.styled';

export const UserMenu = ({ token, user }) => {
  const [logOut] = authorizationApi.useLogOutMutation();
  const dispatch = useDispatch();
  const { name, email } = user;
  return (
    <User>
      <p>
        👤 {name} 📧 {email}
      </p>
      <LogOutButton
        type="button"
        onClick={() => {
          logOut(token);
          dispatch(changeToken({}));
        }}
      >
        Log out
      </LogOutButton>
    </User>
  );
};
