let personaje = {
  nombre: 'Tony Stark',
  edad: 40,
  codeName: 'Ironman',
  vivo: false,
  coords: {
    lat: 33.034,
    lng: -118.7,
  },
  trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
  direccion: {
    zip: '10880, 90265',
    ubicacion: 'Malibu, California',
  },
  'ultima-pelicula': 'Infinity War',
};
const X = 'vivo';

console.log(personaje);
console.log('Nombre:', personaje.nombre);
console.log('Nombre:', personaje['nombre']);
console.log('Eddad:', personaje.edad);
console.log('Coors:', personaje.coords);
console.log('lat:', personaje.coords.lat);
console.log('lng:', personaje.coords.lng);
console.log('No. trajes:', personaje.trajes.length);
console.log('Último traje:', personaje.trajes[personaje.trajes.length - 1]);
console.log('Vivo:', personaje[X]);
console.log('Último película:', personaje['ultima-pelicula']);

delete personaje.edad;
console.log(personaje);
personaje.casado = true;
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

Object.freeze(personaje);

personaje.dinero = 10000000000000000n;
personaje.casado = false;
personaje.direccion.ubicacion = 'Costa Rica';
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log(propiedades, valores);
