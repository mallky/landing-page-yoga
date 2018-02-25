import _ from 'lodash';
import { createComponent } from '../../../utils/utils';

const carousel = require('./carousel.html');

export default class Carousel {
  constructor (root) {
    this.root = root;
  }

  init () {
    const _carousel = _.template(carousel)();

    this.root.appendChild(createComponent(_carousel));
  }
}
 