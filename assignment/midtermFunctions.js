/* ================================
Week 6 Assignment: Midterm Functions + Signatures
================================ */

var map = L.map('map', {
  center: [37.773972, -122.431297],
  zoom: 13
});
var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);


var dataset ="https://raw.githubusercontent.com/njxinran95/MUSA611-CPLN692-week7/master/assignment/Recreation%20and%20Parks%20Properties_SF.geojson";
var featureGroup;

// 1. Color different parks by property type
var myStyle1 = function(feature) {};

// 2. Color different parks by planning neighborhood
var myStyle2 = function(feature) {};

// 3. Color different parks by ownership
var myStyle3 = function(feature) {};

// 4. Filter the parks smaller than 1 acre
var myFilter1 = function(feature) {};

// 5. Filter the parks greater than 5 acres
var myFilter2 = function(feature) {};

// 6. Create popup for each park
var eachFeatureFunction = function(layer) {
  layer.on('click', function(event) {
  });
};


$(document).ready(function() {
$.ajax(dataset).done(function(data) {
  var parsedData = JSON.parse(data);
  console.log(parsedData);

  featureGroup = L.geoJson(parsedData).addTo(map);
  console.log(featureGroup);

});

});
