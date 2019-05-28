document.onload = loadLayersMap();

var L = window.L;

function loadLayersMap() {
    //established 4 markers for a given layer

    var littleton = L.marker([39.61, -105.02]).bindPopup("Littleton, CO"),
        denver = L.marker([39.74, -104.99]).bindPopup("Denver, CO"),
        aurora = L.marker([39.73, -104.8]).bindPopup("Aurora, CO"),
        golden = L.marker([39.77, -105.23]).bindPopup("Golden, CO");

    //incorporating markers into a LayerGroup

    var cities = L.layerGroup([littleton, denver, aurora, golden]);

    //this allows you to work with all markers simultaneously

    /**
     * Two types of layers:
     * 1. Base layers which are mutually exclusive (i.e. tile layers)
     * 2. Overlays, which is everything meant to go on top of the base layers
     *
     * Following exercise: Implement two base layers to use interchangeably, and an overlay
     * to switch on and off.
     */

    var attribution = 'Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>';
    var url = "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiY2FybHNvbSIsImEiOiJjanc1cHhmankxMXl2NGFvd2p5dDJxYjUyIn0.c3Ky0uPnrXYgHbHM72EZ3w";

    //NOT MAPBOX.GRAYSCALE
    var grayscale = L.tileLayer(url,
        {id: 'mapbox.light',
            attribution:  attribution}),

        darkGrayscale = L.tileLayer(url,
            {id: 'mapbox.dark',
            attribution:attribution}),

        streets = L.tileLayer(url,
            {id: 'mapbox.streets',
                attribution: attribution}),

        outdoors = L.tileLayer(url,
            {id: 'mapbox.outdoors',
                attribution: attribution}),

        satelliteStreets = L.tileLayer(url,
            {id: 'mapbox.satellite',
            attribution:attribution});

    var layersMap = L.map('map', {
       center: [39.73, -104.99],
       zoom: 12,
       layers: [grayscale, cities]
    });

    var baseMaps = {
        "Grayscale": grayscale,
        "Dark Grayscale": darkGrayscale,
        "Streets": streets,
        "Outdoors": outdoors,
        "Satellite Streets": satelliteStreets
    };

    var overlayMaps = {
        "Cities": cities
    };


    /* Layers Control */
    L.control.layers(baseMaps, overlayMaps).addTo(layersMap);

}
