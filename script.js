// Variables -----

// ----- Create
const inputLength = () => userInput.value.length;
const userInput = document.querySelector('#userInput');
const button = document.querySelector('#enter');

// ----- Delete
const ul = document.querySelector('ul');
const listOne = document.querySelector('listOne');
const checkbox = document.querySelectorAll('input[type=checkbox]');
const delButton = document.querySelector('#erase');

// Create list item ------

const addButton = () => {
    if (inputLength() > 0) { newItem() };
};

const addEnter = () => {
    if (inputLength() > 0 && event.keyCode === 13) { newItem() };
}

const newItem = () => {
    let li = document.createElement('li');
    let div = document.createElement('div');
    let makeCheckbox = document.createElement('input');
    makeCheckbox.type = "checkbox";
    li.appendChild(makeCheckbox);
    makeCheckbox.classList.add('box');
    li.appendChild(document.createTextNode(userInput.value));
    ul.appendChild(div);
    div.appendChild(li);
    div.classList.add('listItemDiv');
    userInput.value = '';
}

// Strike items ------

const lineThru = (event) => event.target.closest('input').checked ?
    event.target.closest('li').classList.add('marked') :
    event.target.closest('li').classList.remove('marked');



// Remove selected items -------

const remove = () => {
    let checked = document.querySelectorAll(".box:checked");
    checked.forEach((elem) => {
        elem.parentElement.style.display = "none";
    })
}

// Events ------

delButton.addEventListener('click', remove);
button.addEventListener('click', addButton);
userInput.addEventListener('keypress', addEnter);
ul.addEventListener('click', lineThru)