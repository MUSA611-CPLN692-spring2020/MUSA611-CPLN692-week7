/* ================================
Week 6 Assignment: Midterm Functions + Signatures
================================ */
//Data: DC's scooter data (June 2019, LIME)
var map = L.map('map', {
  center: [38.9072, -77.0369],
  zoom: 14
});
var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

//This function parse the JSON data
var parseData = function (x) {
  return JSON.parse(x);
};

//This function filter the trips taking place in morning peak hours
/*
var morning = function(list) {
  return _.filter(list, function(trip){ return trip.START_TIME > 7:00 & trip.START_TIME < 9:00; });
}

//This function filter the trips taking place in afternoon peak hours
var morning = function(list) {
  return _.filter(list, function(trip){ return trip.START_TIME > 17:00 & trip.START_TIME < 19:00; });
}

//This function filter the trips with distance longer than 1 mile
var morning = function(list) {
  return _.filter(list, function(trip){ return trip.TRIP_LENGTH > 1});
}
*/

//This function make markers based on the origin of each trip

var ori_Markers = function(list){
  return _.map(list, function (obj) {
    return L.circleMarker([obj.START_LAT, obj.START_LON], pathOpts);
});
};

//This function make markers based on the destination of each trip
var dest_Markers = function(list){
  return _.map(list, function (obj) {
    return L.marker([obj.END_LAT, obj.END_LON]);
});
};

//This function plot the markers
var plotMarkers = function (list) {
   _.each(list, function (x) {
  x.addTo(map);
})};

//Load & process JSON dataset
var url = "https://raw.githubusercontent.com/OpheliaLYJ/MUSA611_Midterm_scooter/master/data/2019-0601_Lime_trips.json"

var scooterData = $.ajax(url);
scooterData.done(function(data) {
    var parsed = parseData(data);
    var origin_markers = ori_Markers(parsed);
    plotMarkers(origin_markers);
  });
