alert("This is working");
$("#search-button").on("click", function() {
    //NYT Api query
    console.log(this);
    var year;
    var month;
    var queryURL = "https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=8lDbBlloTPEqY4nZFBdkrGq6t6PMN7vu/" + year + "/" + month;
    //Load data using get request with ajax format
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    //after loading data response, do the following
      .then(function(response) {
      });
  });