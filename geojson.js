/* Agenda: To create and interact with map vectors created from GeoJSON objects*/

document.onload = loadMap();

var L = window.L;

/* Example of a simple GeoJSON feature */
/* var geojsonFeature = {
    "type": "Feature",
    "properties" : {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "Where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates" : [-104.9904, 39.75621]
    }
}; */

var states = [{
    "type": "Feature",
    "properties" : {
        "party": "Republican"
    },
    "geometry": {
        "type": "Polygon",
        "coordinates" : [[
            [-104.05, 48.99],
            [-97.22, 48.98],
            [-96.58, 45.94],
            [-104.03, 45.94],
            [-104.05, 48.99]
        ]]
    }
}, {
    "type": "Feature",
    "properties": {"party": "Democrat"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [-109.05, 41.00],
            [-102.06, 40.99],
            [-102.03, 36.99],
            [-109.04, 36.99],
            [-109.05, 41.00]
        ]]
    }
}];
console.log(states);


function loadMap() {
    var map = L.map('map').setView([51.505, -0.09], 13);

    /* First way of doing it
    L.geoJSON(geojsonFeature).addTo(map);*/

    /* Second and better way of doing it
    var geoLayer = L.geoJSON().addTo(map);
    geoLayer.addData(geojsonFeature);*/

    L.geoJSON(states, {
        style: function(feature) {
            switch(feature.properties.party) {
                case 'Republican': return { color: "red"};
                case 'Democrat': return {color: 'blue'};
            }
        }
    }).addTo(map);

/* Points to Layers */
    //By default, points are displayed as markers

    var randomFeature = {
      "type": "Feature",
      "properties": {"name": "Random Feature"},
      "geometry": {
          "type": "Point",
          "coordinates" : [-104.09, 36.99]
      }
    };

    var latlng = randomFeature.geometry.coordinates;

    var geojsonMarkerOptions = {
      radius: 8,
      fillColor: "#ff7800",
      color: "#000",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    };

    L.geoJSON(randomFeature, {
        pointToLayer: function(feature, latlng) {
            return L.circleMarker(latlng, geojsonMarkerOptions);
        }
    }).addTo(map);

    console.log(randomFeature);
    console.log(latlng);


}