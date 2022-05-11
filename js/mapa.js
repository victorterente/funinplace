var markers = [];

async function initMap() {
  //Map options
  let mapOptions = {
      zoom: 17,
      mapTypeId: 'roadmap',
      mapTypeControlOptions:{
          mapTypeIds:[]
      },
      mapId: 'f7dc6b907125f67f'

  }
  //link map options to actual map
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
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    markerGeolocation = new google.maps.Marker({
                        position: new google.maps.LatLng(pos.lat, pos.lng),
                        map: map
                    });

                    markerGeolocation.setIcon('../images/localizacaoatual.png')
                    google.maps.event.addListener(markerGeolocation, 'click', (function(marker) {
                        return function() {
                            infowindow.setContent("Localização atual");
                            infowindow.open(map, marker);
                        }
                    })(markerGeolocation));
                    map.setCenter(pos);
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


    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(
            browserHasGeolocation
                ? "Error: The Geolocation service failed."
                : "Error: Your browser doesn't support geolocation."
        );
    }

  //tenho que mudar o url
  const api_url2='https://cors-anywhere.herokuapp.com/https://vivaotejo.herokuapp.com/api/eventos'
  
  //funcao para obter discotecas
  async function getDisco(){
      const response=await fetch(api_url2);
      const discoteca=await response.json();

      console.log(discoteca);

      for (i = 0; i < discoteca.length; i++) {
          marker = new google.maps.Marker({
              position: new google.maps.LatLng(discoteca[i].lat, discoteca[i].long),
              map: map
          });

          marker.setIcon('../images/icons8-disco-ball-48.png')
          google.maps.event.addListener(marker, 'click', (function(marker, i) {
              return function() {
                  infowindow.setContent(discoteca[i].eventos_name);
                  infowindow.open(map, marker);
              }
          })(marker, i));
      }
  }
  getDisco();

  //tenho que mudar o url
  const api_url3='https://cors-anywhere.herokuapp.com/https://vivaotejo.herokuapp.com/api/eventos'
  
  //funcao para obter discotecas
  async function getRestaurantes(){
      const response=await fetch(api_url3);
      const restaurant=await response.json();

      console.log(restaurant);

      for (i = 0; i < restaurant.length; i++) {
          marker = new google.maps.Marker({
              position: new google.maps.LatLng(restaurant[i].lat, restaurant[i].long),
              map: map,
              markers.push(restaurant[i])
          });

          marker.setIcon('../images/restaurant.png')
          google.maps.event.addListener(marker, 'click', (function(marker, i) {
              return function() {
                  infowindow.setContent(restaurant[i].eventos_name);
                  infowindow.open(map, marker);
              }
          })(marker, i));
      }
  }
  getRestaurantes();

  
  //tenho que mudar o url
  const api_url4='https://cors-anywhere.herokuapp.com/https://vivaotejo.herokuapp.com/api/eventos'
  
  //funcao para obter discotecas
  async function getBares(){
      const response=await fetch(api_url4);
      const bares=await response.json();

      console.log(bares);

      for (i = 0; i < bares.length; i++) {
          marker = new google.maps.Marker({
              position: new google.maps.LatLng(bares[i].lat, bares[i].long),
              map: map
          });

          marker.setIcon('../images/bar.png')
          google.maps.event.addListener(marker, 'click', (function(marker, i) {
              return function() {
                  infowindow.setContent(bares[i].eventos_name);
                  infowindow.open(map, marker);
              }
          })(marker, i));
      }
  }
  getBares();

   //tenho que mudar o url
   const api_url5='https://cors-anywhere.herokuapp.com/https://vivaotejo.herokuapp.com/api/eventos'
  
   //funcao para obter discotecas
   async function getMuseu(){
       const response=await fetch(api_url5);
       const museu=await response.json();
 
       console.log(museu);
 
       for (i = 0; i < museu.length; i++) {
           marker = new google.maps.Marker({
               position: new google.maps.LatLng(museu[i].lat, museu[i].long),
               map: map
           });
 
           marker.setIcon('../images/museu.png')
           google.maps.event.addListener(marker, 'click', (function(marker, i) {
               return function() {
                   infowindow.setContent(museu[i].eventos_name);
                   infowindow.open(map, marker);
               }
           })(marker, i));
       }
   }
   getMuseu();

  //tenho que mudar o url
  const api_url6='https://cors-anywhere.herokuapp.com/https://vivaotejo.herokuapp.com/api/eventos'
  
  //funcao para obter discotecas
  async function getMonumentos(){
      const response=await fetch(api_url6);
      const monumentos=await response.json();

      console.log(monumentos);

      for (i = 0; i < monumentos.length; i++) {
          marker = new google.maps.Marker({
              position: new google.maps.LatLng(monumentos[i].lat, monumentos[i].long),
              map: map
          });

          marker.setIcon('../images/museu.png')
          google.maps.event.addListener(marker, 'click', (function(marker, i) {
              return function() {
                  infowindow.setContent(monumentos[i].eventos_name);
                  infowindow.open(map, marker);
              }
          })(marker, i));
      }
  }
  getMonumentos();

  function filterDiscotecas(){
    for ( i = 0 ; i< google.maps.)
  }


}