import './main.less';

import _ from 'lodash';
import { createComponent } from '../../../utils/utils';

const main = require('./main.html');

export default class Main {
  constructor (root) {
    this.root = root;
  }
  
  init () {
    const _main = _.template(main)();

    this.root.appendChild(createComponent(_main));
  }
}