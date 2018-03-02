import './navigation.less';
import { scroll, Column } from '../../../utils/utils';

const navigation = require('./navigation.html');

export default class Navigation extends Column {
  init() {
    super.init(navigation);

    this.onLinkClick();
  }

  onLinkClick () {
    scroll('#navbar-example');
  }
};
