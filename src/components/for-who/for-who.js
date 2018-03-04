import './for-who.less';
import { Column } from '../../../utils/utils';

const bookIn = require('./for-who.html');

export default class BookIn extends Column {
  init () {
    super.init(bookIn);
  }
}
