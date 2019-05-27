/*
* Initial setup of the map
* Credits: https://leafletjs.com/examples/quick-start/
*
**/
var L = window.L;
document.onload = loadMap();
var popup = L.popUp();


function loadMap() {
    var starterMap = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiY2FybHNvbSIsImEiOiJjanc1cHhmankxMXl2NGFvd2p5dDJxYjUyIn0.c3Ky0uPnrXYgHbHM72EZ3w'
    }).addTo(starterMap);

    //make this stand out a little more

    var circle = L.circle([51.508, -0.11], {
        color:'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(starterMap);

    var polygon = L.polygon([
        [51.509, -0.078],
        [51.503, -0.06],
        [51.51, -0.047]
    ], {
        color: '#d99645',
        fillColor:'#ffffff',
        fillOpacity: 0.5
    }).addTo(starterMap);

    /* Markers and Popups*/
    var marker = L.marker([51.505, -0.09]).addTo(starterMap);

    marker.bindPopup("<strong> Popup representing this segment of the United Kingdom!</strong>").openPopup();
    circle.bindPopup("Circle");

    /* Using Popups as Layers */
    var standAlonePopup = L.popup()
        .setLatLng([51.512, -0.09])
        .setContent("Standalone Popup here!")
        .openOn(starterMap);

    starterMap.on('click', onMapClick);

}

/* Last section: Events */
var popup2 = L.popUp();

function onMapClick(e) {
 popup2
     .setLatLng(e.latlng)
     .setContent("You just clicked the map at:" + e.latlng.toString())
     .openOn(starterMap);
}






//setView also returns the map object
//this is the case for most Leaflet methods which don't return an explicit object
//this is great because it allows for jQuery-based method chaining

//by default, all interactions invlolving the mouse and touchpad are enabled
//zooming is also enabled

/* Adding a tile layer */
