import './styles.css';
import { Todo, TodoList } from './clasess';
import { crearTodoHtml } from './js/componentes';

const todoList = new TodoList();
const tarea = new Todo('Aprender Javascript');

todoList.nuevoTodo(tarea);

console.log(todoList);

crearTodoHtml(tarea);
