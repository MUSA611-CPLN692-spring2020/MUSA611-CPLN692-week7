var slideModel = {
  breed:
  description:
  origin: [Lat, Lng]
}
var slide1 = {
  breed: "cockerspaniel",
  description: "heckin good",
  origin: [70,70]
}

var slide2 = {
  breed: "doberman",
  description: "guard dog",
  origin: [60,60]
}

//only one html, grabbing slide1, slide2 with the "next" button

var letters = ['a', 'b', 'c', 'd']
var currentLetter = 0
letters[currentLetter] //'a'

var next = function(){
  if(currentLetter == letters.length ){
    currentLetter = 0}
    else{currentLetter = currentLetter+1
  }
  return letters[currentLetter]
}

//or map.setZoom
map.flyTo([0,0], 14) //lat lng, zoom level

//

<html>
  <div id="sidebar" style="position: absolute; top:0; left: 0; width: 400px; height: 100%; background-color: red">
    <h1 id="title">Title</h1>
    <p id="description">This is the description</p>
    <button id="nextButton">next</button>
  </div>
  <div id="map" style="position: absolute; top:0; height: 100%; right: 0; left: 400">

    <h1>IM A MAP</h1>
  </div>

  <script
    src="https://code.jquery.com/jquery-3.4.1.min.js"
    integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
    crossorigin="anonymous"></script>

  <script>
    // slide model:
    // a title
    // a description
    // background color

  </script>
</html>
