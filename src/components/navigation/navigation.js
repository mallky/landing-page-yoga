import './navigation.less';
import { createComponent } from '../../../utils/utils';

const navigation = require('./navigation.html');

export default class Navigation {
  constructor (root) {
    this.root = root;
  }
  
  init() {
    this.root.appendChild(createComponent(navigation));

    this.customizeLi();
  }
  
  customizeLi() {
    this.root.querySelector('li').classList.add('first-list');
  }
};
