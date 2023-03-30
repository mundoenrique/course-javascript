function crearPersona1(nombre, apellido) {
  return {
    nombre: nombre,
    apellido: apellido,
  };
}

const crearPersona2 = (nombre, apellido) => {
  return {
    nombre,
    apellido,
  };
};

const crearPersona3 = (nombre, apellido) => ({
  nombre,
  apellido,
});

function imprimeArgumentos1() {
  console.log(arguments);
}

const imprimeArgumentos2 = (...args) => {
  console.log(args);
};

const imprimeArgumentos3 = (edad, ...args) => {
  console.log({ edad }, args);
};

const imprimeArgumentos4 = (...args) => {
  return args;
};

const persona1 = crearPersona1('Enrique', 'Peñaloza');
const persona2 = crearPersona2('Enrique', 'Peñaloza');
const { nombre, apellido: nuevoApellido } = crearPersona3('Enrique', 'Peñaloza');

console.log(persona1, persona2, { nombre, nuevoApellido });

imprimeArgumentos1(10, true, false, 'Enrique', 'Peñaloza');
imprimeArgumentos2(10, true, false, 'Enrique', 'Peñaloza');
imprimeArgumentos3(10, true, false, 'Enrique', 'Peñaloza');

let args = imprimeArgumentos4(10, true, false, 'Enrique', 'Peñaloza', 'Hola');

console.log({ args });

const [edad, casado, vivo, nombre2, apellido2, saludo] = args;

console.log({ edad, casado, vivo, nombre2, apellido2, saludo });

const tony = {
  nombre: 'Tony Stark',
  codeName: 'Ironman',
  vivo: false,
  edad: 40,
  trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

const imprimePropiedades = (personaje) => {
  console.log('nombre', personaje.nombre);
  console.log('codeName', personaje.codeName);
  console.log('vivo', personaje.vivo);
  console.log('edad', personaje.edad);
  console.log('trajes', personaje.trajes);
};

const imprimePropiedades2 = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
  console.log({ nombre, codeName, vivo, edad, trajes });
};

imprimePropiedades(tony);
imprimePropiedades2(tony);
