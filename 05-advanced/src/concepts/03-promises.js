import { heroes } from '../data/heroes';

/**
 *
 * @param {HTMLDivElement} element elemnto html
 */
export const promiseComponent = (element) => {
  const id1 = '5d86371f1efebc31def272e2';
  const id2 = '5d86371f25a058e5b1c8a65e';
  let hero1;

  const renderHero = (hero) => {
    element.innerHTML = hero.name;
  };

  const renderTwoHeroes = (hero1, hero2) => {
    element.innerHTML = `
    <h3>${hero1.name}</h3>
    <h3>${hero2.name}</h3>
    `;
  };

  const renderError = (error) => {
    element.innerHTML = `
    <h1>Error:</h1>
    <h3>${error}</h3>
    `;
  };

  findHero(id1).then(renderHero).catch(renderError);

  // !Forma 1
  findHero(id1)
    .then((hero1) => {
      findHero(id2)
        .then((hero2) => {
          renderTwoHeroes(hero1, hero2);
        })
        .catch(renderError);
    })
    .catch(renderError);

  // !Forma 2
  findHero(id1)
    .then((hero) => {
      hero1 = hero;

      return findHero(id2);
    })
    .then((hero2) => {
      renderTwoHeroes(hero1, hero2);
    })
    .catch(renderError);

  // !Forma 3
  Promise.all([findHero(id1), findHero(id2)])
    .then(([hero1, hero2]) => renderTwoHeroes(hero1, hero2))
    .catch(renderError);
};

/**
 * Info del herore
 * @param {String} id del herore
 * @returns {Promise}
 */
const findHero = (id) => {
  return new Promise((resolve, reject) => {
    const hero = heroes.find((hero) => hero.id === id);

    if (hero) {
      resolve(hero);
      return;
    }

    reject(`Hero with id ${id} no found`);
  });
};
