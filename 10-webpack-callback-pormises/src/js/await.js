import { buscarHeroeAsync, buscarHeroeAsyncSlow } from './promesas';

const heroresIds = ['capi', 'iron', 'spider', 'ant'];

export const obtenerHeroesArr = async () => {
  const heroesArr = [];

  for (const id of heroresIds) {
    const heroe = await buscarHeroeAsync(id);
    heroesArr.push(heroe);
  }

  return heroesArr;
};

export const obtenerHeroesArr2 = async () => {
  // const heroesArr = [];

  // for (const id of heroresIds) {
  //   heroesArr.push(buscarHeroeAsyncSlow(id));
  // }

  // return await Promise.all(heroesArr);

  return await Promise.all(heroresIds.map(buscarHeroeAsyncSlow));
};
