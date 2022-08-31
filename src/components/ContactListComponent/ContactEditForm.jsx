import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ErrorText } from 'components/ContactForm/ContactFormStyled';

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
            value.name.toLowerCase() === name.toLowerCase() &&
            value.number.toLowerCase() === number.toLowerCase()
          ) {
            alert('Number and name has no changes');
            return;
          }
          updateContact({ value, id, token });
          setIsEdited(!isEdited);
        }}
        enableReinitialize
      >
        <Form autoComplete="off">
          <div>
            <label htmlFor="name">Name</label>
            <div>
              <Field
                name="name"
                type="text"
                placeholder="Name"
                pattern={NAME_INPUT_PATTERN}
                title={NAME_INPUT_TITLE}
              />
              <FormError name="name" />
            </div>
          </div>
          <div>
            <label htmlFor="number">Number</label>
            <div>
              <Field
                name="number"
                type="tel"
                placeholder="Number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title={NUMBER_INPUT_TITLE}
              />
              <FormError name="number" />
            </div>
          </div>
          {(!isLoading && <button type="submit">Rename contact</button>) || (
            <p>Renaming contact...</p>
          )}
        </Form>
      </Formik>
    </>
  );
};
