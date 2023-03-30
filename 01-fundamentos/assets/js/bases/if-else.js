let a = 9;

if (a >= 10) {
  console.log('A es mayor o igual a 10');
} else {
  console.log('A es menor a 10');
}

const hoy = new Date();
console.log(hoy);
let dia = hoy.getDay();
console.log({ dia });

if (dia === 0) {
  console.log('Domingo');
} else if (dia === 1) {
  console.log('Lunes');
  // if (dia === 1) {
  //   console.log('Lunes');
  // } else {
  //   console.log('No es lunes ni domingo');
  // }
} else if (dia === 2) {
  console.log('Lunes');
} else {
  console.log('No es lunes, martes o domingo');
}

const diasObj = {
  0: 'Domingo',
  1: 'Lunes',
  2: 'Martes',
  3: 'Miércoles',
  4: 'Jueves',
  5: 'Viernes',
  6: 'Sábado',
};

const diasArr = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

console.log(diasObj.dia);
console.log(diasObj[dia]);
console.log(diasArr[dia]);
