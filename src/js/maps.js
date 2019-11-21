 function initMap() {
    // map options
    var options = {
        zoom:8, 
        center:{lat: 42.3601, lng: -71.0589},
    }
    var map = new google.maps.Map(document.getElementById('map'), options)


    google.maps.event.addListener(map, 'click' ,
    function(event){
        addMarker({coords:event.latLng})
        // console.log(event.latLng)
    })
    addMarker({
        coords:{lat: 42.4668,lng: -70.9495},
        iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        // content:'<h1>something</h1>'
    })
    // Add Marker 
    function addMarker(props){

        var marker = new google.maps.Marker({
         position:props.coords,
         map:map,
        //  icon:props.iconImage
    })
    if (props.iconImage){
        marker.setIcon(props.iconImage)
    }
    if(props.content){
        
    var infoWindow =  new google.maps.InfoWindow({
        content:props.content
    })
    marker.addListener('click', () => {
        infoWindow.open(map, marker)
    })

    }
  }
}  
