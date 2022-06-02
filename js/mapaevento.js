var directionsRenderer;
var directionsService ;
var posicao;
var pos1 = {
    lat: 38.768738843853676, 
    lng: -9.094049857109368,
  };
var map2;
function initMap2() 
{
    directionsRenderer = new google.maps.DirectionsRenderer();
    directionsService = new google.maps.DirectionsService();
    const infoWindoGeolocation = new google.maps.InfoWindow()
    let mapOptions = {
        center: pos1,
        zoom: 17,
        mapTypeId: 'roadmap',
        mapId: '52f30d26d6afc56a'
    
     }
     let map2 = new google.maps.Map(document.getElementById('map2'), mapOptions);
    const infowindow = new google.maps.InfoWindow()
// Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    posicao = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    markerGeolocation = new google.maps.Marker({
                        position: new google.maps.LatLng(posicao.lat, posicao.lng),
                        map: map2
                    });

                    
                    map2.setCenter(posicao);
                },
                () => {
                    handleLocationError(true, infoWindoGeolocation, map2.getCenter());
                }
            );
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindoGeolocation, map2.getCenter());
        }

        
        directionsRenderer.setMap(map2);

}
window.initMap2 = initMap2;

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
        browserHasGeolocation
            ? "Error: The Geolocation service failed."
            : "Error: Your browser doesn't support geolocation."
    );
}