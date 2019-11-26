window.onload = () => {
  document.getElementById('loaders').style.display = 'none';
};
let apiId = '5a929acdfbcb904243f282fc940e1200';
let units = 'metric';
let lng;
let lat;
let name;

const fbb = document.getElementById('fbb');
//  `document.getElementsByName('mec').value}`;
let searchMethod = 'q';
// if (document.getElementById('celcius').value) {
//   units = 'metric';
// } else {
//   units = 'imperial';
// }

function getSearchMethod(searchTerm) {
  if (searchTerm.length === 5 && Number.parseInt + '' === searchTerm) {
    searchMethod = 'zip';
  } else {
    searchMethod = 'q';
  }
}

function searchWeather(searchTerm) {
  // getSearchMethod(searchTerm)
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${apiId}&units=${units}`
  )
    .then(result => {
      return result.json();
    })
    .then(result => {
      return init(result);
    });
}
// q=London,uk&callback=test
const init = resultFromServer => {
  // console.log(console.log(document.getElementById('celcius').value))
  document.getElementById('mapping').disabled = false;
  //   console.log(resultFromServer);
  switch (resultFromServer.weather[0].main) {
    case 'Clear':
      document.documentElement.style.setProperty(
        '--bgi',
        "url('../image/cloud.jpg')"
      );
      break;
    case 'Clouds':
      document.documentElement.style.setProperty(
        '--bgi',
        "url('../image/cloudy.jpg')"
      );
      document.documentElement.style.color = 'black';
      document.getElementsByTagName('p');

      break;

    case 'Rain':
    case 'Drizzle':
    case 'mist':
      document.documentElement.style.setProperty(
        '--bgi',
        "url('../image/rain.jpg')"
      );
      document.documentElement.style.color = 'white';

      break;
    case 'Thunderstorm':
      document.documentElement.style.setProperty(
        '--bgi',
        "url('../image/thunder.jpg')"
      );
      document.documentElement.style.color = 'white';
      break;
    case 'Snow':
      document.documentElement.style.setProperty(
        '--bgi',
        "url('../image/snow.jpg')"
      );
      document.documentElement.style.color = 'black';

      break;
    case 'Fog':
      document.documentElement.style.setProperty(
        '--bgi',
        "url('../image/fog2.jpg')"
      );

      break;
    default:
      break;
  }
  lat = resultFromServer.coord.lat;
  lng = resultFromServer.coord.lon;
  name = resultFromServer.name;
  let temp = document.getElementById('handleTemp');
  let humidity = document.getElementById('handleHum');
  let windSpeed = document.getElementById('handleWc');
  let longitude = (document.getElementById('handleLon').innerHTML =
    resultFromServer.coord.lon);
  document.getElementById('handleLat').innerHTML = resultFromServer.coord.lat;
  let weather = document.getElementById('handleWeather');
  let displayTemp = document.getElementById('temp');
  let datee = document.getElementById('date');
  let icon = document.getElementById('w-icon');
  let wText = document.getElementById('w-text');
  let location = (document.getElementById('loca').innerHTML =
    resultFromServer.name);
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  datee.innerText = mm / dd / yyyy;
  icon.src =
    'https://openweathermap.org/img/w/' +
    resultFromServer.weather[0].icon +
    '.png';
  let des = resultFromServer.weather[0].description;
  wText.innerText = des.charAt(0).toUpperCase() + des.slice(1);
  temp.innerHTML = Math.floor(resultFromServer.main.temp) + '&#176';
  windSpeed.innerHTML = Math.floor(resultFromServer.wind.speed) + 'm/s';
  displayTemp.innerHTML = Math.floor(resultFromServer.main.temp);
  weather.innerText = des.charAt(0).toUpperCase() + des.slice(1);
  humidity.innerHTML = resultFromServer.main.humidity + '%';
  // fbb.setAttribute(
  //   'data-href',
  //   `https://www.google.com/maps/search/?api=1&query=${resultFromServer.coord.lat},${resultFromServer.coord.lon}`
  // );
};
document.getElementById('zipit').addEventListener('focus', () => {
  document.getElementById('search-btn').disabled = false;
});
document.getElementById('search-btn').addEventListener('click', () => {
  let searchTerm = document.getElementById('zipit').value;
  //   console.log(searchTerm);
  if (searchTerm) {
    return searchWeather(searchTerm);
  }
});
