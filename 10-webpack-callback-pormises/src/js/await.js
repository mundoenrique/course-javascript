import { buscarHeroeAsync, buscarHeroeAsyncSlow } from './promesas';

const heroresIds = ['capi', 'iron', 'spider', 'ant'];
const heroresPromesas = heroresIds.map(buscarHeroeAsyncSlow);

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

export const obtenerHeroeAwait = async (id) => {
  try {
    const heroe = await buscarHeroeAsync(id);

    return heroe;
  } catch (error) {
    throw error;
  }
};

export const heroesCiclo = async () => {
  console.time('heroesCiclo');
  // const heroes = await Promise.all(heroresPromesas);
  // heroes.forEach(console.log);
  for await (const heroe of heroresPromesas) {
    console.log(heroe);
  }
  console.timeEnd('heroesCiclo');
};
