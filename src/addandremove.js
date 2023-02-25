import {
    //   clearAll,
      form,
      arr,
      editFormArr,
    } from './index.js';
export function addTodo() {
    form.addEventListener('submit', () => {
    const input = document.querySelector('.addlist');
    
    const toDo = input.value;
    if (toDo) {
      arr.push({
        name: toDo,
        completed: false,
        index: arr.length + 1,
      });

      localStorage.setItem('List', JSON.stringify(arr));
    }
      input.value = '';
      console.log('added')
  });
}

export function editTask() {
    editFormArr.forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const { value } = form.querySelector('.text');
        const id = Number(form.querySelector('.text').id);
        const newArr = JSON.parse(localStorage.getItem('List')) || [];
        newArr.forEach((item) => {
          if (item.index === id) {
            item.name = value;
            localStorage.setItem('List', JSON.stringify(newArr));
            location.reload();
          }
        });
      });
    });
  }
  
  export function removeElement(task, trash) {
    const tasks = Array.from(task);
    tasks.forEach((task) => {
      task.addEventListener('click', () => {
        tasks.forEach((task) => {
          task.classList.remove('focus');
        });
        task.classList.add('focus');
      });
    });
  
    const trashes = Array.from(trash);
    trashes.forEach((trash) => {
      trash.addEventListener('click', (e) => {
        if (e.target) {
          const parent = e.target.parentElement;
          const childWithId = Number(parent.querySelector('.check-box').id);
          const newArr = JSON.parse(localStorage.getItem('List')) || [];
          const newArrFiltered = newArr.filter((task) => task.index !== childWithId);
          localStorage.setItem('List', JSON.stringify(newArrFiltered));
          location.reload();
        }
      });
    });
  }
  