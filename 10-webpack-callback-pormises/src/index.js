import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe as buscarHeroePromesa } from './js/promesas';
import './styles.css';
const heroeId1 = 'capi';
const heroeId2 = 'iron';
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

console.log('Última línea del index.js');
