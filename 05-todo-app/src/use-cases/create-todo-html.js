import { Todo } from '../todos/todo.model';

/**
 *
 * @param {Todo} todo
 */
export const createTodoHtml = (todo) => {
  if (!todo) throw new Error('A Todo object ');
  const { description, done, id } = todo;
  const html = `
    <div class="view">
      <input class="toggle" type="checkbox" ${done ? 'checked' : ''} />
      <label>${description}</label>
      <button class="destroy"></button>
    </div>
  <input class="edit" value="Create a TodoMVC template" />
  `;
  const liElement = document.createElement('li');
  liElement.setAttribute('data-id', id);

  if (todo.done) {
    liElement.classList.add('completed');
  }

  liElement.innerHTML = html;

  return liElement;
};
