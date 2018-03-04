import './tickets.less';
import $ from 'jquery';
import { Column } from '../../../utils/utils';

const tickets = require('./tickets.html');

export default class Tickets extends Column {
  init() {
    super.init(tickets);

    $('.book-in-modal-btn-wrapper').find('button').click(() => {
      $('#exampleModalCenter').modal('show');
    });
  }
};
