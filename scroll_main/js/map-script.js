mapboxgl.accessToken = 'pk.eyJ1IjoibWdkZXYiLCJhIjoiY2p4dzBpbnY1MDBnNzNrbXhqODhuNXBuOSJ9.WR7-Mdn3rIfJeps_BNUEBg';

var { MapboxLayer, HexagonLayer } = deck;

var start = [28.6790, -30.1115]

//Create the Mapbox map
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10?optimize=true',
    center: start,
    zoom: 7.2,
    pitch: 10,
    bearing: 0,
    antialias: true
});

map.scrollZoom.disable();

// Get Data for visual
data = d3.csv('https://raw.githubusercontent.com/feeblefruits/dig/master/data/claimants_coordinates_v3.csv')

//Create the deck.gl hexagon layer and style for the data
var COLOR_RANGE = [
[238,115,101],
[233,74,55],
[213,44,24]
];

var LIGHT_SETTINGS = {
    lightsPosition: [-0.144528, 49.739968, 8000, -3.807751, 54.104682, 8000],
    ambientRatio: 0.4,
    diffuseRatio: 0.6,
    specularRatio: 0.2,
    lightsStrength: [0.8, 0.0, 0.8, 0.0],
    numberOfLights: 2
};

var hexagonLayer;

//Add the deck.gl Custom Layer to the map once the Mapbox map loads
scroll-map.on('style.load', () => {

    hexagonLayer = new MapboxLayer({
        id: 'heatmap',
        type: HexagonLayer,
        colorRange: COLOR_RANGE,
        data: data,
        radius: 10000,
        coverage: 1,
        upperPercentile: 99.5,
        elevationScale: 1000,
        extruded: true,
        getPosition: d => [Number(d.Longitude), Number(d.Latitude)],
        opacity: 0.7,
        lightSettings: LIGHT_SETTINGS,
    });

    // Add the deck.gl hex layer below labels in the Mapbox map
    map.addLayer(hexagonLayer, 'waterway-label');
});


// ADD LOCATION CHAPTERS TO FLYTO
var chapters = {
'lesotho-eastern-cape': {
duration: 3000,
center: [25.0288, -24.0973],
zoom: 4,
pitch: 0,
bearing: 0,
description: "Lesotho and the Eastern Cape are by far the most affected regions"
},
'zimbabwe': {
duration: 3000,
center: [32.6334, -20.1914],
zoom: 8,
pitch: 45,
bearing: 30,
description: "The majority of Zimbabweans come from the Chipinge bordering Mozambique"
},
'botswana': {
duration: 3000,
center: [25.1966, -25.3430],
zoom: 8,
pitch: 50,
bearing: 20,
description: "While the majority of migrant workers from Botswana come from Ramotswa, Thamaga and Mokhomba."
},
'eswatini': {
duration: 3000,
center: [31.4630, -26.5179],
zoom: 8,
pitch: 45,
bearing: 20,
description: "But the landlocked countries like Eswatini are most affected."
},
'lesotho': {
duration: 3000,
bearing: 100,
center: [27.9869, -29.4151],
zoom: 5,
zoom: 7,
speed: 0.6,
pitch: 60,
description: "Lesotho recorded most migrant workers with towns like Maseru, Leribe and Berea having more miners than the towns in South Africa."

},
'eastern-cape': {
duration: 3000,
center: [28.7781, -31.6067],
zoom: 4,
bearing: 60,
zoom: 6.5,
bearing: 30,
pitch: 70,
description: "In the Eastern Cape however Lusikisiki, Port St John's and Butterworth are home most potential claimants."

}
};


var mapPosition = 0;
var chapterNames = Object.keys(chapters);


document.getElementById('go-button').addEventListener('click', function() {

// go to next index when clicked
mapPosition = mapPosition +1;

// if that index is the length of the list, return to 0
if (mapPosition === chapterNames.length) {
  mapPosition = 0;
}

console.log(mapPosition);

var chapterProperties = chapters[chapterNames[mapPosition]]

map.flyTo({

duration: chapterProperties['duration'],
center: chapterProperties['center'],
zoom: chapterProperties['zoom'],
bearing: chapterProperties['bearing'],
pitch: chapterProperties['pitch']

});

document.getElementById('floating-box-map').innerHTML  = chapterProperties['description'];

});

document.getElementById('back-button').addEventListener('click', function() {

// go to previous index when clicked
mapPosition = mapPosition -1;

// if index is less than the first item, go to 0
if (mapPosition === -1) {
  mapPosition = 0;
}

var chapterProperties = chapters[chapterNames[mapPosition]]

console.log(mapPosition);

map.flyTo({

duration: chapterProperties['duration'],
center: chapterProperties['center'],
zoom: chapterProperties['zoom'],
bearing: chapterProperties['bearing'],
pitch: chapterProperties['pitch']

});
});
