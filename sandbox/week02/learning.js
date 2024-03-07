const body = document.body;
const newSection = document.createElement('section');

const newHeading = document.createElement('h2');
newHeading.innerText = 'CSe 121b';
const newPa = document.createElement('p');
newPa.innerText = 'Wlcome to JavaScript Language';

newSection.appendChild(newHeading);
newSection.appendChild(newPa);

body.appendChild(newSection);



