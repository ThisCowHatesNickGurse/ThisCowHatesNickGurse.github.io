let userLat, userLng;
let randomLat, randomLng;
let guessMap, marker, actualMarker;
const radiusMeters = 1000;

function startGame() {
  document.getElementById('results').innerText = "Getting location...";
  navigator.geolocation.getCurrentPosition(pos => {
    userLat = pos.coords.latitude;
    userLng = pos.coords.longitude;

    const randomPoint = getRandomLocation(userLat, userLng, radiusMeters);
    randomLat = randomPoint.latitude;
    randomLng = randomPoint.longitude;

    showStreetViewLocation(randomLat, randomLng);
  }, () => {
    alert("Location access denied.");
  });
}

// Generate random location within radius
function getRandomLocation(lat, lng, radius) {
  const y0 = lat;
  const x0 = lng;
  const rd = radius / 111300; // ~meters in one degree

  const u = Math.random();
  const v = Math.random();

  const w = rd * Math.sqrt(u);
  const t = 2 * Math.PI * v;
  const x = w * Math.cos(t);
  const y = w * Math.sin(t);

  return { latitude: y0 + y, longitude: x0 + x };
}

function showStreetViewLocation(lat, lng) {
  if (guessMap) guessMap.remove();

  document.getElementById('map').innerHTML = "";
  guessMap = L.map('map').setView([lat, lng], 17);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(guessMap);

  // After showing random point, wait for guess
  document.getElementById('results').innerHTML = "Click on the map where you think your real location is.";

  guessMap.on('click', function(e) {
    if (marker) guessMap.removeLayer(marker);
    marker = L.marker(e.latlng).addTo(guessMap);

    const guessedLat = e.latlng.lat;
    const guessedLng = e.latlng.lng;

    // Show actual position
    actualMarker = L.circleMarker([userLat, userLng], {radius: 8, color: 'red'}).addTo(guessMap);
    actualMarker.bindPopup("Actual Location").openPopup();

    const distance = getDistanceFromLatLonInKm(userLat, userLng, guessedLat, guessedLng);
    document.getElementById('results').innerHTML = `You were <strong>${distance.toFixed(2)} km</strong> away!`;
  });
}

// Haversine formula
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  function deg2rad(deg) {
    return deg * (Math.PI/180);
  }

  const R = 6371;
  const dLat = deg2rad(lat2-lat1);
  const dLon = deg2rad(lon2-lon1);
  const a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}