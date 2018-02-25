import _ from 'lodash';
import { createComponent } from '../../../utils/utils';

const failModalWindow = require('./send-failed.html');

export default class FailModalWindow {
  constructor(root) {
    this.root = root;
  }

  init() {
    const _failModalWindow = _.template(failModalWindow)();

    this.root.appendChild(createComponent(_failModalWindow));
  }
}