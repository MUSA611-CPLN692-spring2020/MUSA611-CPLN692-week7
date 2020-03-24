/* ================================
Week 6 Assignment: Slide Model
================================ */

/** Here's a simple 'model' of a slide.
 *  It tracks the slide's index and the title we want in our HTML
 */
var slideExample1 = {
  slideNumber: 1,
  title: "Breaking Down Crime in Philadelphia",
  filter: function(geojsonFeature) { return true }
};

var slideExample2 = {
  slideNumber: 1,
  title: "Most Common Type - This Is What It Is",
  filter: function(geojsonFeature) { return true }
};

var slideExample3 = {
  slideNumber: 1,
  title: "This Isn't As Common As The First One, But There's Still a Lot of It",
  filter: function(geojsonFeature) { return true }
};

var slideExample4 = {
  slideNumber: 1,
  title: "My first slide",
  filter: function(geojsonFeature) { return true }
};

var slideExample5 = {
  slideNumber: 1,
  title: "My first slide",
  filter: function(geojsonFeature) { return true }
};

/** Here's the simplest implementation I could come up with for
 * representing a deck of slides (nothing exotic is necessary!)
 */
var slideDeck = [slideExample1, slideExample2, slideExample3, slideExample4, slideExample5]
