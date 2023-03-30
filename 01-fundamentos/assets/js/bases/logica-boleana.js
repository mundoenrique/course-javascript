const regresaTrue = () => {
  console.log('Regresa true');
  return true;
};

const regresaFalse = () => {
  console.log('Regresa false');
  return false;
};

console.warn('Not o la negación');
console.log(true);
console.log(!true);
console.log(!false);
console.log(!regresaFalse());

console.warn('And');
console.log(true && true);
console.log(true && false);
console.log(true && !false);
console.log(false && false);
console.log('=============');
console.log(regresaFalse() && regresaTrue());
console.log('=============');
console.log(regresaTrue() && regresaFalse());
console.log('====== && =======');
regresaFalse() && regresaTrue();
console.log('====== && =======');
regresaTrue() && regresaFalse();

console.warn('OR');
console.log(true || true);
console.log(true || false);
console.log(true || !false);
console.log(false || false);
console.log('=============');
console.log(regresaFalse() || regresaTrue());
console.log('=============');
console.log(regresaTrue() || regresaFalse());
console.log('====== || =======');
regresaFalse() || regresaTrue();
console.log('====== || =======');
regresaTrue() || regresaFalse();

console.warn('Asignaciones');
const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;
const a1 = true && 'Hola mundo';
const a2 = 'Hola' && 'mundo';
const a3 = 'Hola' && 'mundo' && soyFalse;
const a4 = 'Hola' && 'mundo' && soyFalse && true;
const a5 = soyFalse || 'Ya no soy false';
const a6 = soyFalse || soyUndefined || soyNull || 'Ya no soy false de nuevo' || true;
const a7 = soyFalse || soyUndefined || regresaTrue() || 'Ya no soy false de nuevo' || true;

console.log({ a1, a2, a3, a4, a5, a6, a7 });

if (regresaFalse() && regresaTrue() && (true || false | true)) {
  console.log('Hacer algo');
} else {
  console.log('Hacer otra cosa');
}
