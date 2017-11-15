import 'normalize.css';
import './style.css';
import autosize from 'autosize';
import fetch from 'unfetch';

autosize(document.querySelectorAll('textarea'));

const form = document.querySelector('form');

form.addEventListener('submit', ev => {
  ev.preventDefault();
  const elements = Array.from(form.querySelectorAll('input')).concat(form.querySelector('textarea'));

  const valid = elements
    .some(element => element.value.trim() === '') === false;

  if (valid) {

  }
});
