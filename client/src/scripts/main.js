import * as display from './view/displayUI.js'

// Buttons
const createBtn = document.getElementById('create-main');
const viewBtn = document.getElementById('view-main');
const updateBtn = document.getElementById('update-main');
const deleteBtn = document.getElementById('delete-main');
const searchEmployeeDelBtn = document.getElementById('search-employee-del');
const closeSucessRegister = document.getElementById('close-sucessBtn');

// Boxs
const registerBox = document.querySelector('.register-box');
const viewBox = document.querySelector('table.view-box');
const updateBox = document.querySelector('.update-box');
const deleteBox = document.querySelector('.delete-box');
const resultSearchBoxDel = document.querySelector('.result-delete-box');


// Button's Events
createBtn.addEventListener('click', () => display.changeBoxVisibility(registerBox));
viewBtn.addEventListener('click', () => display.changeBoxVisibility(viewBox));
updateBtn.addEventListener('click', () => display.changeBoxVisibility(updateBox));
deleteBtn.addEventListener('click', () => display.changeBoxVisibility(deleteBox));
closeSucessRegister.addEventListener('click', () => display.closerMessageSucess());
