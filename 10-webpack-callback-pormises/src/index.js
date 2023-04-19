import { buscarHeroe } from './js/callbacks';
import './styles.css';
const heroeId1 = 'capi';
const heroeId2 = 'iron';

buscarHeroe(heroeId1, (err, heroe1) => {
  if (err) {
    return console.error(err);
  }

  buscarHeroe(heroeId2, (err, heroe2) => {
    if (err) {
      return console.error(err);
    }

    console.log(`Enviando a ${heroe1.nombre} y a ${heroe2.nombre} a la misión`);
  });
});
