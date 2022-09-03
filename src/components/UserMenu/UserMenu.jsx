import { authorizationApi } from 'redux/API/api';
import { changeToken } from 'redux/actions/actions';
import { useDispatch } from 'react-redux';
import {
  User,
  LogOutButton,
  Profile,
  Menu,
  Toggle,
  Options,
} from './UserMenu.styled';

export const UserMenu = ({ token, user }) => {
  const [logOut] = authorizationApi.useLogOutMutation();
  const dispatch = useDispatch();
  const { name, email } = user;
  return (
    <User>
      <Menu>
        <Toggle drop={'end'} id="dropdown-basic">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fillRule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
          &nbsp;
          <h6 style={{ margin: 0 }}>{name}</h6> &nbsp;
        </Toggle>

        <Options align={{ md: 'start' }}>
          <Menu.Item as={'div'}>
            <Profile>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-envelope-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
              </svg>
              &nbsp;
              {email}
            </Profile>
          </Menu.Item>
          <Menu.Item as={'div'}>
            <LogOutButton
              type="button"
              variant="danger"
              onClick={() => {
                logOut(token);
                dispatch(changeToken({}));
              }}
            >
              Log out
            </LogOutButton>
          </Menu.Item>
        </Options>
      </Menu>
    </User>
  );
};
