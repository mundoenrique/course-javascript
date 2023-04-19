import { obtenerHeroesArr, obtenerHeroesArr2, obtenerHeroeAwait } from './js/await';
import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import {
  buscarHeroe as buscarHeroePromesa,
  promesaLenta,
  promesaMedia,
  promesaRapida,
  buscarHeroeAsync,
} from './js/promesas';
import './styles.css';
const heroeId1 = 'capi';
const heroeId2 = 'iron';
const heroeId3 = 'spider';
const heroeId4 = 'ant';
let heroInfo1, heroInfo2;

console.warn('callback');
buscarHeroeCallback(heroeId1, (err, heroe1) => {
  if (err) {
    return console.error(err);
  }

  console.log(`Enviando a ${heroe1.nombre} a la misión`);
});

console.warn('callback hell');
buscarHeroeCallback(heroeId1, (err, heroe1) => {
  if (err) {
    return console.error(err);
  }

  buscarHeroeCallback(heroeId2, (err, heroe2) => {
    if (err) {
      return console.error(err);
    }

    console.log(`Enviando a ${heroe1.nombre} y a ${heroe2.nombre} a la misión`);
  });
});

buscarHeroePromesa(heroeId1)
  .then((heroe1) => {
    console.warn('Promesa');
    console.log(`Enviando a ${heroe1.nombre} a la misión`);
  })
  .catch(console.error);

buscarHeroePromesa(heroeId1)
  .then((heroe1) => {
    buscarHeroePromesa(heroeId2)
      .then((heroe2) => {
        console.warn('Promesa hell');
        console.log(`Enviando a ${heroe1.nombre} y a ${heroe2.nombre} a la misión`);
      })
      .catch(console.error);
  })
  .catch(console.error);

buscarHeroePromesa(heroeId1)
  .then((heroe) => {
    heroInfo1 = heroe;
    return buscarHeroePromesa(heroeId2);
  })
  .then((heroe) => {
    heroInfo2 = heroe;
    console.warn('Promesa encadenadas');
    console.log(`Enviando a ${heroInfo1.nombre} y a ${heroInfo2.nombre} a la misión`);
  })
  .catch(console.error);

Promise.all([buscarHeroePromesa(heroeId1), buscarHeroePromesa(heroeId2)])
  .then(([heroe1, heroe2]) => {
    console.warn('Promesa (all)');
    console.log(`Enviando a ${heroe1.nombre} y a ${heroe2.nombre} a la misión`);
  })
  .catch(console.error);

promesaLenta.then(console.log).catch(console.error);
promesaMedia.then(console.log).catch(console.error);
promesaRapida.then(console.log).catch(console.error);

Promise.race([promesaLenta, promesaMedia, promesaRapida]).then(console.log).catch(console.error);

buscarHeroePromesa(heroeId3).then(console.log).catch(console.error);
buscarHeroeAsync(heroeId4).then(console.log).catch(console.error);

obtenerHeroesArr().then(console.table);
obtenerHeroesArr2().then(console.table);
obtenerHeroeAwait(heroeId2).then(console.log).catch(console.error);
