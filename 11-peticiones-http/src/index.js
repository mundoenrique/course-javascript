// import { init } from './js/chistes-page';
// import { init } from './js/usuarios-page';
// init();

import * as CRUD from './js/crud-provider';

CRUD.getUsuario(2).then(console.log);

CRUD.crearUsuario({
  name: 'Enrique',
  job: 'Ingeniero',
}).then(console.log);

CRUD.actulizarUsuario(2, {
  name: 'Enrique',
  job: 'Ingeniero',
}).then(console.log);

CRUD.borrarUsuario(2).then(console.log);
