// import _ from 'lodash';
import './style.css';

const todos = [
  {
    index: 1,
    description: 'Go to the GYM',
    completed: true,
  },
  {
    index: 2,
    description: 'Get breakfast',
    completed: true,
  },
  {
    index: 3,
    description: 'Start programming',
    completed: false,
  },
  {
    index: 4,
    description: 'Go to bed',
    completed: false,
  },
];

todos.sort((a, b) => a.index - b.index);

const todoList = document.querySelector('.to-do-list');

for (let i = 0; i < todos.length; i += 1) {
  todoList.innerHTML += `
  <li>
    <div class="task-div">
      <input type="checkbox" />
      <p>${todos[i].description}</p>
    </div>
    <i class="fa-solid fa-trash"></i>
  </li>`;
}