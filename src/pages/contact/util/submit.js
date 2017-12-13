// @flow
export const submit = async values => {
  const formInput = {
    ...values,
    subject: `Hello from schaurecycling.com`
  };

  console.log(formInput);
};
