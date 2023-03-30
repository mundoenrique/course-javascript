let nombre = 'Peter Parker';
console.log({ nombre });

nombre = 'Ben Parker';
console.log({ nombre });

nombre = 'Tía May';
console.log({ nombre });

nombre = `Tía May`;
console.log({ nombre }, typeof nombre);

nombre = 123;
console.log({ nombre }, typeof nombre);

let esMarvel = true;
console.log({ esMarvel }, typeof esMarvel);

let edad = 33.001;
console.log({ edad }, typeof edad);

let superPoderDeSpiderMan;
console.log({ superPoderDeSpiderMan: superPoderDeSpiderMan }, typeof superPoderDeSpiderMan);

let soyNull = null;
console.log({ soyNull: soyNull }, typeof soyNull);

let symbol1 = Symbol('a');
console.log({ symbol1: symbol1 }, typeof symbol1);

let symbol2 = Symbol('a');
console.log({ symbol2: symbol2 }, typeof symbol2);

console.log(symbol1 === symbol2);
