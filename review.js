/*
* Initial setup of the map
* Credits: https://leafletjs.com/examples/quick-start/
*
**/
var L = window.L;
document.onload = loadMap();

function loadMap() {
    var starterMap = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'sk.eyJ1IjoiY2FybHNvbSIsImEiOiJjanc1cTZ0aGoxMm01M3psOTgyZnk2NzNuIn0.KwduhSDdDk_cMuFLe5czRA'
    }).addTo(starterMap);

}




//setView also returns the map object
//this is the case for most Leaflet methods which don't return an explicit object
//this is great because it allows for jQuery-based method chaining

//by default, all interactions invlolving the mouse and touchpad are enabled
//zooming is also enabled

/* Adding a tile layer */
