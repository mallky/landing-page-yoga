import './footer.less';
import _ from 'lodash';
import { createComponent } from '../../../utils/utils';

const footer = require('./footer.html');

export default class Footer {
  constructor (root) {
    this.root = root;
  }
  
  init () {
    const _footer = _.template(footer)({item: 'item'});

    this.root.appendChild(createComponent(_footer));
  }
}
