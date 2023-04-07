import { heroes } from '../data/heroes';

/**
 *
 * @param {HTMLDivElement} element elemnto html
 */
export const asyncComponent = (element) => {
  const id1 = '5d86371f9f80b591f499df325';

  console.log('Inicio de componente');

  findHero(id1)
    .then((name) => (element.innerHTML = name))
    .catch((error) => (element.innerHTML = error));

  console.log('Fin del componente');
};

/**
 * Información del Heroe
 * @param {String} id id del Heroe
 * @returns {Promise<String>}
 */
const findHero = async (id) => {
  const hero = heroes.find((hero) => hero.id === id);
  if (!hero) throw `Hero with id ${id} not found`;

  return hero.name;
};
