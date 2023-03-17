// console.log('Hola mundo desde archivo JS');
let a = 10;
var b = 10; // no se debe usar esta forma
const c = 10;

// c = 20; // no se debe reasignar valor a una constante

// formas de declarar varibales
let d = 10,
  e = 20,
  f = 'Hola',
  g = 'Spiderman';
let x = d + e;
const saludo = f + ' ' + g;

console.log('%c Mis variables', 'color:blue; font-weight: bold');
console.log(x);
console.warn(x);
console.error(x);

console.log('d', d);
console.log('e', e);
console.log('d', f);

console.log({ d });
console.log({ e });
console.log({ f });

console.table([d, e, f, g, x]);
console.table({ d, e, f, g, x });
