export function fetchCountries(name) {
  const BASE_URL = 'https://restcountries.com/v3.1';
  const ENDPOINT = 'name';
  const FILTER_KEYS = 'name,capital,population,flags,languages';

  return fetch(`${BASE_URL}/${ENDPOINT}/${name}?fields=${FILTER_KEYS}`).then(
    resp => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      return resp.json();
    }
  );
}
