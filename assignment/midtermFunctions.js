/* ================================
Week 6 Assignment: Midterm Functions + Signatures
================================ */
var dataset ="https://raw.githubusercontent.com/MUSA611-CPLN692-spring2020/datasets/master/geojson/housingprice_Beijing.geojson";

$(document).ready(function() {
$.ajax(dataset).done(function(data) {
  var parsedData = JSON.parse(data);
  console.log(parsedData);
});
});
