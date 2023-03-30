/**
 * Días de semana abrimos a las 11,
 * pero los fines de semana abrimos alas 9
 */

// Entra un sitio web, para consultar si está abierto hoy....
const dia = 1; // 0: domingo... 1: Lunes...
const horaActual = 10;
let horaApertura1;
let mensaje1; // Está abierto, Está cerrado, hoy abrimos a las xx
let horaApertura2;
let mensaje2; // Está abierto, Está cerrado, hoy abrimos a las xx

// if (dia === 0 || dia === 6) {
if ([0, 6].includes(dia)) {
  console.log('Fin de semana');
  horaApertura1 = 9;
} else {
  console.log('Día de semana');
  horaApertura1 = 11;
}

horaApertura2 = [0, 6].includes(dia) ? 9 : 11;

if (horaActual >= horaApertura) {
  mensaje1 = 'Está abierto';
} else {
  mensaje1 = `Está cerrado, hoy abrimos a las ${horaApertura1}`;
}

mensaje2 = horaActual >= horaApertura2 ? 'Está abierto' : `Está cerrado, hoy abrimos a las ${horaApertura2}`;

console.log({ horaApertura1, mensaje1 });
console.log({ horaApertura2, mensaje2 });
