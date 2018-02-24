import './style.less';
import 'bootstrap';
import Navigation from './components/navigation/navigation';
import Footer from './components/footer/footer';
import Main from './components/main/main';

class App {
  init () {
    this.root = document.getElementById('root');
    const navigation = new Navigation(this.root);
    const footer = new Footer(this.root);
    const main = new Main(this.root);

    navigation.init();
    main.init();
    footer.init();
  }
}

const app = new App();

app.init();

if (process.env.NODE_ENV !== 'production') {
  console.log('Dev mode On!');
}
