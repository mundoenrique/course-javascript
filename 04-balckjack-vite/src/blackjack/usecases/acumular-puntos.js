import { valorCarta } from './';

/**
 * Acumular puntos por jugador
 * @param {String} carta carta solicitada
 * @param {Number} turno Jugador en turno
 * @param {Array<number>} puntosJugadores arreglo de números
 * @param {HTMLElement} puntosHTML referencia html de la ubicación puntos por jugador
 * @returns {number} Puntos del jugador en turno
 */
export const acumularPuntos = (carta, turno, puntosJugadores, puntosHTML) => {
  puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
  puntosHTML[turno].innerText = puntosJugadores[turno];

  return puntosJugadores[turno];
};
