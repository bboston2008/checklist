const enter = document.querySelector('#enter-items'),
      userInput = document.querySelector('#user-input'),
      inputLength = () => userInput.value.length,
      ul = document.querySelector('ul'),
      delButton = document.querySelector('#erase'),
      active = document.getElementById('act-list'),
      activeTwo = document.getElementById('act-list-2'),
      finished = document.getElementById('fin-list'),
      response = document.getElementById('category').value,
      buttonBox = document.getElementById('button-box');

//Move Div ------
var mousePosition;
var offset = [0,0];
var isDown = false;

buttonBox.addEventListener('mousedown', function(e) {
    isDown = true;
    offset = [
        buttonBox.offsetLeft - e.clientX,
        buttonBox.offsetTop - e.clientY
    ];
}, true);

buttonBox.addEventListener('mouseup', function() {
    isDown = false;
}, true);

buttonBox.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown) {
        mousePosition = {
    
            x : event.clientX,
            y : event.clientY
    
        };
        buttonBox.style.left = (mousePosition.x + offset[0]) + 'px';
        buttonBox.style.top  = (mousePosition.y + offset[1]) + 'px';
    }
}, true);   

// Create list item ------

// const whichList = () => {
    
//     console.log(response);
// }

const addButton = () => {
    if (inputLength() > 0) { newItem() };
};

const addEnter = () => {
    if (inputLength() > 0 && event.keyCode === 13) { newItem() };
}

const newItem = () => {
    let li = document.createElement('li'),
        button = document.createElement('button'),
        response = document.getElementById('category').value;
    li.classList.add('item');
    button.innerHTML = 'DONE';
    button.onclick = moveToDo;
    button.classList.add('done-button');
    li.appendChild(button);
    li.appendChild(document.createTextNode(userInput.value));
    if (response === 'Grocery1') {
        li.classList.add('g');
        active.appendChild(li);
    } else if (response === 'ToDo1') {
        li.classList.add('t');
        activeTwo.appendChild(li);
    }
    userInput.value = '';
}

// Move items ------

const moveToDo = (evt) => {
    let button = document.createElement('button'),
        btn = evt.target,
        li = btn.closest('li');
    btn.remove();
    finished.appendChild(li).classList.add('marked');
    button.innerHTML = 'UNDO';
    button.onclick = undoToDo;
    button.classList.add('undo-button');
    li.insertBefore(button, li.firstChild);
}

const undoToDo = (evt) => {
    let button = document.createElement('button'),
        btn = evt.target,
        li = btn.closest('li'),
        response = document.getElementById('category').value;
    btn.remove();
    button.innerHTML = 'DONE';
    button.onclick = moveToDo;
    button.classList.add('done-button');
    li.insertBefore(button, li.firstChild);
    if (li.classList.contains('g')) {
        active.appendChild(li).classList.remove('marked')
    } else  if (li.classList.contains('t')) {
        activeTwo.appendChild(li).classList.remove('marked')
    }

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