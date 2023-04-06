import { Todo } from '../todos/todo.model';

const Filters = {
  All: 'All',
  Completed: 'Completed',
  Pendig: 'Pendig',
};

const state = {
  todos: [new Todo('Piedra del Alma'), new Todo('Piedra del Infinito'), new Todo('Piedra del Tiempo')],
  filter: Filters.All,
};

const initStore = () => {
  console.log(state);
  console.log('initStore :-)');
};

export default {
  initStore,
};
