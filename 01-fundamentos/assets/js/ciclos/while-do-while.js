const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];
let i = 0;

console.warn('While');
while (i < carros.length) {
  i++;
  if (i === 10) {
    // break;
    continue;
  }
  console.log(carros[i - 1]);
}

console.warn('Do While');
i = 0;
do {
  i++;
  console.log(carros[i - 1]);
} while (i < carros.length);
