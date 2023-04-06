import html from './app.html?raw';
import todoStore from '../store/todo.store';
import { renderTodos } from '../use-cases';

const elementIds = {
  todoList: '.todo-list',
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
};
