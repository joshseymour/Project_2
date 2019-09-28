function addLayergroup(markers, name) {
  var layerGroup = L.layerGroup(markers)
        .addTo(myMap);
  control.addOverlay(layerGroup , name);
}

//think we need to add a function to capture all of the data we're collecing in the routes
d3.json("/parks", function(park_data){
  var yellowIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  var parkInfo = []
  for (var i = 0; i < park_data.length; i++) {
    var park = L.marker(park_data[i].location, {
      fillOpacity: 0.75,
      icon: yellowIcon
    }).bindPopup("<h1>" + park_data[i].name + "</h1> <hr> <h3>Address: " + park_data[i].address + "</h3> <h3>Park Type: " + park_data[i].park_type + "</h3> <h3>Developed: " + park_data[i].developed + "</h3>");
    parkInfo.push(park) 
  }
  addLayergroup (parkInfo, "Parks");
});

d3.json("/dogParks", function(dog_data){
  console.log(dog_data)
  var blueIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  var dogInfo = []
  for (var i = 0; i < dog_data.length; i++) {
    var dog = L.marker(dog_data[i].location, {
      fillOpacity: 0.75,
      color: "red",
      fillColor: "blue",
      icon: blueIcon,
    }).bindPopup("<h1>" + dog_data[i].site + "</h1> <hr> <h3>Address: " + dog_data[i].address + "</h3> <h3>Park Hours: " + dog_data[i].hours + "</h3> <h3> Dog Fountain? " + dog_data[i].dog_fountain + "</h3> <h3> Bathroom? " + dog_data[i].bathroon + "</h3> <h3> Small Dog Area? " + dog_data[i].small_dog_area + "</h3> <h3> Climbing Platform? " + dog_data[i].climbing_platform + "</h3> <h3> Picnic Table? " + dog_data[i].picnic_table + "</h3> <h3> Shade? " + dog_data[i].shade + "</h3> <h3> Wood Chips? " + dog_data[i].wood_chips + "</h3>" ).addTo(myMap);
    dogInfo.push(dog)
  }
  addLayergroup (dogInfo, "Dog Parks");
});

d3.json("/colleges", function(err, college_data){
  console.log(college_data)
  var greenIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  var collegeInfo = []
  for (var i = 0; i < college_data.length; i++) {
    var schools = L.marker(college_data[i].location, {
      fillOpacity: 0.75,
      color: "red",
      fillColor: "blue",
      icon: greenIcon
    }).bindPopup("<h1>" + college_data[i].collegename + "</h1> <hr> <h3>Address: " + college_data[i].address + "</h3>").addTo(myMap);
    collegeInfo.push(schools)
  }
  addLayergroup (collegeInfo, "Colleges");
});

// d3.json("/crimes", function(crimes_data){
//   console.log(crimes_data)
//   var crimeInfo = []
//   for (var i = 0; i < crimes_data.length; i++) {
//     var crimes = L.marker(crimes_data[i].location, {
//       fillOpacity: 0.75,
//       color: "red",
//       fillColor: "blue"
//     }).bindPopup("<h1>" + crimes_data[i].crime + "</h1> <hr> <h3>Address: " + crimes_data[i].crime_description + "</h3>").addTo(myMap);
//     crimesInfo.push(crimes)
//   }
//   addLayergroup (crimeInfo, "Crimes");
// });



// Adding tile layer
var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
maxZoom: 18,
id: "mapbox.streets",
accessToken: API_KEY
});

// var parks = L.layerGroup(parkInfo);

var baseMaps = {
  "Street Map": streetmap
};

// var overlayMaps = {
//   "Parks": parks
// };

//center map over Wake County zoomed out
var myMap = L.map("map", {
  center: [35.8032, -78.5661],
  zoom: 12,
  layers: [streetmap]
});

var control = L.control.layers(baseMaps, {}, {
  collapsed: false
}).addTo(myMap);


