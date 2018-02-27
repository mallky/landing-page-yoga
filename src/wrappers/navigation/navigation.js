import './navigation.less';
import { createComponent, scroll, Column } from '../../../utils/utils';

const navigation = require('./navigation.html');

export default class Navigation extends Column {
  init() {
    this.root.appendChild(createComponent(navigation));

    this.onLinkClick();
  }

  onLinkClick () {
    scroll('#navbar-example');
  }
};
