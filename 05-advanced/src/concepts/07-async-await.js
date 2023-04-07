/**
 *
 * @param {HTMLDivElement} element elemnto html
 */
export const asyncAwait2Component = async (element) => {
  console.time('Start');
  // const value1 = await slowPromise(1);
  // const value2 = await mediumPromise(2);
  // const value3 = await fastPromise(3);

  const [value1, value2, value3] = await Promise.all([slowPromise(1), mediumPromise(2), fastPromise(3)]);

  element.innerHTML = `
  value1: ${value1} <br>
  value2: ${value2} <br>
  value3: ${value3} <br>
  `;

  console.timeEnd('Start');
};

const slowPromise = (puesto) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Slow Promise ${puesto}`);
    }, 2000);
  });

const mediumPromise = (puesto) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Medium Promise ${puesto}`);
    }, 1500);
  });

const fastPromise = (puesto) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Fast Promise ${puesto}`);
    }, 1000);
  });
