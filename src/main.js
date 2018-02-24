import './style.less';
import 'bootstrap';
import { createElement } from '../utils/utils';
import src from './images/1.jpg';
import Navigation from './components/navigation/navigation';

class App {
  init () {
    const imgOpt = {
      tag: 'img',
      className: 'my-img',
      attr: {
        'src': src,
        'alt': 'my photo'
      }
    };
    const img = createElement(imgOpt);

    this.root = document.getElementById('root');
    this.root.appendChild(img.node);
    const navigation = new Navigation(this.root);
    navigation.init();
  }
}

const app = new App();

app.init();

if (process.env.NODE_ENV !== 'production') {
  console.log('Dev mode On!');
}
