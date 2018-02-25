import './main.less';

import _ from 'lodash';
import { createComponent } from '../../../utils/utils';
import Speakers from '../speakers/speakers';
import ModalWindow from '../modal-window/modal-window';
import DoneModalWindow from '../send-done/send-done';
import FailModalWindow from '../send-failed/send-fail';
import BookIn from '../book-in/book-in';
import Contacts from '../contacts/contacts';
import Carousel from '../carousel/carousel';

const main = require('./main.html');

export default class Main {
  constructor (root) {
    this.root = root;
  }
  
  init () {
    const _main = createComponent(_.template(main)());

    this.root.appendChild(_main);

    const speakers = new Speakers(_main);
    const modalWindow = new ModalWindow(this.root.querySelector('.modal-btn-wrapper'));
    const doneModalWindow = new DoneModalWindow(this.root.querySelector('.done-btn-wrapper'));
    const failModalWindow = new FailModalWindow(this.root.querySelector('.fail-btn-wrapper'));
    const bookIn = new BookIn(_main);
    const contacts = new Contacts(_main);
    const carousel = new Carousel(_main);

    speakers.init();
    modalWindow.init();
    doneModalWindow.init();
    failModalWindow.init();
    bookIn.init();
    contacts.init();
    carousel.init();
  }
}