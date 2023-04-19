const heroes = {
  capi: {
    nombre: 'Capitán América',
    poder: 'Aguantar inyecciones in morir',
  },
  iron: {
    nombre: 'Ironman',
    poder: 'Absurda cantidad de dinero',
  },
  spider: {
    nombre: 'Spider',
    poder: 'La mejor reacción alergica a las picaduras de arañas',
  },
};

export const buscarHeroe = (id, callback) => {
  const heroe = heroes[id];

  callback(heroe);
};
