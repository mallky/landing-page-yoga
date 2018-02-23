import './style.less';
import 'bootstrap';
import _ from 'lodash';
import $ from 'jquery';
import printMe from './print.js';
import image from './1.jpg';

const component = () => {
  let element = document.createElement('div');
  let btn = document.createElement('button');
  const img = document.createElement('img');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  $(btn).addClass('btn btn-primary btn-sm');

  img.src = image;
  
  element.appendChild(btn);
  element.appendChild(img);

  return element;
};

document.body.appendChild(component());

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

if (module.hot) {   
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}