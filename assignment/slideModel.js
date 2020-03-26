/* ================================
Week 6 Assignment: Slide Model
================================ */

/** Here's a simple 'model' of a slide.
 *  It tracks the slide's index and the title we want in our HTML
 */
var slideExample1 = {
  slideNumber: 1,
  title: "An Overview of Housing Price in Beijing",
  //a function shows price in a choropleth pattern
  //each will pop up name and price per m2
  switch: switch (feature.properties.priceperm2) {
};

var slideExample2 = {
  slideNumber: 2,
  title: "Types of houses by room number",
  //a function filters number of bedroom and show in different colors
  filter: function(room) { if(room > 2){return room}
};

var slideExample3 = {
  slideNumber: 3,
  title: "The role of school district play on housing price",
  //a function filters houses with school district
  // also show the tier of its price per m2 -- perhaps calculate quantile
  filter: function(schooldistrict) { if (schooldistcit == 1 ) {return schooldistrict}
};


var slideExample4 = {
  slideNumber: 4,
  title: "Spatial Trends of new development",
  //a function filters relatively new houses and show their geographic location
  filter: function(year) {if (year > 2015) {return year}
};

var slideExample5 = {
  slideNumber: 5,
  title: "Conclusion",
  //highlight new investment hot spots -- houses with school district & 3 bedrooms & newly built
  filter: function(meetall) {if (meetall.year >2015 && meetall.schooldistrict = 1 && meetall.room>2){return meetall}
};

/** Here's the simplest implementation I could come up with for
 * representing a deck of slides (nothing exotic is necessary!)
 */
var slideDeck = [slideExample1, slideExample2, slideExample3]
