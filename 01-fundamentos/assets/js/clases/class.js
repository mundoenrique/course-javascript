class Persona {
  nombre = '';
  codigo = '';
  frase = '';
  comida = '';

  constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
  }

  set setComidaFavorita(comida) {
    this.comida = comida.toUpperCase();
  }

  get getComidaFavorita() {
    return `La comida favorita de ${this.nombre} es ${this.comida}`;
  }

  quienSoy() {
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
  }

  miFrase() {
    console.log(`${this.codigo} dice ${this.frase}`);
  }
}

const SpiderMan = new Persona('Peter Parker', 'SpiderMan', 'Soy tu amigable vecino spiderMan');
const IronMan = new Persona('Tony Stark', 'IronMan', 'Soy IronMan');

console.log(SpiderMan);
SpiderMan.quienSoy();
SpiderMan.miFrase();
SpiderMan.setComidaFavorita = 'Pie de cereza de la tía May';
SpiderMan.nemesis = 'El duente verde';
console.log(SpiderMan);
console.log(SpiderMan.getComidaFavorita);
console.log('-----------------');
console.log(IronMan);
IronMan.quienSoy();
IronMan.miFrase();
