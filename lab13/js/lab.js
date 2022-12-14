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
function fizzBuzz() {
	for (n=1;n<=200;n++) {
  	var str = "";
    // assign words if multiples
    if (n%3 == 0) {
    	str += "Bing";
    }
    else  if (n%5 == 0) {
    	str += "Bong";
    }
    else if (n%7 == 0) {
    str += "Bang";
    }
    // if we have words, show 'em
    // else show the number
    if (str == "") {
    	str = n;
    }
    $("#output").append("<p class='num'>" + str + "</p>");
  }
}

$(".press").click(fizzBuzz) 
