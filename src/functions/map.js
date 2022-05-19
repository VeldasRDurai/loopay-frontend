// const createMap = ({ lat, lng }) => {
//     return new google.maps.Map(document.getElementById('map'), {
//         center: { lat, lng },
//         zoom: 15
//     });
// };
  
// const createMarker = ({ map, position }) => {
//     return new google.maps.Marker({ map, position });
// };
  
const geolocationValidation = onError =>
    ('geolocation' in navigator === false) &&
        onError(new Error('Geolocation is not supported by your browser.'));

const getCurrentPosition = ({ onSuccess, onError = () => { }, }) => {
    geolocationValidation( onError );
    return navigator.geolocation.getCurrentPosition(onSuccess, onError, {
      enableHighAccuracy: true
    });
};

const watchPosition = ({ onSuccess, onError = () => { }, }) => {
    geolocationValidation( onError );
    return navigator.geolocation.watchPosition(onSuccess, onError, {
      enableHighAccuracy: true
    });
};

const clearWatch = ( watch ) => {
    return navigator.geolocation.clearWatch(watch);
};

const getPositionErrorMessage = code => {
  switch (code) {
    case 1:
      return 'Permission denied.';
    case 2:
      return 'Position unavailable.';
    case 3:
      return 'Timeout reached.';
    default:
      return null;
  }
}

export {
    // createMap,
    // createMarker,
    getCurrentPosition,
    watchPosition,
    clearWatch,
    getPositionErrorMessage
};

// function init() {
//   const initialPosition = { lat: 59.325, lng: 18.069 };
//   const map = createMap(initialPosition);
//   const marker = createMarker({ map, position: initialPosition });
//   let [ latitude, longitude ] = [ 0, 0 ]
//   getCurrentPosition({
//     onSuccess: ({ coords: { latitude: lat, longitude: lng } }) => {
//       marker.setPosition({ lat, lng });
//       map.panTo({ lat, lng });
//       console.log( { lat, lng } );
//       [ latitude, longitude ] = [ lat, lng ]
//     },
//     onError: err =>
//       alert(`Error: ${getPositionErrorMessage(err.code) || err.message}`)
//   });
//   initMap();
// }

// function initMap() {
//   var directionsService = new google.maps.DirectionsService();
//   var directionsRenderer = new google.maps.DirectionsRenderer();
//   var haight = new google.maps.LatLng(11.831981079043702, 75.97133655464768);
//   var oceanBeach = new google.maps.LatLng(11.832701450381295, 75.9686964803888);
//   var mapOptions = {
//     zoom:18,
//     center: oceanBeach
//   }
//   var map = new google.maps.Map(document.getElementById('map2'), mapOptions);
//   directionsRenderer.setMap(map);


//   var request = {
//     origin: haight,
//     destination: oceanBeach,
//     travelMode: 'DRIVING'
//   };
//   directionsService.route(request, function(result, status) {
//     if (status == 'OK') {
//       directionsRenderer.setDirections(result);
//     }
//   });
// }