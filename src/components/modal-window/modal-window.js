import _ from 'lodash';
import { createComponent } from '../../../utils/utils';
import Contact from '../contact/contact';

const modalWindow = require('./modal-window.html');

export default class ModalWindow {
  constructor(root) {
    this.root = root;
  }

  init() {
    const _modalWindow = _.template(modalWindow)();

    this.root.appendChild(createComponent(_modalWindow));
    
    const _form = new Contact(this.root.querySelector('.modal-body'));
    _form.init();
  }
}