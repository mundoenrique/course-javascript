import { crearDeck } from './';

/**
 * Inicia el juego
 * @param {HTMLElement} puntosHTML Referecnia HTML
 * @param {HTMLElement} divCartasJugadores Referecnia HTML
 * @param {HTMLElement} btnPedir Referecnia HTML
 * @param {HTMLElement} btnDetener Referecnia HTML
 * @param {HTMLElement} tipos Referecnia HTML
 * @param {HTMLElement} especiales Referecnia HTML
 * @param {Array<String>} deck arreglo de string
 * @param {Array<Number>} puntosJugadores Arreglode los puntos de los jugadores
 * @param {Number} numJugadores Cantidad de jugadores
 * @returns {Array<Number}
 */
export const inicializarJuego = (
  puntosHTML,
  divCartasJugadores,
  btnPedir,
  btnDetener,
  tipos,
  especiales,
  deck,
  puntosJugadores,
  numJugadores = 2
) => {
  deck = crearDeck(tipos, especiales);
  puntosJugadores = [];

  for (let i = 0; i < numJugadores; i++) {
    puntosJugadores.push(0);
  }

  puntosHTML.forEach((element) => (element.innerText = 0));
  divCartasJugadores.forEach((element) => (element.innerHTML = ''));
  btnPedir.disabled = false;
  btnDetener.disabled = false;

  return puntosJugadores;
};
