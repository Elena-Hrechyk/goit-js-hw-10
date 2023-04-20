import './css/styles.css';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';
import Debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';
import { createSearchList } from './js/createMarkup';
import { createCountryInfo } from './js/createMarkup';
import { clearMarkup } from './js/createMarkup';

const input = document.querySelector('input[id="search-box"]');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
const delay = 300;

input.addEventListener('input', Debounce(onSerchCountry, delay));

function onSerchCountry(evt) {
  const searchCountry = evt.target.value.trim();
  if (searchCountry === '') {
    clearMarkup();
  } else {
    fetchCountries(searchCountry)
      .then(data => {
        if (data.length > 10) {
          Notiflix.Notify.info(
            `Too many matches found. Please enter a more specific name.`
          );
          clearMarkup();
        } else if (data.length === 1) {
          countryInfo.innerHTML = createCountryInfo(data[0]);
          countryList.innerHTML = '';
        } else if (data.length > 2 && data.length < 10) {
          countryList.innerHTML = createSearchList(data);
          countryInfo.innerHTML = '';
        } else {
          clearMarkup();
        }
      })
      .catch(() =>
        Notiflix.Notify.failure(`Oops, there is no country with that name`)
      );
  }
}
