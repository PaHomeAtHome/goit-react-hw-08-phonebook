import { authorizationApi } from 'redux/API/api';
import { changeToken } from 'redux/actions/actions';
import { useDispatch } from 'react-redux';

export const UserMenu = ({ token, user }) => {
  const [logOut] = authorizationApi.useLogOutMutation();
  const dispatch = useDispatch();
  const { name, email } = user;
  return (
    <>
      <p>
        User: {name}, email: {email}
      </p>
      <button
        type="button"
        onClick={() => {
          logOut(token);
          dispatch(changeToken({}));
        }}
      >
        Log out
      </button>
    </>
  );
};
