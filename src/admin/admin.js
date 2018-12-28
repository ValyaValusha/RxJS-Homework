import '../style.scss'
import printWelcomeMessage from '../welcome.js'

function component() {
  printWelcomeMessage();
  let element = document.createElement('div');
  element.innerHTML = 'hello, Admin!';
  element.classList.add('hello');
  return element;
}

document.body.appendChild(component());