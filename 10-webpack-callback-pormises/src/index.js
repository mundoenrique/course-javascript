import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { heroes } from './js/data/heroes';
import { buscarHeroe as buscarHeroePromesa } from './js/promesas';
import './styles.css';
const heroeId1 = 'capi';
const heroeId2 = 'iron';

console.log('callback');
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

console.log('callback');
buscarHeroePromesa(heroeId1)
  .then((heroe1) => {
    console.log(`Enviando a ${heroe1.nombre} a la misión`);
  })
  .catch(console.error);

console.log('fin del programa');
