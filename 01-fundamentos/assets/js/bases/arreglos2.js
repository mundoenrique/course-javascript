let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
let longitud = juegos.length;
console.log({ longitud });

let primero = juegos[0];

let ultimo = juegos[juegos.length - 1];
console.log({ primero, ultimo });

juegos.forEach((elemento, indice, arr) => {
  console.log(elemento, indice, arr);
});

longitud = juegos.push('F-Zero');
console.log({ longitud, juegos });

longitud = juegos.unshift('Fire emblem');
console.log({ longitud, juegos });

let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });

let pos = 1;
console.log(juegos);
let juegosBorrados = juegos.splice(pos, 2);
console.log({ juegosBorrados, juegos });

let metroidIndex = juegos.indexOf('Metroid'); // CaseSensitive
console.log({ metroidIndex });
