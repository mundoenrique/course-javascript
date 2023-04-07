/**
 *
 * @param {HTMLDivElement} element elemnto html
 */
export const generatorFunctionComponent = (element) => {
  const generator = myfirstGeneratorFunction();

  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());

  const genId = idGenerator();
  const button = document.createElement('button');
  button.innerText = 'Click me';
  element.append(button);

  const renderButton = () => {
    const { value } = genId.next();
    button.innerText = `Click ${value}`;
  };

  button.addEventListener('click', renderButton);
};

function* idGenerator() {
  let currentId = 0;
  while (true) {
    yield ++currentId;
  }
}

function* myfirstGeneratorFunction() {
  yield 'Mi primer valor';
  yield 'Mi segundo valor';
  yield 'Mi tercer valor';
  return 'Ya no hay valores';
}
