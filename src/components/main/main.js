import './main.less';

import _ from 'lodash';
import { createComponent } from '../../../utils/utils';
import Contact from '../contact/contact';

const main = require('./main.html');

export default class Main {
  constructor (root) {
    this.root = root;
  }
  
  init () {
    const _main = createComponent(_.template(main)());

    this.root.appendChild(_main);
    
    const contact = new Contact(_main);
    contact.init();
  }
}