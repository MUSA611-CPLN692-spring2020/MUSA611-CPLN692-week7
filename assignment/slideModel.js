/* ================================
Week 6 Assignment: Slide Model
================================ */

/** Here's a simple 'model' of a slide.
 *  It tracks the slide's index and the title we want in our HTML
 */
var slides = [
      { mytitle: "Resident Suggestions Explorer", description:"What are the most concerned topics related to urban issues in city of Xiaman, China? I gathered data from Pinstreet, an application that geo-record user suggestions regarding to city issues. The map on the right shows the spacial distribution of all suggestions collected from the local residents. Try and customize the filter and see the result of topics of your interest.", buttontext: "Let's do it!"},
      { mytitle: "Filter by Street Districts", description: "What's the most concerned topic in each street district? Click the button below to choose a street district to see where the suggenstions are located and the share of the concerned topics. Hover your cursor on the pie chart for more information.", buttontext: " ", filtername: "Select Street District"},
      { mytitle: "Filter by Street Districts", description: "What if we are interested in the most-mentioned keywords? Click the button below to choose a street district to see the word frequency cloud and explore the common concerns. Hover your cursor on the wordcloud for more information", buttontext: " ", filtername: "Select Street District" },
      { mytitle: "Explore the Spatial Distribution of Topics", description: "There might be some spatial pattern of each topic, for example, suburbs may face more complaints about public transportation than the center city. Select a topic as listed below to check where does it locate.", buttontext: " ", filtername: "Select Topics"},
      { mytitle: "Explore the Heatmap", description: "Heatmap might be a more intuitive way to see the spatial pattern of the topics. Here you can choose a topic and set up your observation level to see their distribution.", buttontext: " ", filtername: "Select Topics" }
    ];

 var currentSlide = 0

var loadSlide = function(slide) {
    if(currentSlide==0){
        var frame = document.getElementById('myframe');
        frame.style.visibility = 'hidden'
        var prebutton = document.getElementById('prevbutton');
        prebutton.style.visibility = 'hidden'
        $('#mytitle').text(slide.mytitle)
        $('#description').text(slide.description)
        $('#button-text').text(slide.buttontext)
        map.getSource('prop_cluster').setData(prop)
        map.setCenter([118.1681, 24.5543])
        map.setLayoutProperty('prop_heat', 'visibility', 'none');
        map.setLayoutProperty('prop_cluster2', 'visibility', 'visible');
        map.setLayoutProperty('cluster-count', 'visibility', 'visible');
    }else{
        var frame = document.getElementById('myframe');
        frame.style.visibility = 'visible'
        var prebutton = document.getElementById('prevbutton');
        prebutton.style.visibility = 'visible'
        $('#mytitle').text(slide.mytitle)
        $('#description').text(slide.description)
        $('#button-text').text(slide.buttontext)
        $('#myfilter').text(slide.filtername)
      if(currentSlide==1){
        $('#streetfilter').show()
        $('#piechart').show()
        $('#keyword').hide()
        $('#mytopic').hide()
      }else if(currentSlide==2){
        $('#streetfilter').show()
        $('#mytopic').hide()
        $('#piechart').hide()
        $('#keyword').show()
        $('#annotate').text('Keywords in Selected District')
      }else if(currentSlide==3){
        $('#streetfilter').hide()
        $('#mytopic').show()
        map.setLayoutProperty('prop_heat', 'visibility', 'none');
        map.setLayoutProperty('prop_cluster2', 'visibility', 'visible');
        map.setLayoutProperty('cluster-count', 'visibility', 'visible');
      }else if(currentSlide == 4){
        $('#mybutton').hide();
        map.setLayoutProperty('prop_heat', 'visibility', 'visible');
        map.setLayoutProperty('prop_cluster2', 'visibility', 'none');
        map.setLayoutProperty('cluster-count', 'visibility', 'none');
      }
    }
    }

function next() {
      if (currentSlide != slides.length - 1) {
        currentSlide = currentSlide + 1;
        loadSlide(slides[currentSlide]);
      } else{
        $('#mybutton').hide()
      }
    }

function previous() {
      if (currentSlide != slides.length) {
        $('#mybutton').show()
        currentSlide = currentSlide - 1;
        loadSlide(slides[currentSlide]);
      } else{
        $('#mybutton').hide()
      }
    }

/** Here's the simplest implementation I could come up with for
 * representing a deck of slides (nothing exotic is necessary!)
 */
var slideDeck = [slideExample1, slideExample2, slideExample3]
