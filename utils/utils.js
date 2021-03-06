import $ from 'jquery';
import _ from 'lodash';

const createElement = (option) => {
  const {tag, className, attr} = option;
  const element = $(`<${tag}></${tag}>`);

  element.addClass(className);
  element.attr(attr);
  
  return {
    jq: element,
    node: element[0]
  };
};

const createComponent = (component) => {
  return $(component)[0];
};

const toJSON = function (form) {
  const obj = {};
  const elements = form.querySelectorAll('input');
  const textarea = form.querySelector('textarea');
  const select = form.querySelector('select');

  obj['text'] = textarea.value;
  obj['whom'] = select.value;

  for (let i = 0; i < elements.length; ++i) {
    const element = elements[i];
    const name = element.name;
    const value = element.value;

    if (name) {
      obj[ name ] = value;
    }
  }

  return JSON.stringify(obj);
};

const scroll = (parent) => {
  $(parent).on('click', 'a', function (event) {
    event.preventDefault();

    const id  = $(this).attr('href');
    const top = $(id).offset().top;

    $('body, html').animate({scrollTop: top}, 1000);
  });
};

const chooseAnimation = (i) => {
  switch (i) {
    case 0:
      return 'bounceInDown';
    case 1:
    case 3:
      return 'fadeInLeft';
    case 2:
    case 4:
      return 'fadeInRight';
    case 5:
      return 'fadeIn';
    case 6:
    case 8:
    case 10:
      return 'zoomInLeft';
    case 7:
    case 9:
    case 11:
      return 'zoomInRight';
    case 12:
      return 'flipInX';
    case 13:
      return 'zoomIn';
    case 14:
      return 'fadeIn';
    case 15:
      return 'fadeInLeft';
    case 16:
      return 'fadeInRight';
    default:
      return 'bounceInUp';
  }
};

const animateWhenVisible = () => {
  const $animItems = $('.animated');

  $animItems.addClass('invisible');

  $(document).scroll(() => {
    $animItems.each((i, item) => {
      const itemPosData = item.getBoundingClientRect();
      const top = itemPosData.top;
      const bottom = itemPosData.bottom;
      const height = itemPosData.height;
      const isVisible = (top + height >= 0) && (height + window.innerHeight >= bottom + 150);
      const animation = chooseAnimation(i);

      isVisible && $(item).removeClass('invisible').addClass(animation);
    });
  });
};

class Column {
  constructor (root) {
    this.root = root;
  }
  
  init (component, opt = {}) {
    const _component = _.template(component)(opt);
    
    this.root.appendChild(createComponent(_component));
  }
}

export {
  createElement,
  createComponent,
  animateWhenVisible,
  toJSON,
  scroll,
  Column
};