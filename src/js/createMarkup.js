export function createSerchList(arr) {
  console.log(arr);
  return arr
    .map(
      ({
        flags: { svg, alt },
        name: { official },
      }) => `<li class="country-item">
      <img class="flag-svg" src="${svg}" alt="${alt}" width="36">
      <p class="country-name">${official}</p>
    </li>`
    )
    .join('');
}

export function createCountryInfo({
  capital,
  population,
  flags: { svg, alt },
  name: { official },
  languages,
}) {
  return `<div class="box">
    <img class="flag-svg" src="${svg}" alt="${alt}" width="48" >
    <h2 class="country-name">${official}</h2>
    </div>
    <ul class="list-info">
      <li>
        <p><span class="detail-info">Capital:</span> ${capital}</p>
      </li>
      <li>
        <p><span class="detail-info">Population:</span> ${population}</p>
      </li>
      <li>
        <p><span class="detail-info">Languages:</span> ${Object.values(
          languages
        ).join(', ')}</p>
      </li>
    </ul>`;
}
