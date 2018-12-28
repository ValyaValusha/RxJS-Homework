import './style.scss'
import printWelcomeMessage from './welcome.js'
import greeter from './message';

printWelcomeMessage();
let outputMessage = 'from TS file';
let outputMessageContainer = document.createElement('div');
outputMessageContainer.innerHTML = greeter(outputMessage);
document.body.appendChild(outputMessageContainer);

function addAdminPageLink(){
  let adminPageLink = document.createElement('a');
  adminPageLink.setAttribute('href', document.location + 'admin/admin.html');
  adminPageLink.innerHTML = 'Go to admin page';
  document.body.appendChild(adminPageLink);
}

function addVisitorPageLink(){
  let VisitorPageLink = document.createElement('a');
  VisitorPageLink.setAttribute('href', document.location + 'visitor/visitor.html');
  VisitorPageLink.innerHTML = 'Go to visitor page';
  document.body.appendChild(VisitorPageLink);
}

addAdminPageLink();
addVisitorPageLink();