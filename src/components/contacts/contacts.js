import './contacts.less';
import _ from 'lodash';
import { createComponent } from '../../../utils/utils';

const contacts = require('./contacts.html');

export default class Contacts {
  constructor (root) {
    this.root = root;
  }

  init () {
    const _contacts = _.template(contacts)({item: 'item'});

    this.root.appendChild(createComponent(_contacts));
  }
}
