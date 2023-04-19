import { buscarHeroeAsync } from './promesas';

const heroresIds = ['capi', 'iron', 'spider', 'ant'];

export const obtenerHeroesArr = async () => {
  const heroesArr = [];

  for (const id of heroresIds) {
    const heroe = await buscarHeroeAsync(id);
    heroesArr.push(heroe);
  }
  return heroesArr;
};
