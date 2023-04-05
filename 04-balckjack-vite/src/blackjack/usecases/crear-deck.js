import _ from 'underscore';

export const miNOmbre = 'Enrique Peñaloza';

/**
 * Crea un deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A', 'J', 'K', 'Q']
 * @returns {Array<String>} Regresa un deck de cartas
 */
const crearDeck = (tiposDeCarta, tiposEspeciales) => {
  if (!tiposDeCarta || tiposDeCarta.length === 0) throw new Error('tiposDeCarta debe ser un arreglo de string');

  if (!tiposEspeciales || tiposEspeciales.length === 0)
    throw new Error('tiposEspeciales debe ser un arreglo de string');

  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }

  return _.shuffle(deck);
};

export default crearDeck;
