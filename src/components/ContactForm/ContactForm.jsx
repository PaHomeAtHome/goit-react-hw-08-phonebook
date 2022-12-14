import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ErrorText } from './ContactFormStyled';
import { useAddContactMutation, useGetContactByNameQuery } from 'redux/API/api';
import { handleContactSubmit } from 'functions/handleSubmit';
import {
  FormStyled,
  ButtonStyled,
} from 'components/LogInForm/LogInForm.styled';
import { Spinner } from 'react-bootstrap';

const NAME_INPUT_TITLE =
  "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
const NAME_INPUT_PATTERN =
  "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
const NUMBER_INPUT_TITLE =
  'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +';

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
  number: Yup.string().required(),
});

export const ContactForm = ({ token }) => {
  const { data } = useGetContactByNameQuery(token);
  const [addContact, { isLoading }] = useAddContactMutation();

  return (
    <>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={validationSchema}
        onSubmit={(value, { resetForm }) =>
          handleContactSubmit(value, resetForm, data, addContact, token)
        }
        enableReinitialize
      >
        <FormStyled as={Form} autoComplete="off" className="mb-4">
          <FormStyled.Group>
            <FormStyled.Control
              as={Field}
              className="mb-3"
              name="name"
              type="text"
              placeholder="Name"
              pattern={NAME_INPUT_PATTERN}
              title={NAME_INPUT_TITLE}
            />
            <FormError name="name" />
          </FormStyled.Group>
          <FormStyled.Group>
            <FormStyled.Control
              as={Field}
              className="mb-4"
              name="number"
              type="tel"
              placeholder="Number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title={NUMBER_INPUT_TITLE}
            />
            <FormError name="number" />
          </FormStyled.Group>
          {(!isLoading && (
            <ButtonStyled type="submit">Add contact</ButtonStyled>
          )) || <Spinner animation="border" variant="primary" />}
        </FormStyled>
      </Formik>
    </>
  );
};
