import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ErrorText } from 'components/ContactForm/ContactFormStyled';
import { handleSignInSubmit } from 'functions/handleSubmit';
import { authorizationApi } from 'redux/API/api';
import { useDispatch } from 'react-redux';
import { changeToken } from 'redux/actions/actions';
import { useEffect } from 'react';
import { ButtonStyled, FormStyled } from './LogInForm.styled';
import { Spinner } from 'react-bootstrap';
import alertify from 'alertifyjs';

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
  const [logIn, { Loading, data, isError }] =
    authorizationApi.useLogInMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(changeToken(data));
    }

    if (isError) {
      if (isError) {
        alertify.alert('\u00a0', 'Wrong password or email');
      }
    }
    return;
  }, [dispatch, data, isError]);

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
        <FormStyled.Group className="mb-3">
          <FormStyled.Label htmlFor="email">E-mail</FormStyled.Label>

          <FormStyled.Control
            as={Field}
            name="email"
            type="email"
            placeholder="E-mail"
          />
          <FormStyled.Text as={FormError} name="email" />
        </FormStyled.Group>
        <FormStyled.Group className="mb-4">
          <FormStyled.Label htmlFor="password">Password</FormStyled.Label>

          <FormStyled.Control
            as={Field}
            name="password"
            type="password"
            placeholder="Password"
          />
          <FormStyled.Text as={FormError} name="password" />
        </FormStyled.Group>
        {(!Loading && <ButtonStyled type="submit">Log in</ButtonStyled>) || (
          <Spinner animation="border" variant="primary" />
        )}
      </FormStyled>
    </Formik>
  );
};
