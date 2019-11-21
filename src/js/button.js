const btn = document.getElementById('mapping')
const map = document.getElementById('map')
const close = document.getElementById('close')
btn.onclick = function() {
    map.style.display = "block";
    close.style.display = "block"
  }
 
 window.onclick = function(event) {
    if (event.target == map) {
      map.style.display = "none";
    }
  }
  close.onclick = function(){
    close.style.display = "none"
     map.style.display = "none" 
  }
//   let lat = document.getElementById('handleLat').innerHTML
// let lng = document.getElementById('handleLon').innerHTML
// document.getElementById('mapping').addEventListener('click',() => (
//     console.log(lat, lng)

// ))