import '../style.scss'
import printWelcomeMessage from '../welcome.js'

function component() {
  printWelcomeMessage();
  let element = document.createElement('div');
  element.innerHTML = 'hello, Valentyna!';
  element.classList.add('hello');
  return element;
}

document.body.appendChild(component());