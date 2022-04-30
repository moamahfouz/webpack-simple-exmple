import _ from 'lodash';

function component() {
  const element = document.createElement('div');

  // Lodash, script we are using loadash to bundle it with scritps
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
