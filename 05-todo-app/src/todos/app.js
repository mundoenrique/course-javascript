import html from './app.html?raw';
/**
 *
 * @param {string} elementId
 */
export const App = (elementId) => {
  //Cuanod la función APP() SE llama
  (() => {
    const app = document.createElement('div');
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
  })();
};
