/**
 *
 * @param {HTMLDivElement} element elemnto html
 */
export const promiseRaceComponent = (element) => {
  element.innerHTML = 'Cargando....';

  const renderValue = (value) => {
    element.innerHTML = value;
  };

  Promise.race([
    slowPromise(1),
    mediumPromise(2),
    fastPromise(3),
    slowPromise(4),
    mediumPromise(5),
    fastPromise(6),
  ]).then(renderValue);
};

const slowPromise = (puesto) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Slow Promise ${puesto}`);
    }, 1500);
  });

const mediumPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Medium Promise ${puesto}`);
    }, 2000);
  });

const fastPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Fast Promise ${puesto}`);
    }, 1000);
  });
