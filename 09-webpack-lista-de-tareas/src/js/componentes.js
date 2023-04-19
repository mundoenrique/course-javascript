// Referencias en el HTML
const divTodoList = document.querySelector('.todo-list');

export const crearTodoHtml = (todo) => {
  const { tarea, id, completado } = todo;
  const htmlTodo = `
  <li class="${completado ? 'completed' : ''}" data-id="${id}">
    <div class="view">
      <input class="toggle" type="checkbox" ${completado ? 'checked' : ''} />
      <label>${tarea}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template" />
  </li>
  `;
  const div = document.createElement('div');

  div.innerHTML = htmlTodo;
  divTodoList.append(div.firstElementChild);

  return div.firstElementChild;
};
