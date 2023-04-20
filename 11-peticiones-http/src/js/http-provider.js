const jokeUrl = 'https://api.chucknorris.io/jokes/random';

const obtenerChiste = async () => {
  try {
    const resp = await fetch(jokeUrl);

    if (!resp.ok) throw 'No se puedo realizar la petición';

    const { icon_url, id, value } = await resp.json();

    return { icon_url, id, value };
  } catch (error) {
    throw error;
  }
};

export { obtenerChiste };
