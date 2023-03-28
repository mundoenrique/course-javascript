function saludar() {
  console.log(arguments);
  console.log('Hola mundo');
}

const saludar2 = function () {
  console.log(arguments);
  console.log('Hola mundo');

  return 1;
};

const saludar3 = function (nombre) {
  console.log(arguments);
  console.log('Hola ' + nombre);

  return [1, 2, 3, 4, 5];
};

const saludar4 = function (nombre) {
  console.log(arguments);
  console.log('Hola ' + nombre);
};

const saludarFlecha = (nombre) => {
  console.log('Hola ' + nombre);
};

function sumar(a, b) {
  return a + b;
}

const sumar2 = (a, b) => {
  let c = a + b;
  return c;
};

const sumar3 = (a, b) => a + b;

function getAleatorio() {
  return Math.random();
}

const getAleatorio2 = () => Math.random();

const resp1 = saludar();
const resp2 = saludar2();
const resp3 = saludar3('Enrique');
const resp4 = saludar4('Enrique', 40, true, 'Costa Rica');
const resp5 = saludarFlecha('flecha');

console.log({ resp1, resp2, resp3, resp4, resp5 });
console.log(sumar(1, 2));
console.log(sumar2(3, 4));
console.log(sumar3(5, 6));
console.log(getAleatorio());
console.log(getAleatorio2());
