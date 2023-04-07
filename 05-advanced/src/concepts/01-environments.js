/**
 *
 * @param {HTMLDivElement} element elemnto html
 */
export const enviromentComponent = (element) => {
  console.log(import.meta.env);
  const html = `
  Dev: ${import.meta.env.DEV} <br>
  Prod: ${import.meta.env.PROD} <br>
  ApiKey: ${import.meta.env.VITE_API_KEY} <br>
  URL: ${import.meta.env.VITE_BASE_USRL} <br>
  `;

  element.innerHTML = html;
};
