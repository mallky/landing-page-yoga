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

export {
  createElement,
  createComponent
};