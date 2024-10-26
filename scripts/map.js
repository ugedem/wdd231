// Map.js

let map, marker, compass;

// Coordinates for Mkpouto Cuisine near Weeldrop Filling Station, Akobo, Ibadan
const cuisineLocation = { lat: 7.4389, lng: 3.9345 }; // Actual coordinates for Mkpouto Cuisine

function initMap() {
    // Initialize the map centered around Mkpouto Cuisine
    map = new google.maps.Map(document.getElementById('map'), {
        center: cuisineLocation,
        zoom: 15,
    });

    // Marker for Mkpouto Cuisine
    marker = new google.maps.Marker({
        position: cuisineLocation,
        map: map,
        title: 'Mkpouto Cuisine',
    });

    // Create a compass element on the page
    compass = document.createElement('div');
    compass.id = 'compass';
    document.body.appendChild(compass);

    // Set up compass heading listener
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(updateCompassDirection, handleError, {
            enableHighAccuracy: true,
        });
    } else {
        alert('Geolocation is not supported by this browser.');
    }
}

// Calculate and update the compass direction
function updateCompassDirection(position) {
    const userLat = position.coords.latitude;
    const userLng = position.coords.longitude;
    const userLocation = new google.maps.LatLng(userLat, userLng);
    const cuisineLatLng = new google.maps.LatLng(cuisineLocation.lat, cuisineLocation.lng);

    // Calculate bearing (angle) from user's location to Mkpouto Cuisine
    const heading = google.maps.geometry.spherical.computeHeading(userLocation, cuisineLatLng);

    // Rotate compass element to align with heading
    compass.style.transform = `rotate(${heading}deg)`;
}

// Error handler for geolocation
function handleError(error) {
    console.warn(`Geolocation error (${error.code}): ${error.message}`);
}

// Load Google Maps API
function loadGoogleMapsAPI() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAjI6O5MljeooiRZGSCoRPibe0gpUNEAuM&libraries=geometry&callback=initMap`;
    script.async = true;
    document.head.appendChild(script);
}

// Load the Google Maps API with the provided API key
loadGoogleMapsAPI();
