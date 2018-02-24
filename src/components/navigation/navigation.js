import './navigation.less';
import { createComponent } from '../../../utils/utils';
import $ from 'jquery';

const navigation = require('./navigation.html');

export default class Navigation {
  constructor (root) {
    this.root = root;
  }
  
  init() {
    this.root.appendChild(createComponent(navigation));

    this.onLinkClick();
  }

  onLinkClick () {
    $('#navbar-example').on('click', 'a', function (event) {
      event.preventDefault();

      const id  = $(this).attr('href');
      const top = $(id).offset().top;

      $('html').animate({scrollTop: top}, 1000);
    });
  }
};
