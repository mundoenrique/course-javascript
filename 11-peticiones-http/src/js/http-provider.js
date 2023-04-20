// https://api.chucknorris.io/
const jokeUrl = 'https://api.chucknorris.io/jokes/random';

// https://reqres.in/
const urlUsuarios = 'https://reqres.in/api/users?page=1';

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

const obtenerUsuarios = async () => {
  const resp = await fetch(urlUsuarios);
  const { data: usuarios } = await resp.json();

  return usuarios;
};

export { obtenerChiste, obtenerUsuarios };
