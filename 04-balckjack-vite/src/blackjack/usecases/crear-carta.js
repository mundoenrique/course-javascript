/**
 *
 * @param {String} carta carta seleccionada
 * @param {Number} turno Jugador en turno
 * @param {HTMLImageElement} divCartasJugadores Referencia de la ubicación de la imagen en el html
 */
export const crearCarta = (carta, turno, divCartasJugadores) => {
  const imgCarta = document.createElement('img');

  imgCarta.src = `assets/cartas/${carta}.png`;
  imgCarta.classList.add('carta');
  divCartasJugadores[turno].append(imgCarta);
};
