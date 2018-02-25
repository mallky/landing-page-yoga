import _ from 'lodash';
import { createComponent } from '../../../utils/utils';

const doneModalWindow = require('./send-done.html');

export default class DoneModalWindow {
  constructor(root) {
    this.root = root;
  }

  init() {
    const _doneModalWindow = _.template(doneModalWindow)();

    this.root.appendChild(createComponent(_doneModalWindow));
  }
}