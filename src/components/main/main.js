import './main.less';

import _ from 'lodash';
import { createComponent } from '../../../utils/utils';
import Speakers from '../speakers/speakers';
import ModalWindow from '../modal-window/modal-window';
import DoneModalWindow from '../send-done/send-done';
import FailModalWindow from '../send-failed/send-fail';

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

    speakers.init();
    modalWindow.init();
    doneModalWindow.init();
    failModalWindow.init();
  }
}