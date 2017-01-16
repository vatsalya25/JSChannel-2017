function initMap() {
  var hotelposition = {lat: 12.972006, lng: 77.594871};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: hotelposition
  });
  var marker = new google.maps.Marker({
    position: hotelposition,
    map: map,
    title: 'JSChannel Conference'
  });
}
