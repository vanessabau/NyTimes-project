$(document).ready(function(){
$("#search-button").on("click", function() {
    console.log("hey");
    //event.preventDefault();
   
    //NYT Api query
    
    var startYear = "2010";
    var endYear = "2020";
    var subject = "obama";
    var sourcesNum = 5;
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=obama&facet_fields=source&facet=true&begin_date=20120101&end_date=20121231&api-key=8lDbBlloTPEqY4nZFBdkrGq6t6PMN7vu";
    
    //Load data using get request with ajax format
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    //after loading data response, do the following
      .then(function(response) {
        console.log(response);
      });
  });
});
console.log("hello");
  