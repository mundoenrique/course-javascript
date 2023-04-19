import { heroes } from './data/heroes';

export const buscarHeroe = (id) => {
  const heroe = heroes[id];

  return new Promise((resolve, reject) => {
    if (heroe) {
      resolve(heroe);
    } else {
      reject(`No existe un heroe con el id ${id}`);
    }
  });
};

export const buscarHeroeAsync = async (id) => {
  const heroe = heroes[id];

  if (heroe) {
    return heroe;
  } else {
    throw Error(`No existe un heroe con el id ${id}`);
  }
};

const promesaLenta = new Promise((resolve) => {
  const timeResp = 2000;
  setTimeout(() => resolve(`Respondí en ${timeResp} sec`), timeResp);
});

const promesaMedia = new Promise((resolve) => {
  const timeResp = 1500;
  setTimeout(() => resolve(`Respondí en ${timeResp} sec`), timeResp);
});

const promesaRapida = new Promise((resolve) => {
  const timeResp = 1000;
  setTimeout(() => resolve(`Respondí en ${timeResp} sec`), timeResp);
});

export { promesaLenta, promesaMedia, promesaRapida };
