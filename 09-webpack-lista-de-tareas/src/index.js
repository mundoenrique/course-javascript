import './styles.css';
import { TodoList } from './clasess';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);
