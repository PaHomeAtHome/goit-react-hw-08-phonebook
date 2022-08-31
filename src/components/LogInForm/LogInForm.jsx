import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ErrorText } from 'components/ContactForm/ContactFormStyled';
import { handleSignInSubmit } from 'functions/handleSubmit';
import { authorizationApi } from 'redux/API/api';
import { useDispatch } from 'react-redux';
import { changeToken } from 'redux/actions/actions';
import { useEffect } from 'react';

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
      <Form autoComplete="off">
        <div>
          <label htmlFor="email">E-mail</label>
          <div>
            <Field name="email" type="email" placeholder="E-mail" />
            <FormError name="email" />
          </div>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <div>
            <Field name="password" type="password" placeholder="Password" />
            <FormError name="password" />
          </div>
        </div>
        {(!Loading && <button type="submit">Log in</button>) || (
          <p>Logging in...</p>
        )}
      </Form>
    </Formik>
  );
};
