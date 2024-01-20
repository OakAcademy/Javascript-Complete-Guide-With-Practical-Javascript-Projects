'use strict';

const container = document.querySelector('.countries_container');

///////////////////////////////////////

// //XML HTTP REQUEST
const showHtml = function (dataObj) {
  const countryHtml = `
        <div class="country_card">
          <div class="flag">
            <img src="${dataObj.flags.png}" />
          </div>
          <div class="data_container">
            <h3 class="name">${dataObj.name.common}</h3>
            <h4 class="region">${dataObj.region}</h4>
            <p class="row">Capital: ${dataObj.capital[0]}</p>
            <p class="row">Language: ${Object.values(dataObj.languages)[0]}</p>
            <p class="row">Population: ${dataObj.population.toLocaleString()}</p>
          </div>
        </div>
  `;

  container.insertAdjacentHTML('beforeend', countryHtml);
};
// const getCountry = function (countryName) {
//   const request = new XMLHttpRequest(); //OLD WAY
//   request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [dataObj] = JSON.parse(this.responseText);
//     console.log(dataObj);

//     showHtml(dataObj);

//     const borderContries = dataObj.borders;
//     if (!borderContries.length) return;
//     const requestBorders = new XMLHttpRequest(); //OLD WAY
//     requestBorders.open(
//       'GET',
//       `https://restcountries.com/v3.1/alpha?codes=${borderContries}`
//     );
//     requestBorders.send();
//     requestBorders.addEventListener('load', function () {
//       const bordersData = JSON.parse(this.responseText);
//       console.log(bordersData);
//       bordersData.forEach((border) => showHtml(border));
//     });
//   });
// };

///////// OLD WAY
//   const request = new XMLHttpRequest(); //OLD WAY
//   request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
//   request.send();

const handleFetchData = function (endpoint, errorMessage) {
  return fetch(endpoint).then((response) => {
    console.log(response);
    if (!response.ok) throw new Error(errorMessage);
    return response.json();
  });
};

const getCountry = function (countryName) {
  const request = handleFetchData(
    `https://restcountries.com/v3.1/name/${countryName}`,
    'Country not found!'
  )
    .then((data) => {
      showHtml(data[0]);
      const borderCountries = data[0].borders;
      // const borderCountries = ['sdfgdfg'];
      if (!borderCountries) throw new Error('There is no border country!');
      return handleFetchData(
        `https://restcountries.com/v3.1/alpha?codes=${borderCountries}`,
        'Country not found!'
      );
    })
    .then((data) => data.forEach((el) => showHtml(el)))
    .catch((error) => {
      console.log(`Ooops, something went wrong. ${error}`);
      showError(`Ooops, something went wrong. ${error.message}`);
    })
    .finally(() => console.log('Always'));
};

const showError = function (errorMessage) {
  container.insertAdjacentText('beforeend', errorMessage);
};

getCountry('iceland');
