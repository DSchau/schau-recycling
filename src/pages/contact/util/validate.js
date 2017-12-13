// @flow
export const validate = values => {
  let errors = {};

  if (!values.name) {
    errors.name = 'Name is required';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  }

  if (!values.message) {
    errors.message = 'Message is required';
  }
  return errors;
};
