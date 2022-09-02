import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ErrorText } from 'components/ContactForm/ContactFormStyled';
import { handleSignInSubmit } from 'functions/handleSubmit';
import { authorizationApi } from 'redux/API/api';
import { useDispatch } from 'react-redux';
import { changeToken } from 'redux/actions/actions';
import { useEffect } from 'react';
import { ButtonStyled, FormStyled } from '../LogInForm/LogInForm.styled';

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const validationSchema = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().required(),
  password: Yup.string().required().min(7),
});

export const SignUpForm = () => {
  const [signUp, { isLoading, data }] = authorizationApi.useSignUpMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(changeToken(data));
    }
    return;
  }, [dispatch, data]);

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(value, { resetForm }) =>
        handleSignInSubmit(value, resetForm, signUp)
      }
      enableReinitialize
    >
      <FormStyled as={Form} autoComplete="off">
        <FormStyled.Group className="mb-3">
          <FormStyled.Label htmlFor="name">Name</FormStyled.Label>

          <FormStyled.Control
            as={Field}
            name="name"
            type="text"
            placeholder="Name"
          />
          <FormStyled.Text as={FormError} name="name" />
        </FormStyled.Group>
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
        {(!isLoading && <ButtonStyled type="submit">Sign in</ButtonStyled>) || (
          <p>Signing in...</p>
        )}
      </FormStyled>
    </Formik>
  );
};
