/*
* Initial setup of the map
*
**/
var L = window.L;
document.onload = loadMap2();

function loadMap() {
    var starterMap = L.map('review-map').setView([51.505, -0.09], 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={pk.eyJ1IjoiY2FybHNvbSIsImEiOiJjam82Y3o4MDIwamNwM3ZzMWw5ZWt6ZHdwIn0.xB2dV4Gs4qZcpMYkV4-6ew}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiY2FybHNvbSIsImEiOiJjam82Y3o4MDIwamNwM3ZzMWw5ZWt6ZHdwIn0.xB2dV4Gs4qZcpMYkV4-6ew'
    }).addTo(starterMap);

}

function loadMap2() {
    document.onload = loadMap();

    function loadMap() {
        var map = L.map('map').setView([51.505, -0.09], 13);


        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'sk.eyJ1IjoiY2FybHNvbSIsImEiOiJjanc1cTZ0aGoxMm01M3psOTgyZnk2NzNuIn0.KwduhSDdDk_cMuFLe5czRA'
        }).addTo(map);



    }
}


//setView also returns the map object
//this is the case for most Leaflet methods which don't return an explicit object
//this is great because it allows for jQuery-based method chaining

//by default, all interactions invlolving the mouse and touchpad are enabled
//zooming is also enabled

/* Adding a tile layer */
