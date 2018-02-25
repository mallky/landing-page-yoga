import _ from 'lodash';
import { createComponent } from '../../../utils/utils';
import Contact from '../form/form';

const modalWindow = require('./modal-window.html');

export default class ModalWindow {
  constructor(root) {
    this.root = root;
  }

  init() {
    const _modalWindow = _.template(modalWindow)();

    this.root.appendChild(createComponent(_modalWindow));
    this.modalBody = this.root.querySelector('.modal-body');

    const _form = new Contact(this.modalBody);
    _form.init();
  }
}