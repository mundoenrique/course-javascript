/**
 * Permite tomar una carta
 * @param {Array<String>} deck Es un arreglo de string
 * @returns {String} retorna una carta
 */
export const pedirCarta = (deck) => {
  if (!deck || deck.length === 0) {
    throw 'No hay cartas en el deck';
  }

  return deck.pop();
};
