import usersStore from './store/users-store';

/**
 * Renderiza en el HATML
 * @param {HTMLDivElement} element elemnto HTML
 */
export const UsersApp = async (element) => {
  element.innerHTML = 'Loading...';

  await usersStore.loadNextPage();
};
