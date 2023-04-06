import { Todo } from '../todos/todo.model';

const Filters = {
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
  console.log(state);
  console.log('initStore :-)');
};

/**
 * Carga el store
 */
const loadStore = () => {};

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
      return state.filter((todo) => todo.done);
    case Filters.Pendig:
      return state.filter((todo) => !todo.done);
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

    return todo;
  });
};

/**
 * Elimina un todo
 * @param {String} todoId id del todo
 */
const deleteTodo = (todoId) => {
  state.todos = state.todos.filter((todo) => todo.id !== todoId);
};

/**
 * elimina todos competados
 */
const deleteCompleted = () => {
  state.todos = state.todos.filter((todo) => todo.done);
};

/**
 * cambia el tipo de filtro de busqueda
 * @param {Filters} newFilter tipo de filtro
 */
const setFilter = (newFilter = Filters.All) => {
  state.filter = newFilter;
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
