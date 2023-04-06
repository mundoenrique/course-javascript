import html from './app.html?raw';
import todoStore, { Filters } from '../store/todo.store';
import { renderTodos, renderPending } from '../use-cases';

const elementIds = {
  clearCompleted: '.clear-completed',
  todoList: '.todo-list',
  newTodoInput: '#new-todo-input',
  todoFilters: '.filtro',
  pendingCountLabel: '#pending-count',
};
/**
 *
 * @param {string} elementId
 */
export const App = (elementId) => {
  const displayTodos = () => {
    const todos = todoStore.getTodos(todoStore.getCurrentFilter());
    renderTodos(elementIds.todoList, todos);
    updatePendingCount();
  };

  const updatePendingCount = () => {
    renderPending(elementIds.pendingCountLabel);
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
  const clearCompletedButton = document.querySelector(elementIds.clearCompleted);
  const filtersLIs = document.querySelectorAll(elementIds.todoFilters);

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

  clearCompletedButton.addEventListener('click', () => {
    todoStore.deleteCompleted();
    displayTodos();
  });

  filtersLIs.forEach((element) => {
    element.addEventListener('click', (element) => {
      filtersLIs.forEach((el) => el.classList.remove('selected'));
      element.target.classList.add('selected');
      console.log(element.target.text);
      switch (element.target.text) {
        case 'Todos':
          todoStore.setFilter(Filters.All);
          break;
        case 'Pendientes':
          todoStore.setFilter(Filters.Pendig);
          break;
        case 'Completados':
          todoStore.setFilter(Filters.Completed);
          break;
      }
      displayTodos();
    });
  });
};
