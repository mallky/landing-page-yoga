import './footer.less';
import _ from 'lodash';
import { createComponent, scroll, Column } from '../../../utils/utils';

const footer = require('./footer.html');

export default class Footer extends Column {
  init () {
    const _footer = _.template(footer)({item: 'item'});

    this.root.appendChild(createComponent(_footer));
    this.onBackToTop();
  }

  onBackToTop () {
    scroll('footer');
  }
}
