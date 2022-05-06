// Initialize and add the map
function initMap() {
    // The location of Iade
    const Iade = { lat: 38.707689, lng: -9.153525 };

    //Adding more markers
    const Lust = { lat: 38.706031, lng: -9.1511101 };
    const KUrbanBeach = { lat: 38.7038106, lng: -9.1779334 };

    // The map, centered at Iade
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16
      ,
      center: Iade,
    });
    // The marker, positioned at Iade
    const marker = new google.maps.Marker({
      position: Iade,
      
      map: map,
    });
    
  }
  
  window.initMap = initMap;