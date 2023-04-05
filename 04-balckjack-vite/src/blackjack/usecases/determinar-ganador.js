/**
 * Determina el ganador
 * @param {Array<number>} puntosJugadores puntos de los jugadores
 */
export const determinarGanador = (puntosJugadores) => {
  const [puntosMinimos, puntosComputadora] = puntosJugadores;

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert('Nadie gana :`(');
    } else if (puntosMinimos > 21) {
      alert('Computadopra gana :`(');
    } else if (puntosComputadora > 21) {
      alert('Jugador gana :)');
    } else {
      alert('Computadopra gana :`(');
    }
  }, 200);
};
