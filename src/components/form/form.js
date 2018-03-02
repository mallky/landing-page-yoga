import './form.less';
import $ from 'jquery';
import { toJSON, Column } from '../../../utils/utils';

const contact = require('./form.html');

export default class Contact extends Column {
  init () {
    super.init(contact);

    this.validateForm();

    const agreement = this.root.querySelector('#agreement');

    agreement.addEventListener('click', (e) => {
      e.preventDefault();

      const newWin = window.open("about:blank", "hello");

      newWin.document.write(require('../../../agreement/agreement.html'));
    }, false);
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
              $('#exampleModalCenter').modal('hide');
              $('#done').modal('show');
            }
            if (xhr.status !== 200) {
              console.log('MISTAKE');
              $('#exampleModalCenter').modal('hide');
              $('#fail').modal('show');
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