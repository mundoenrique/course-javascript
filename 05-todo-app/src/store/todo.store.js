import { Todo } from '../todos/models/todo.model';

export const Filters = {
  All: 'all',
  Completed: 'completed',
  Pendig: 'pendig',
};

const state = {
  todos: [
    new Todo('Piedra del Alma'),
    new Todo('Piedra del Espacio'),
    new Todo('Piedra del Mente'),
    new Todo('Piedra del Realidad'),
    new Todo('Piedra del Tiempo'),
    new Todo('Piedra del Poder'),
  ],
  filter: Filters.All,
};

const initStore = () => {
  loadStore();
};

/**
 * Carga el store
 */
const loadStore = () => {
  if (!localStorage.getItem('state')) return;
  const { todos = [], filter = Filters.All } = JSON.parse(localStorage.getItem('state'));
  state.todos = todos;
  state.filter = filter;
};

const saveStateToLocalStorage = () => {
  localStorage.setItem('state', JSON.stringify(state));
};

/**
 * Devuelve todos los Todos
 * @param {String} filter Tipo de filtro
 * @returns {String} Filtro a usar
 */
const getTodos = (filter = Filters.All) => {
  switch (filter) {
    case Filters.All:
      return [...state.todos];
    case Filters.Completed:
      return state.todos.filter((todo) => todo.done);
    case Filters.Pendig:
      return state.todos.filter((todo) => !todo.done);
    default:
      throw new Error(`Option ${filter} is not valid`);
  }
};

/**
 * Crea un todo
 * @param {String} description descripción de la tarea
 */
const addTodo = (description) => {
  if (!description) throw new Error('Description is required');

  state.todos.push(new Todo(description));
  saveStateToLocalStorage();
};

/**
 * toggle dle todo
 * @param {string} todoId id del todo
 */
const toggleTodo = (todoId) => {
  state.todos = state.todos.map((todo) => {
    if (todo.id === todoId) {
      todo.done = !todo.done;
    }

    saveStateToLocalStorage();

    return todo;
  });
};

/**
 * Elimina un todo
 * @param {String} todoId id del todo
 */
const deleteTodo = (todoId) => {
  state.todos = state.todos.filter((todo) => todo.id !== todoId);

  saveStateToLocalStorage();
};

/**
 * elimina todos competados
 */
const deleteCompleted = () => {
  state.todos = state.todos.filter((todo) => !todo.done);

  saveStateToLocalStorage();
};

/**
 * cambia el tipo de filtro de busqueda
 * @param {Filters} newFilter tipo de filtro
 */
const setFilter = (newFilter = Filters.All) => {
  state.filter = newFilter;

  saveStateToLocalStorage();
};

/**
 * Obtienen el filtro actual
 */
const getCurrentFilter = () => {
  return state.filter;
};

export default {
  addTodo,
  deleteCompleted,
  deleteTodo,
  getCurrentFilter,
  getTodos,
  initStore,
  loadStore,
  setFilter,
  toggleTodo,
};
