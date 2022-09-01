import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ErrorText } from 'components/ContactForm/ContactFormStyled';
import { handleSignInSubmit } from 'functions/handleSubmit';
import { authorizationApi } from 'redux/API/api';
import { useDispatch } from 'react-redux';
import { changeToken } from 'redux/actions/actions';
import { useEffect } from 'react';
import { ButtonStyled, FormStyled } from './LogInForm.styled';

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const validationSchemaLogIn = Yup.object({
  email: Yup.string().required(),
  password: Yup.string().required().min(7),
});

export const LogInForm = () => {
  const [logIn, { Loading, data }] = authorizationApi.useLogInMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(changeToken(data));
    }
    return;
  }, [dispatch, data]);

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchemaLogIn}
      onSubmit={(value, { resetForm }) =>
        handleSignInSubmit(value, resetForm, logIn)
      }
      enableReinitialize
    >
      <FormStyled as={Form} autoComplete="off">
        <FormStyled.Group>
          <label htmlFor="email">E-mail</label>
          <div>
            <FormStyled.Control
              as={Field}
              name="email"
              type="email"
              placeholder="E-mail"
            />
            <FormError name="email" />
          </div>
        </FormStyled.Group>
        <FormStyled.Group>
          <label htmlFor="password">Password</label>
          <div>
            <FormStyled.Control
              as={Field}
              name="password"
              type="password"
              placeholder="Password"
            />
            <FormError name="password" />
          </div>
        </FormStyled.Group>
        {(!Loading && <ButtonStyled type="submit">Log in</ButtonStyled>) || (
          <p>Logging in...</p>
        )}
      </FormStyled>
    </Formik>
  );
};
