import './style.less';
import 'bootstrap';
import $ from 'jquery';
import Navigation from './wrappers/navigation/navigation';
import Footer from './wrappers/footer/footer';
import Main from './wrappers/main/main';

class App {
  init () {
    this.root = document.getElementById('root');
    const navigation = new Navigation(this.root);
    const footer = new Footer(this.root);
    const main = new Main(this.root);

    navigation.init();
    main.init();
    footer.init();
    
    $('#mymap').append($('#mymap-body'));

    $(document.head).append('<link rel="shortcut icon" href="/images/logo2.jpg" type="image/jpg">');
  }
}

const app = new App();

app.init();

if (process.env.NODE_ENV !== 'production') {
  console.log('Dev mode On!');
}
