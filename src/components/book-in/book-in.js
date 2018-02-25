import './book-in.less';
import _ from 'lodash';
import $ from 'jquery';
import { createComponent } from '../../../utils/utils';

const bookIn = require('./book-in.html');

export default class BookIn {
  constructor (root) {
    this.root = root;
  }

  init () {
    const _bookIn = _.template(bookIn)();

    this.root.appendChild(createComponent(_bookIn));

    $('.book-in-modal-btn-wrapper').find('button').click(() => {
      $('#exampleModalCenter').modal('show');
    });
  }
}
