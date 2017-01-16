function initMap() {
        var position = {lat: 12.972006, lng: 77.5926823};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });

        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });

      }
