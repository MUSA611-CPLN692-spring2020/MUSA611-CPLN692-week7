/* ================================
Week 6 Assignment: Slide Model
================================ */

/** Here's a simple 'model' of a slide.
 *  It tracks the slide's index and the title we want in our HTML
 */

 /*
 For the interactive part:
 1. The user could choose different types of cases to visualize (comfired/deaths/recover)
 2. When we click a specific circle, a dashborard would pop up, indicating
    the specific number of comfirmed, deaths and recovered cases
 */

// In the 1st slide, we will count the total number of comfired COVID-19 cases
// Besides，A extra list illustrates The top ten countries with the most comfirmed COVID-19 cases
// Besides, A extra line plot illustrates the change trend of COVID-19 cases
var slideExample1 = {
  slideNumber: 1,
  title: "Global Distribution of Coronavirus COVID-19 Cases",
  filter: function(data) {
    //the circle size varies according to the number of cases
    //the circle color varies according to the type of cases (comfired/deaths/recover)
  }
};

// In the 2nd slide, we will count the total number of comfired COVID-19 cases in the US
// Besides，A extra list will show The top ten states with the most comfirmed COVID-19 cases in the US
// Besides, A extra line plot will show the change trend of COVID-19 cases in the US
var slideExample2 = {
  slideNumber: 2,
  title: "Distribution of Coronavirus COVID-19 Cases in the U.S",
  filter: function(data) {
    //the circle size varies according to the number of cases
    //the circle color varies according to the type of cases (comfired/deaths/recover)
   }
};

// In the 2nd slide, we will count the total number of comfired COVID-19 cases in CN
// Besides，A extra list will show The top ten states with the most comfirmed COVID-19 cases in CN
// Besides, A extra line plot whill show the change trend of COVID-19 cases in CN
var slideExample3 = {
  slideNumber: 3,
  title: "Distribution of Coronavirus COVID-19 Cases in China",
  filter: function(data) {
    //the circle size varies according to the number of cases
    //the circle color varies according to the type of cases (comfired/deaths/recover)
  }
};

/** Here's the simplest implementation I could come up with for
 * representing a deck of slides (nothing exotic is necessary!)
 */
var slideDeck = [slideExample1, slideExample2, slideExample3]
