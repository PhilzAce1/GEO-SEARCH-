var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
function initMap() {
  var searched;
  var map;
  var location = 'Lagos';
  axios
    .get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: location,
        key: 'AIzaSyBYGTJio78JOAqEhbKu8Sj2geI4iYk_7wU'
      }
    })
    .then(res => {
      searched = {
        lat: parseFloat(res.data.results[0].geometry.location.lat),
        lng: parseFloat(res.data.results[0].geometry.location.lng)
      };
      //   lat = parseFloat(res.data.results[0].geometry.location.lat);
      //   lng = parseFloat(res.data.results[0].geometry.location.lat);

      console.log(searched);
    })
    .catch(err => console.error(err));
  // map options
  var options = {
    zoom: 8,
    center: searched
  };
  map = new google.maps.Map(document.getElementById('map'), options);
  //   var marker = new google.maps.Marker({
  //     position: searched,
  //     // icon: iconBase + 'info-i_maps.png',
  //     map: map
  //   });
  //   google.maps.event.addListener(map, 'click', function(event) {
  //     addMarker({ coords: event.latLng });
  //     // console.log(event.latLng)
  //   });
  //   addMarker({
  //     coords: { lat: lat, lng: lng },
  //     iconImage:
  //       'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
  //     // content:'<h1>something</h1>'
  //   });
  // //   // Add Marker
  //   function addMarker(props) {
  //     var marker = new google.maps.Marker({
  //       position: props.coords,
  //       map: map
  //       //  icon:props.iconImage
  //     });
  //     if (props.iconImage) {
  //       marker.setIcon(props.iconImage);
  //     }
  //     if (props.content) {
  //       var infoWindow = new google.maps.InfoWindow({
  //         content: props.content
  //       });
  //       marker.addListener('click', () => {
  //         infoWindow.open(map, marker);
  //       });
  //     }
  //   }
}
