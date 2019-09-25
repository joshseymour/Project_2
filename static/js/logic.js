//center map over Wake County zoomed out
var myMap = L.map("map", {
    center: [35.8032, -78.5661],
    zoom: 12
  });

  // Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

d3.json("/parks", function(park_data){
  // console.log(park_data)
  park_info = []
  for (var i = 0; i < park_data.length; i++) {
    var park = L.marker(park_data[i].location, {
      fillOpacity: 0.75,
      color: "white",
      fillColor: "purple",
      // Setting our circle's radius equal to the output of our markerSize function
      // This will make our marker's size
      //consider adding acreage to radius
      // radius: markerSize(park_data[i].)
    }).bindPopup("<h1>" + park_data[i].name + "</h1> <hr> <h3>Address: " + park_data[i].address + "</h3> <h3>Park Type: " + park_data[i].park_type + "</h3> <h3>Developed: " + park_data[i].developed + "</h3>");
    park_info.push(park) 
  }
  // console.log(park_info)
})

d3.json("/dogParks", function(dog_data){
  // console.log(dog_data)
  // dog_info = []
  var greenIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  for (var i = 0; i < dog_data.length; i++) {
    // var dog = 
    L.marker(dog_data[i].location, {
      fillOpacity: 0.75,
      color: "red",
      fillColor: "blue",
      icon: greenIcon,
      // Setting our circle's radius equal to the output of our markerSize function
      // This will make our marker's size proportionate to its population
      //consider adding acreage to radius
      // radius: markerSize(dog_data[i].park_id) * 1000
    }).bindPopup("<h1>" + dog_data[i].site + "</h1> <hr> <h3>Address: " + dog_data[i].address + "</h3> <h3>Park Hours: " + dog_data[i].hours + "</h3> <h3> Dog Fountain? " + dog_data[i].dog_fountain + "</h3> <h3> Bathroom? " + dog_data[i].bathroon + "</h3> <h3> Small Dog Area? " + dog_data[i].small_dog_area + "</h3> <h3> Climbing Platform? " + dog_data[i].climbing_platform + "</h3> <h3> Picnic Table? " + dog_data[i].picnic_table + "</h3> <h3> Shade? " + dog_data[i].shade + "</h3> <h3> Wood Chips? " + dog_data[i].wood_chips + "</h3>" ).addTo(myMap);
    // dog_info.push(dog)
  }
})