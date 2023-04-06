import { Todo } from '../models/todo.model';
import { createTodoHTML } from './';

let element;

/**
 * Renderiza los todos
 * @param {String} elementId ID del hatml
 * @param {Todo} todos lista de todos
 */
export const renderTodos = (elementId, todos = []) => {
  if (!element) element = document.querySelector(elementId);

  if (!element) throw new Error(`Element ${elementId} not found`);

  element.innerHTML = '';

  todos.forEach((todo) => {
    element.append(createTodoHTML(todo));
  });
};
