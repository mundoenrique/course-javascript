import { Todo } from '../todos/todo.model';

const Filters = {
  All: 'all',
  Completed: 'completed',
  Pendig: 'pendig',
};

const state = {
  todos: [new Todo('Piedra del Alma'), new Todo('Piedra del Infinito'), new Todo('Piedra del Tiempo')],
  filter: Filters.All,
};

const initStore = () => {
  console.log(state);
  console.log('initStore :-)');
};

const loadStore = () => {};

/**
 * Crea un todo
 * @param {String} description
 */
const addTodo = (description) => {};

/**
 * toggle dle todo
 * @param {string} todoId id del todo
 */
const toggleTodo = (todoId) => {};

/**
 * Elimina un todo
 * @param {String} todoId id del todo
 */
const deleteTodo = (todoId) => {};

/**
 * elimina todos competados
 * @param {String} todoId id del todo
 */
const deleteCompleted = (todoId) => {};

/**
 * cambia el tipo de filtro de busqueda
 * @param {String} newFilter tipo de filtro
 */
const setFilter = (newFilter = Filters.All) => {};

/**
 * Obtienen el filtro actual
 */
const getCurrentFilter = () => {};

export default {
  addTodo,
  deleteCompleted,
  deleteTodo,
  initStore,
  loadStore,
  setFilter,
  toggleTodo,
  getCurrentFilter,
};
