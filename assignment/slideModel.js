/* ================================
Week 6 Assignment: Slide Model
================================ */

/** Here's a simple 'model' of a slide.
 *  It tracks the slide's index and the title we want in our HTML
 */
var slideExample = {
  slideNumber: 1,
  title: "My first slide",
  filter: function(geojsonFeature) { return true }
};

var slideExample1 = {
  slideNumber: 1,
  title: "Species of the specimens",
  style: function(data) {
    // Color the points according to the species of the specimens
  }
};

var slideExample2 = {
  slideNumber: 2,
  title: "Collectors of the specimens",
  style: function(data) {
    // Color the points according to the collectors of the specimens
  }
};

var slideExample3 = {
  slideNumber: 3,
  title: "Temporal distribution of the collection",
  style: function(data) {
    // According to the time the specimens were collected, map the points across time
  }
};


/** Here's the simplest implementation I could come up with for
 * representing a deck of slides (nothing exotic is necessary!)
 */
var slideDeck = [slideExample1, slideExample2, slideExample3];
