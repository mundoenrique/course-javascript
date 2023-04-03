const Kike = {
  nombre: 'Enrique',
  edad: 43,
  imprimir() {
    console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
  },
};

const Pedro = {
  nombre: 'Pedro',
  edad: 35,
  imprimir() {
    console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
  },
};

Kike.imprimir();
Pedro.imprimir();

function Persona(nombre, edad) {
  console.log('Sejecutó esta línead');
  this.nombre = nombre;
  this.edad = edad;
  this.imrpimir = () => {
    console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
  };
}

const maria = new Persona('María', 18);
const Meliza = new Persona('Meliza', 25);

console.log(maria);
maria.imrpimir();
console.log(Meliza);
Meliza.imrpimir();
