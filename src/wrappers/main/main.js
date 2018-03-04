import './main.less';
import { animateWhenVisible, Column } from '../../../utils/utils';
import Speakers from '../../components/speakers/speakers';
import ModalWindow from '../../components/modal-window/modal-window';
import DoneModalWindow from '../../components/send-done/send-done';
import FailModalWindow from '../../components/send-failed/send-fail';
import ForWho from '../../components/for-who/for-who';
import Contacts from '../../components/contacts/contacts';
import Tickets from '../../components/tickets/tickets';
import Event from '../../components/event/event';

const main = require('./main.html');

export default class Main extends Column {
  init () {
    super.init(main);

    const speakers = new Speakers(this.root.querySelector('main'));
    const event = new Event(this.root.querySelector('main'));
    const modalWindow = new ModalWindow(this.root.querySelector('.modal-btn-wrapper'));
    const doneModalWindow = new DoneModalWindow(this.root.querySelector('.done-btn-wrapper'));
    const failModalWindow = new FailModalWindow(this.root.querySelector('.fail-btn-wrapper'));
    const forWho = new ForWho(this.root.querySelector('main'));
    const tickets = new Tickets(this.root.querySelector('main'));
    const contacts = new Contacts(this.root.querySelector('main'));

    event.init();
    speakers.init();
    modalWindow.init();
    doneModalWindow.init();
    failModalWindow.init();
    forWho.init();
    tickets.init();
    contacts.init();

    animateWhenVisible();
  }
}