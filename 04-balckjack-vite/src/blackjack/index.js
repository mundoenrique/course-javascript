import _ from 'underscore';
import { crearDeck, pedirCarta, turnoComputadora, acumularPuntos, crearCarta, inicializarJuego } from './usecases';

let deck = [];
const tipos = ['C', 'D', 'H', 'S'],
  especiales = ['A', 'J', 'K', 'Q'];
let puntosJugadores = [];

// Referecnias del HTML
const btnPedir = document.querySelector('#btnPedir'),
  btnDetener = document.querySelector('#btnDetener'),
  btnNuevo = document.querySelector('#btnNuevo'),
  divCartasJugadores = document.querySelectorAll('.divCartas'),
  puntosHTML = document.querySelectorAll('small');

deck = crearDeck(tipos, especiales);

// Eventos
btnPedir.addEventListener('click', () => {
  const carta = pedirCarta(deck);
  const puntosJugador = acumularPuntos(carta, 0, puntosJugadores, puntosHTML);
  crearCarta(carta, 0, divCartasJugadores);

  if (puntosJugador > 21) {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador, deck, divCartasJugadores, puntosJugadores, puntosHTML);
  } else if (puntosJugador === 21) {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador, deck, divCartasJugadores, puntosJugadores, puntosHTML);
  }
});

btnDetener.addEventListener('click', () => {
  btnPedir.disabled = true;
  btnDetener.disabled = true;
  turnoComputadora(puntosJugadores[0], deck, divCartasJugadores, puntosJugadores, puntosHTML);
});

btnNuevo.addEventListener('click', () => {
  puntosJugadores = inicializarJuego(
    puntosHTML,
    divCartasJugadores,
    btnPedir,
    btnDetener,
    tipos,
    especiales,
    deck,
    puntosJugadores
  );
});
