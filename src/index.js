import 'normalize.css';
import './style.css';
import autosize from 'autosize';
import fetch from 'unfetch';

import { EMAIL_URL } from './constants';

let submitted = false;

autosize(document.querySelectorAll('textarea'));

const form = document.querySelector('form');

form.addEventListener('submit', ev => {
  ev.preventDefault();
  if (!submitted) {
    const elements = Array.from(form.querySelectorAll('input')).concat(form.querySelector('textarea'));

    const emailBody = elements.reduce((merged, el) => {
      merged[el.getAttribute('id')] = el.value;
      return merged;
    }, {});

    const valid = Object.keys(emailBody)
      .every(key => emailBody[key].trim() !== '');

    if (valid) {
      fetch(EMAIL_URL, {
        method: 'post',
        body: JSON.stringify(emailBody)
      })
        .then(response => {
          if (response.ok) {
            const button = form.querySelector('button');
            const innerText = button.innerText;

            button.setAttribute('disabled', true);
            button.innerText = 'Thanks. We got your message!';
            submitted = true;

            elements
              .forEach(el => el.value = '');

            setTimeout(() => {
              button.removeAttribute('disabled');
              button.innerText = innerText;
              submitted = false;
            }, 3000);
          }
        })
    }
  }
});
