import './footer.less';
import _ from 'lodash';
import { createComponent, scroll, Column } from '../../../utils/utils';

const footer = require('./footer.html');
const opt = {item: 'item'};

export default class Footer extends Column {
  init () {
    super.init(footer, opt);

    this.onBackToTop();
  }

  onBackToTop () {
    scroll('footer');
  }
}
