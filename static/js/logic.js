//center map over Wake County zoomed out
var myMap = L.map("map", {
  center: [35.8032, -78.5661],
  zoom: 12
});
console.log('hello')
// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
maxZoom: 18,
id: "mapbox.streets",
accessToken: API_KEY
}).addTo(myMap);

d3.json("/colleges", function(err, college_data){
  console.log(college_data)

for (var i = 0; i < college_data.length; i++) {
  L.marker(college_data[i].location, {
    fillOpacity: 0.75,
    color: "white",
    fillColor: "purple",
    // Setting our circle's radius equal to the output of our markerSize function
    // This will make our marker's size proportionate to its population
    //consider adding acreage to radius
    // radius: markerSize(park_data[i].)
  }).bindPopup("<h1>" + college_data[i].collegename + "</h1> <hr> <h3>Address: " + college_data[i].address + "</h3>").addTo(myMap);
}
})