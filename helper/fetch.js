const URL_BASIS = 'https://rickandmortyapi.com/api/';

// RETORNA UMA PROMISE PORQUE TEM ASYNC.
export async function handleFetch(param) {
  const response = await fetch(`${URL_BASIS}${param}`);
  const data = await response.json();
  return data;
}