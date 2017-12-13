// @flow
import fetch from 'isomorphic-fetch';

import { FORM_URL } from '../../../constants';

export const submit = async values => {
  const formInput = {
    ...values,
    subject: `Hello from schaurecycling.com`
  };

  await fetch(FORM_URL, {
    method: 'POST',
    body: JSON.stringify(formInput)
  })
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      throw new Error('Something went wrong');
    });
};
