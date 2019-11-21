var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
function initMap() {
  var searched;
  var lati;
  var lngi;

  var location = document.getElementById('zipit').value;
  axios
    .get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: location,
        key: 'AIzaSyBYGTJio78JOAqEhbKu8Sj2geI4iYk_7wU'
      }
    })
    .then(res => {
      return maps(res);
    })
    .catch(err => console.error(err));
  const maps = searchedItem => {
    lati = new Number(
      searchedItem.data.results[0].geometry.location.lat
    ).toFixed(3);
    lngi = new Number(
      searchedItem.data.results[0].geometry.location.lng
    ).toFixed(3);
    //
    // map options
    var options = {
      zoom: 16,
      center: {
        lat: parseFloat(lati),
        lng: parseFloat(lngi)
      }
    };
    console.log(options);
    var map = new google.maps.Map(document.getElementById('zipit'), options);
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
