export default function printWelcomeMessage(){
  let element = document.createElement('div');
  element.innerHTML = ('Welcome to this website!');
  document.body.appendChild(element);
}