var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
var lati;
var lngi;
function initMap() {
  var searched;

  var location = document.getElementById('zipit').value;
  axios
    .get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: location,
        key: 'AIzaSyBYGTJio78JOAqEhbKu8Sj2geI4iYk_7wU'
      }
    })
    .then(res => {
      // console.log(res);
      getImage(res);
      maps(res);
      return res;
    })
    .catch(err => console.error(err));

  const maps = searchedItem => {
    lati = new Number(
      searchedItem.data.results[0].geometry.location.lat
    ).toFixed(3);
    lngi = new Number(
      searchedItem.data.results[0].geometry.location.lng
    ).toFixed(3);
    var options = {
      zoom: 16,
      center: {
        lat: parseFloat(lati),
        lng: parseFloat(lngi)
      }
    };

    // console.log(options);
    var map = new google.maps.Map(document.getElementById('map'), options);
    var marker = new google.maps.Marker({
      position: options.center,
      icon: iconBase + 'library_maps.png',
      map: map
    });
  };
}

document.getElementById('zipit').addEventListener('input', () => {
  var input = document.getElementById('zipit');
  var autocomplete = new google.maps.places.Autocomplete(input);
  var searchBox = new google.maps.places.SearchBox(input);
});

function getImage(searchedItem) {
  let im = document.getElementById('pic');
  im.setAttribute(
    'src',
    ` https://maps.googleapis.com/maps/api/streetview?size=1080x1920&location=${new Number(
      searchedItem.data.results[0].geometry.location.lat
    )},${new Number(
      searchedItem.data.results[0].geometry.location.lng
    )}&fov=80&heading=70&pitch=0&key=AIzaSyDd1vX46rLVJsuE4NUmZcgp7_m34wwMgHA`
  );
}
document.getElementById('openImg').addEventListener('click', () => {
  document.getElementById('image').style.visibility = 'visible';
});
document.getElementById('close-image').addEventListener('click', () => {
  document.getElementById('image').style.visibility = 'hidden';
});
const takeToNext = () => {
  console.log('what is going on');
  return (location.href = `/weather.html?lat=${lati}&lon=${lngi}`);
};
document
  .getElementById('shareMap')
  .addEventListener('click', () => takeToNext());
