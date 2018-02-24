import $ from 'jquery';

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

  obj['text'] = textarea.value;

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

    $('html').animate({scrollTop: top}, 1000);
  });
};

export {
  createElement,
  createComponent,
  toJSON,
  scroll
};