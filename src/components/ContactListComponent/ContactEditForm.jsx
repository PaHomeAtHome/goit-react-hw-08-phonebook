import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ErrorText } from 'components/ContactForm/ContactFormStyled';
import {
  FormStyled,
  ButtonStyled,
} from 'components/LogInForm/LogInForm.styled';

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

export const ContactEditForm = ({
  contact,
  updateContact,
  isLoading,
  token,
  isEdited,
  setIsEdited,
}) => {
  const { name, number, id } = contact;

  return (
    <>
      <Formik
        initialValues={{ name: name, number: number }}
        validationSchema={validationSchema}
        onSubmit={value => {
          if (
            value.name.toLowerCase().trim() === name.toLowerCase().trim() &&
            value.number.toLowerCase().trim() === number.toLowerCase().trim()
          ) {
            alert('Contact has no changes');
            return;
          }
          updateContact({ value, id, token });
          setIsEdited(!isEdited);
        }}
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
              pattern={NAME_INPUT_PATTERN}
              title={NAME_INPUT_TITLE}
            />
            <FormError name="name" />
          </FormStyled.Group>
          <FormStyled.Group className="mb-4">
            <FormStyled.Label htmlFor="number">Number</FormStyled.Label>

            <FormStyled.Control
              as={Field}
              name="number"
              type="tel"
              placeholder="Number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title={NUMBER_INPUT_TITLE}
            />
            <FormError name="number" />
          </FormStyled.Group>
          {(!isLoading && (
            <ButtonStyled type="submit">Rename contact</ButtonStyled>
          )) || <p>Renaming contact...</p>}
        </FormStyled>
      </Formik>
    </>
  );
};
