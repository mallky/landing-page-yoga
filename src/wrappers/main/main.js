import './main.less';
import { Column } from '../../../utils/utils';
import Speakers from '../../components/speakers/speakers';
import ModalWindow from '../../components/modal-window/modal-window';
import DoneModalWindow from '../../components/send-done/send-done';
import FailModalWindow from '../../components/send-failed/send-fail';
import BookIn from '../../components/book-in/book-in';
import Contacts from '../../components/contacts/contacts';

const main = require('./main.html');

export default class Main extends Column {
  init () {
    super.init(main);

    const speakers = new Speakers(this.root.querySelector('main'));
    const modalWindow = new ModalWindow(this.root.querySelector('.modal-btn-wrapper'));
    const doneModalWindow = new DoneModalWindow(this.root.querySelector('.done-btn-wrapper'));
    const failModalWindow = new FailModalWindow(this.root.querySelector('.fail-btn-wrapper'));
    const bookIn = new BookIn(this.root.querySelector('main'));
    const contacts = new Contacts(this.root.querySelector('main'));

    speakers.init();
    modalWindow.init();
    doneModalWindow.init();
    failModalWindow.init();
    bookIn.init();
    contacts.init();
  }
}