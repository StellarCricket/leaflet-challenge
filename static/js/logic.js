//URL from Json
let url =  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson"


// load map
var myMap = L.map("map", {
    center: [42.7125, -72.48],
    zoom: 13
  });
//  load layer 
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: "pk.eyJ1Ijoic3RlbGxhcmNyaWNrZXQiLCJhIjoiY2s3emNyaWZ0MDI1cDNocGs2NThtdTdsZCJ9.MqeiSj-5faFI37Ypu2b8FA"
  }).addTo(myMap);
//   accessing the data and looping through it 

 d3.json(url, function(response){

  

    for (var i = 0; i<response.length; i++){
        var location = response[i].geometry[coordiantes]
        var magnitude = response[i].properties[mag]

        // loop through json and make points on where the points are. make bubbles based on the mag 
        if (location){
            L.marker([location[1]].addTo(myMap))};
            
           

        console.log(location,magnitude)
    };


    // create a legend


 })