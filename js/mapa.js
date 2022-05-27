var markers = [];
var marcadorselecionado;
var pos;
var pos1 = {
  lat: 38.768738843853676, 
  lng: -9.094049857109368,
};

var pos2 = {
    lat: 38.76, 
    lng: -9.0,
  };

var directionsRenderer
var directionsService 
// Initialize and add the map
function initMap() 
{
    directionsRenderer = new google.maps.DirectionsRenderer();
    directionsService = new google.maps.DirectionsService();
  let mapOptions = {
    center: new google.maps.LatLng('38.708524', '-9.1601855'),
    zoom: 17,
    mapTypeId: 'roadmap',
    mapTypeControlOptions:{
        mapTypeIds:[]
    },
    mapId: '52f30d26d6afc56a'

 }
 let map = new google.maps.Map(document.getElementById('map'), mapOptions);
  const infowindow = new google.maps.InfoWindow()

  const infoWindoGeolocation = new google.maps.InfoWindow()

    const locationButton = document.createElement("button");

    locationButton.textContent = "Localização atual";
    locationButton.classList.add("custom-map-control-button");
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
    locationButton.addEventListener("click", () => {
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const posicao = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    markerGeolocation = new google.maps.Marker({
                        position: new google.maps.LatLng(posicao.lat, posicao.lng),
                        map: map
                    });

                    
                    map.setCenter(posicao);
                },
                () => {
                    handleLocationError(true, infoWindoGeolocation, map.getCenter());
                }
            );
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindoGeolocation, map.getCenter());
        }
    });
  


    //funcao para obter discotecas
async function getDisco(){
    const api_url2='https://cors-anywhere.herokuapp.com/https://funinplace.herokuapp.com/tl/1'
    const response=await fetch(api_url2);
    const discoteca=await response.json();
    

    console.log(discoteca);

    for (i = 0; i < discoteca.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(discoteca[i].lat, discoteca[i].long),
            map: map
        });

        marker.setIcon('./images/icons8-disco-ball-48.png')
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                marcadorselecionado = new google.maps.LatLng(discoteca[i].lat, discoteca[i].long);
                infowindow.setContent(discoteca[i].local_nome);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}

//funcao para obter restaurante
async function getRestaurantes(){
  const api_url3='https://cors-anywhere.herokuapp.com/https://funinplace.herokuapp.com/tl/2'
  const response=await fetch(api_url3);
  const restaurant=await response.json();

  console.log(restaurant);

  for (i = 0; i < restaurant.length; i++) {
    marker = new google.maps.Marker({
          position: new google.maps.LatLng(restaurant[i].lat, restaurant[i].long),
          map: map,
      });

      marker.setIcon('./images/restaurant.png')
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
              marcadorselecionado = new google.maps.LatLng(restaurant[i].lat, restaurant[i].long);
              infowindow.setContent(restaurant[i].local_nome);
              infowindow.open(map, marker);
          }
      })(marker, i));
  }
}

//funcao para obter museu
async function getMuseu(){
  const api_url5='https://cors-anywhere.herokuapp.com/https://funinplace.herokuapp.com/tl/3'
  const response=await fetch(api_url5);
  const museu=await response.json();

  console.log(museu);

  for (i = 0; i < museu.length; i++) {
      marker = new google.maps.Marker({
          position: new google.maps.LatLng(museu[i].lat, museu[i].long),
          map: map
      });

      marker.setIcon('./images/museu.png')
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
              marcadorselecionado = new google.maps.LatLng(museu[i].lat, museu[i].long);
              infowindow.setContent(museu[i].local_nome);
              infowindow.open(map, marker);
          }
      })(marker, i));
  }
}
  getDisco();
  getRestaurantes();
  getMuseu();
  
  
   //search bar
   var input = document.getElementById('pac-input');
   map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

   var autocomplete = new google.maps.places.Autocomplete(input);
   autocomplete.bindTo('bounds', map);

   var infowindow1 = new google.maps.InfoWindow();
   var marker1 = new google.maps.Marker({
       map: map,
       anchorPoint: new google.maps.Point(0, -29)
   });

   autocomplete.addListener ('place_changed', function() {
     infowindow1.close();
     marker1.setVisible(false);
     var place = autocomplete.getPlace();
     if (!place.geometry) {
         window.alert("Autocomplete's returned place contains no geometry");
         return;
     }

     // If the place has a geometry, then present it on a map.
     if (place.geometry.viewport) {
         map.fitBounds(place.geometry.viewport);
     } else {
         map.setCenter(place.geometry.location);
         map.setZoom(17);
     }
     marker1.setIcon(({
         url: place.icon,
         size: new google.maps.Size(71, 71),
         origin: new google.maps.Point(0, 0),
         anchor: new google.maps.Point(17, 34),
         scaledSize: new google.maps.Size(35, 35)
     }));
     marker1.setPosition(place.geometry.location);
     marker1.setVisible(true);

     var address = '';
     if (place.address_components) {
         address = [
             (place.address_components[0] && place.address_components[0].short_name || ''),
             (place.address_components[1] && place.address_components[1].short_name || ''),
             (place.address_components[2] && place.address_components[2].short_name || '')
         ].join(' ');
     }

     infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
     infowindow.open(map, marker1);

 });

 
function calcRoute() {
    var request = {
        origin: pos1,
        destination: pos2,
        
        travelMode: 'DRIVING',
    };
    directionsService.route(request, function(response, status) {
      if (status == 'OK') {
        directionsRenderer.setDirections(response);
      }
    });
  }
  directionsRenderer.setMap(map);

}
window.initMap = initMap;





 async function calculateAndDisplayRoute(directionsService, directionsRenderer){
    
     if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(
         (position) => {
           pos = {
             lat: position.coords.latitude,
             lng: position.coords.longitude,
           };
         },
       );
     } else {
       // Browser doesn't support Geolocation
       handleLocationError(false, infoWindow, map.getCenter());
     }
 
     console.log(pos)
 
     directionsService
    .route({
        origin: pos,
        destination: marcadorselecionado,
        travelMode: 'DRIVING',
        

    })

    .then((response) => {
        directionsRenderer.setDirections(response);
    })
 }

 function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
        browserHasGeolocation
            ? "Error: The Geolocation service failed."
            : "Error: Your browser doesn't support geolocation."
    );
}
  

