import './contacts.less';
import { Column } from '../../../utils/utils';

const contacts = require('./contacts.html');

export default class Contacts extends Column {
  init () {
    super.init(contacts);
  }
}
