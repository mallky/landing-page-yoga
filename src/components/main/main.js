import './main.less';

import _ from 'lodash';
import { createComponent } from '../../../utils/utils';
import Contact from '../contact/contact';
import Speakers from '../speakers/speakers';
import ModalWindow from '../modal-window/modal-window';

const main = require('./main.html');

export default class Main {
  constructor (root) {
    this.root = root;
  }
  
  init () {
    const _main = createComponent(_.template(main)());

    this.root.appendChild(_main);
    
    const contact = new Contact(_main);
    const speakers = new Speakers(_main);
    const modalWindow = new ModalWindow(this.root.querySelector('.modal-btn-wrapper'));

    speakers.init();
    contact.init();
    modalWindow.init();
  }
}