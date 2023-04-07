import { heroes } from '../data/heroes';

/**
 *
 * @param {HTMLDivElement} element elemnto html
 */
export const callbacksComponent = (element) => {
  const id1 = '5d86371f25a058e5b1c8a65e';
  const id2 = '5d86371f2343e37870b91ef1';

  findHero(id1, (error, hero1) => {
    // element.innerHTML = hero?.name || 'No hay heroe';

    if (error) {
      element.innerHTML = error;
      return;
    }

    findHero(id2, (error, hero2) => {
      if (error) {
        element.innerHTML = error;
        return;
      }

      element.innerHTML = `${hero1.name} / ${hero2.name}`;
    });
  });
};

/**
 *
 * @param {String} id id del heroe
 * @param {(Error: String|null,  hero: Object) => void} callback Función de retorno
 */
const findHero = (id, callback) => {
  const hero = heroes.find((hero) => hero.id === id);

  if (!hero) {
    callback(`Hero with ${id} not found.`);
    return;
  }

  callback(null, hero);
};
