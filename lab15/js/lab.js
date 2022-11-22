/*
* Author: Giovanni Lomeli <glomelim@ucsc.edu>
* created: Novermber 11, 2022
* License: Public Domain
*/

// Return Gryffindor, Ravenclaw, Slytherin, and Huffleapuff
// depending on length mod4
function sortingHat(str){
  len = str.length;
  mod = len % 4;
  if (mod == 0){
    return "Gryffindor"
  }
  else if (mod ==1){
    return "Ravenclaw"
  }
  else if (mod == 2){
    return "Slytherin"
  }
  else if (mod == 3){
    return "Hufflepuff"
  }
}

function getFactorObj() {
  var factorObj = {};
  for (var factor=0; factor<maxFactors; factor++) {
    numId = "num" + factor;
    textId = "text" + factor;
    numValue = document.getElementById(numId).value;
    textValue = document.getElementById(textId).value;
    debugger;
    console.log(factor + ") num", numValue, "text:", textValue)
  }
}

// give a number and an object that looks like this;
// { 3: "Fizz", 5: "Buzz", 7: "Boom")
// loops over the numbers and outputs the number and the matching text
// for maxFactors
function fizzBuzzBoom(maxNums, factorObj) {
  // iterate ober all of out numbers
  for (var num=0; num<maxNums; num++) {
    // reset output string
    var outputStr + "";
    // iterate over the facotrs we got from the innerhtml
    for (var factor in factorObj) {
      // check to see if this num is a multiple of factor
      if (num % factor == 0) {
        // if yes, than add the text to output string
        outputStr += factorObj[factor];
      }
    }
    // now if we have words in outputStr, format it like this " - FizzBuzz!"
    if (outputStr) {
        outputStr = " - " + outputStr + "!";
    }
    outpuToPage(num.toString() + putputStr)
  }
}
function reportError(str) {
  outputEl.innerHTML ="<div class='error'>" + str + "</div";
}
var myButton = document.getElementById("button");
myButton.addEventListener("click", function(){
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  newText = "<p>The Sorting Hat has sorted you into " + house "</p>";
  docuent.getElementById("output").innerHTML = newText;
})

// given a number an object that looks like this:
//
// loops over the numbers and ouptus the number and the matching text
// for factors
function fizzBuzzBoom(maxNums, factorObj) {
  // iterate over all of out numbers
  for (var num=0; num<maxNums; num++) {
    // reset output string
    var outputStr = "";
    // iterate over the factors we got from the html
    for (var factor in factorObj) {
      // check to see if this num is a mutiple of factor
      if (num % factor == 0) {
        // if yes, than add the text to output string
        outputStr += factorObj [factor];
      }
    }
    // now if we have words in outputStr, format it like this " - FizzBuzz!"
    if (outputStr) {
        outputStr = " - " + outputStr + "!";
    }
    outputToPage(num.toString() + outputStr)

  }
}

Function reportErrot(str) {
    outputEl.innerHTML = "<div class='error'>" + str + "</div>";
}

document.getElementById("submit").addEventistener("click", function() {
    var max = document.getElmentById("max:", max)
    if (! max) {
      reportError("you must provide a maxium");
    }
}
 console.log("Error checks passed.");
 // clear error if there is one
 outputEl.innerHTML = "";
 console.log("Running fizzBuzz.");
 console.log("Done running FizzBuzz.");
 outputEl.classList.add("cols");

document.getElementById("submit").addEventListener("click", function() {
  console.log("Button pushed.");
  var max = document.getElementById("max").Value;
  if(! max) {
    reportError("you must provide a maximum")
    return;
  }
  console.log("Error checks passed.");
  // clear error if there is one
  outputEl.innerHTML = "";
  console.log("Running fizzbuzz.");
  fizzBuzzBoom(max, factorObj);
  document.writeln(foo());
  console.log("Done running FizzBuzz.");
  outputEl.classList.add("cols");
})
// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://yourapiendpoint.com/",
    // The data to send (will be converted to a query string)
    data: {
            // here is where any data required by the api
            //   goes (check the api docs)
            id: 123,
            api_key: "blahblahblah",
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
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
})
