/* =====================
Leaflet Configuration
===================== */

var map = L.map('map', {
  center: [40.000, -75.1090],
  zoom: 11
});
var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

$('#url').val('https://raw.githubusercontent.com/CPLN690-MUSA610/datasets/master/json/philadelphia-bike-crashes-snippet.json')
$('#lat').val('LAT')
$('#lon').val('LNG')

s
$ ('button#fire')/click(function(e)){
  console.log($('#url').val(),$('#lat').val(),$('#lon').val());
  $.ajax(myURL).don(function(response){
    var parsed = JSON.parse(responssse);
    var markers=_.map(parsed,function(record) {
      var lat=record[$('#lat').val()];
      var lon=record[$('#lon').val()];
      return L.marker([]);
    });
  }

};
