import { localhostUserToModel } from '../mappers/localhost-user.mapper';
import { User } from '../models/users';

/**
 * Página de usuarios
 * @param {Number} page Página
 * @returns {Promise<User[]>}
 */
export const loadUserByPage = async (page = 1) => {
  const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
  const res = await fetch(url);
  const data = await res.json();
  const users = data.map(localhostUserToModel);

  return users;
};
