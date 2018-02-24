import _ from 'lodash';
import { createComponent, toJSON } from '../../../utils/utils';

const contact = require('./contact.html');

export default class Contact {
  constructor (root) {
    this.root = root;
  }

  init () {
    const _contact = _.template(contact)();

    this.root.appendChild(createComponent(_contact));

    this.validateForm();
  }

  validateForm () {
    const forms = document.getElementsByClassName('needs-validation');

    const validation = Array.prototype.filter.call(forms, (form) => {
      form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (form.checkValidity() === false) {
          event.stopPropagation();

          form.classList.add('was-validated');
        } else {
          const json = toJSON(form);
          const xhr = new XMLHttpRequest();

          xhr.open('POST', '/telegram', true);
          xhr.onload = () => {
            if (xhr.status === 200) {
              console.log('DONE');
            }
            if (xhr.status !== 200) {
              console.log('MISTAKE');
            }
          };

          xhr.setRequestHeader('Content-type', 'application/json');
          xhr.send(json);

          form.reset();
          form.classList.remove('was-validated');
        }
      }, false);
    });
  }
}