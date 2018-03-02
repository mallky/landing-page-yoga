import { Column } from '../../../utils/utils';
import Contact from '../form/form';

const modalWindow = require('./modal-window.html');

export default class ModalWindow extends Column {
  init() {
    super.init(modalWindow);

    this.modalBody = this.root.querySelector('.modal-body');

    const _form = new Contact(this.modalBody);
    _form.init();
  }
}