const arr = new Array(10);
console.log(arr);

const arr1 = [];
console.log(arr1);

let videoJuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];
console.log({ videoJuegos });
console.log(videoJuegos[0]);

let arregloCosas = [
  true,
  123,
  'Enrique',
  1 + 2,
  function () {},
  () => {},
  { a: 1 },
  ['X', 'Zero', 'Megaman', 'Dr. Light', ['Dr. Willy', 'Woodman']],
];

console.log({ arregloCosas });
console.log(arregloCosas[0]);
console.log(arregloCosas[2]);
console.log(arregloCosas[7][3]);
console.log(arregloCosas[7][4][1]);
