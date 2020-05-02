
$("#search-button").on("click", function(event) {
    event.preventDefault();
    clearInterval();
    console.log(this);
    //NYT Api query
    
    var startYear = "2010";
    var endYear = "2020";
    var subject = "obama";
    var sourcesNum = 5;
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=whR9vKaMMAqHi8Y14STehdAAgj5duFIn" 
    
    //Load data using get request with ajax format
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    //after loading data response, do the following
      .then(function(response) {
      });
  });

  