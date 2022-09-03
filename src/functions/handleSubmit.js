import alertify from 'alertifyjs';
alertify.defaults.transition = 'slide';
alertify.defaults.theme.ok = 'btn btn-primary';
alertify.defaults.theme.cancel = 'btn btn-danger';
alertify.defaults.theme.input = 'form-control';

export const handleContactSubmit = async (
  value,
  resetForm,
  data,
  addContact,
  token
) => {
  const { name } = value;

  if (
    data.find(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    )
  ) {
    alertify.alert('\u00a0', name.trim().bold() + ' is already in contacts');

    return;
  }
  await addContact({ value, token })
    .then(response => {
      resetForm();
      return response;
    })
    .catch(error => {
      console.log(error);
      return error;
    });
};

export const handleSignInSubmit = async (value, resetForm, signIn) => {
  await signIn(value)
    .then(response => {
      // resetForm();
      return response;
    })
    .catch(error => {
      console.log(error);
      return error;
    });
};
