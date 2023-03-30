const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

console.warn('For tradicional');

for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}

console.warn('For In');

for (const i in heroes) {
  console.log(heroes[i]);
}

console.warn('For Of');

for (const heroe of heroes) {
  console.log(heroe);
}
