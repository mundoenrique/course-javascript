let a = 10;
let b = a;
console.log({ a, b });
a = 30;
console.log({ a, b });

let juan = { nombre: 'Juan' };
let ana = juan;
ana.nombre = 'Ana';

console.log({ juan, ana });

const cambiaNombre = (persona) => {
  persona.nombre = 'Tony';

  return persona;
};

const cambiaNombre2 = ({ ...persona }) => {
  persona.nombre = 'Yaya';

  return persona;
};

let peter = { nombre: 'Peter' };
let tony = cambiaNombre(peter);

console.log({ peter, tony });

let pedro = { nombre: 'Pedro' };
let elena = { ...pedro };

elena.nombre = 'Elena';
console.log({ pedro, elena });

let teresa = { nombre: 'Teresa' };
let yaya = cambiaNombre2(teresa);

console.log({ teresa, yaya });

const frutas = ['Manzanas', 'Pera', 'Piña'];
const Otrasfrutas = frutas;
console.time('spred');
const Otrasfrutas2 = [...frutas];
console.timeEnd('spred');
console.time('slice');
const Otrasfrutas3 = frutas.slice();
console.timeEnd('slice');

Otrasfrutas.push('Mango');
Otrasfrutas2.push('Fresa');
Otrasfrutas3.push('Mora');
console.table({ frutas, Otrasfrutas, Otrasfrutas2, Otrasfrutas3 });
