function initMap() {
    var drag = true;
    var width_screen = window.screen.width;
    if (width_screen <= 768) {
        drag = false;
    }
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 12.9679078, lng: 77.6014855 },
        zoom: 15,
        zoomControl: true,
        scaleControl: false,
        scrollwheel: false,
        disableDoubleClickZoom: true,
        draggable: drag
    });
    var marker = new google.maps.Marker({
        position: { lat: 12.9679078, lng: 77.6014855 },
        map: map,
        icon: '../favicon.ico',
        title: 'JSChannel Conference'


    });
    var infoWindow = new google.maps.InfoWindow({
        content: '<h4>JSChannel Conference</h4> <p class="map-bold">Ritz Carlton</p><p> No., 99, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025</p> '
    });
    google.maps.event.addListener(marker, 'click', function() {
        infoWindow.open(map, marker);
    });
}
