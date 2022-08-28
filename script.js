// Variables -----

// ----- Create
const enter = document.querySelector('#enter-items');
const userInput = document.querySelector('#user-input');
const inputLength = () => userInput.value.length;

// ----- Delete
const ul = document.querySelector('ul');
const delButton = document.querySelector('#erase');
const active = document.getElementById('act-list')
const finished = document.getElementById('fin-list');

// Create list item ------

const addButton = () => {
    if (inputLength() > 0) { newItem() };
};

const addEnter = () => {
    if (inputLength() > 0 && event.keyCode === 13) { newItem() };
}

const newItem = () => {
    let li = document.createElement('li');
    let button = document.createElement('button');
    li.classList.add('item');
    button.innerHTML = 'DONE';
    button.onclick = moveToDo;
    button.classList.add('done-button');
    li.appendChild(button);
    li.appendChild(document.createTextNode(userInput.value));
    active.appendChild(li);
    userInput.value = '';
}

// Move items ------

const moveToDo = (evt) => {
    let button = document.createElement('button');
    evt.preventDefault();
    let btn = evt.target;
    let li = btn.closest('li');
    btn.remove();
    finished.appendChild(li).classList.add('marked');
    button.innerHTML = 'UNDO';
    button.onclick = undoToDo;
    button.classList.add('undo-button');
    li.insertBefore(button, li.firstChild);
}

const undoToDo = (evt) => {
    let button = document.createElement('button');
    let btn = evt.target;
    let li = btn.closest('li');
    btn.remove();
    button.innerHTML = 'DONE';
    button.onclick = moveToDo;
    button.classList.add('done-button');
    li.insertBefore(button, li.firstChild);
    active.appendChild(li).classList.remove('marked');
}

// Clear Completed List -------

const remove = () => {
    if (finished) {
        while (finished.firstChild) {
            finished.removeChild(finished.firstChild);
        }
    } 
}


// Events ------

delButton.addEventListener('click', remove);
enter.addEventListener('click', addButton);
userInput.addEventListener('keypress', addEnter);