var lat = 46.960628,
    lng = 4.6392561;

var mymap = L.map('map', {
    center: [lat, lng],
    zoom: 9,
    scrollWheelZoom: false
});
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZG91aXMiLCJhIjoiY2sydjNvamtzMDB6ZzNlcGdmcnZsMHV3ayJ9.FE3faK5HYQ7kep8v8Y6t_g'
}).addTo(mymap);

var marker = L.marker([lat, lng]).addTo(mymap);