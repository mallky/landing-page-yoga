import './book-in.less';
import $ from 'jquery';
import { Column } from '../../../utils/utils';

const bookIn = require('./book-in.html');

export default class BookIn extends Column {
  init () {
    super.init(bookIn);

    $('.book-in-modal-btn-wrapper').find('button').click(() => {
      $('#exampleModalCenter').modal('show');
    });
  }
}
