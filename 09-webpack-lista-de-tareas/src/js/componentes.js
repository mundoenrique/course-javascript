import { todoList } from '..';
import { Todo } from '../clasess';

// Referencias en el HTML
const divTodoList = document.querySelector('.todo-list');
const textInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');

export const crearTodoHtml = (todo) => {
  const { tarea, id, completado } = todo;
  const htmlTodo = `
  <li class="${completado ? 'completed' : ''}" data-id="${id}">
    <div class="view">
      <input class="toggle" type="checkbox" ${completado ? 'checked' : ''} />
      <label>${tarea}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template" />
  </li>
  `;
  const div = document.createElement('div');

  div.innerHTML = htmlTodo;
  divTodoList.append(div.firstElementChild);

  return div.firstElementChild;
};

// Eventos
textInput.addEventListener('keyup', (event) => {
  if (event.keyCode === 13 && textInput.value.length > 0) {
    const nuevoTodo = new Todo(textInput.value);
    todoList.nuevoTodo(nuevoTodo);
    crearTodoHtml(nuevoTodo);
    textInput.value = '';
  }
});

divTodoList.addEventListener('click', (event) => {
  const nombreElemento = event.target.localName;
  const todoElemento = event.target.parentElement.parentElement;
  const todoId = todoElemento.getAttribute('data-id');

  if (nombreElemento.includes('input')) {
    todoList.marcarCompletado(todoId);
    todoElemento.classList.toggle('completed');
  } else if (nombreElemento.includes('button')) {
    todoList.eliminarTodo(todoId);
    divTodoList.removeChild(todoElemento);
  }
});

btnBorrar.addEventListener('click', () => {
  todoList.eliminarCompletados();

  for (let i = divTodoList.children.length - 1; i >= 0; i--) {
    const elemnto = divTodoList.children[i];

    if (elemnto.classList.contains('completed')) {
      divTodoList.removeChild(elemnto);
    }
  }
});
