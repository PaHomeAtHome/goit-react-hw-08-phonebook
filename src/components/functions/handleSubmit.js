export const handleContactSubmit = async (
  value,
  resetForm,
  data,
  addContact
) => {
  const { name } = value;

  if (data.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
    alert(name + ' is already in contacts');

    return;
  }

  await addContact(value)
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
      resetForm();
      console.log(response);
      return response;
    })
    .catch(error => {
      console.log(error);
      return error;
    });
};
