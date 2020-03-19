/* ================================
Week 6 Assignment: Midterm Functions + Signatures
================================ */

// My midterm will use Seattle's Building Energy Benchmarking of 2018
// https://data.seattle.gov/dataset/2018-Building-Energy-Benchmarking/7rac-kyay
// My intention is to build an app that shows energy consumption per type of building and per energy source (electricity, steam, gas)
// Each building has an efficiency score
// I intend to represent each building's energy consumption as the size of the marker, and color them by EnergyStar score (see wireframe)
// I also intend to be able to filter the map per building type (residential, non-residential, campus, etc)
// clicking on a marker will display some values

// boilerplate
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

// download data from github repository. I found the data as a csv
var energyDF;

// create a color scheme accordig to energy score
//
var myColorStyle = function (x) {
  return x > 80 ? '#ffffcc' :
         x > 60 ? '#a1dab4' :
         x > 40 ? '#41b6c4' :
         x > 20 ? '#2c7fb8' :
         x > 0 ? '#253494' :
            '#000000';
};

// create an empty list to hold the markers
var markers = [];

// create a filter with jquery that gets the value of a dropdown menu to
// feed it to a tool that will create markers based on the value of the entry.
// Default = Yearly Energy consumption
var selectFeature = function (x) {};

// parse the dataset
var parseDownloadData = function (x) {};

// User chooses if the map should filter per building types
// this function should get the string input from drop down menu using jquery and use Underscore to filter the dataset
// if none is selected, all building types are going to be displayed
var myFilter = function (x) {};

// create markers, extracting from the dataset the lat / lon, EnergyStarScore (to color), and the feature selected to define marker sizes
// also extract the variables that will be displayed in the pop-up function.
var createMarkers = function (x) {};

// scale the markers. I'll have to test some marker sizes, and then create a key in the object that scales the data to the
// marker size I want to display
var scaleMarkers = function (x) {};

// Plot the markers, using the value of the selected scaled feature to define the size of the marker
var plotMarkers = function (x) {};

// remove previous markers before the "show" button is hit
var removeMarkers = function (x) {};

// create a button to display the map according to the selected parameters
$(":button").click(function() {
  if (markers.lenght === 0)

{
  energyDF.done(function(data) {
    var parsed = parseDownloadData(data);
    var selected = selectFeature(parsed);
    var filtered = myFilter(selected);
    var unscaledMarkers = createMarkers(filtered);
    var markers = scaleMarkers(unscaledMarkers);
    plotMarkers(markers);
  });
} else {
  removeMarkers(markers);
  energyDF.done(function(data) {
    var parsed = parseDownloadData(data);
    var selected = selectFeature(data);
    var filtered = myFilter(selected);
    var markers = createMarkers(filtered);
    var markers = scaleMarkers(unscaledMarkers);
    plotMarkers(markers);
  });

}
});
