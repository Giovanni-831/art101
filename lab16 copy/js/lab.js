/*
* Author: Giovanni Lomeli <glomelim@ucsc.edu>
* created: Novermber 11, 2022
* License: Public Domain
*/

// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://api.nasa.gov/planetary/apod",
    // The data to send (will be converted to a query string)
    data: {
            // here is where any data required by the api
            //   goes (check the api docs)
            api_key: "pjYSEq7UOvamSGR1gRF7rYyjTp9jox0iee7fvYSi",
          },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        console.log(data);
				$("#headshot").html("<h2>"+data.title);
				$("#headshot").append("<img src=>"+data.url+">");
				$("#headshot").append("<p>"+data.explanation);
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
})
