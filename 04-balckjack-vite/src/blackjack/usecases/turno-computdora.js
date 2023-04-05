import { pedirCarta, acumularPuntos, crearCarta, determinarGanador } from './';

/**
 *
 * @param {Number} puntosMinimos puntos minimos a alcanzar
 * @param {Array<String>} deck Arreglo de string
 * @param {HTMLElement} divCartasJugadores Referecnia HTML
 * @param {Array>Number} puntosJugadores
 * @param {HTMLElement} puntosHTML Referecnia HTML
 */
export const turnoComputadora = (puntosMinimos, deck, divCartasJugadores, puntosJugadores, puntosHTML) => {
  if (!puntosMinimos) throw new Error('Puntos mínimos es necesario');

  let puntosComputadora = 0;

  do {
    const carta = pedirCarta(deck);
    puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores, puntosHTML);
    crearCarta(carta, puntosJugadores.length - 1, divCartasJugadores);
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  determinarGanador(puntosJugadores);
};
