import html from './app.html?raw';
import todoStore from '../store/todo.store';
import { renderTodos } from '../use-cases';

const elementIds = {
  todoList: '.todo-list',
  newTodoInput: '#new-todo-input',
};
/**
 *
 * @param {string} elementId
 */
export const App = (elementId) => {
  const displayTodos = () => {
    const todos = todoStore.getTodos(todoStore.getCurrentFilter());
    renderTodos(elementIds.todoList, todos);
  };
  //Cuanod la función APP() SE llama
  (() => {
    const app = document.createElement('div');
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
    displayTodos();
  })();

  // Referencias HTML
  const newTodoDescrption = document.querySelector(elementIds.newTodoInput);
  const todoListUl = document.querySelector(elementIds.todoList);
  const deleteTodo = document.querySelector(elementIds.deleteTodo);

  // Listeners
  newTodoDescrption.addEventListener('keyup', (event) => {
    if (event.keyCode !== 13) return;
    if (event.target.value.trim().length === 0) return;

    todoStore.addTodo(event.target.value);
    displayTodos();
    event.target.value = '';
  });

  todoListUl.addEventListener('click', (event) => {
    const element = event.target.closest('[data-id]');
    todoStore.toggleTodo(element.getAttribute('data-id'));
    displayTodos();
  });

  todoListUl.addEventListener('click', (event) => {
    const element = event.target.closest('[data-id]');
    const isDestroyElement = event.target.className === 'destroy';
    if (!element || !isDestroyElement) return;

    todoStore.deleteTodo(element.getAttribute('data-id'));
    displayTodos();
  });
};
