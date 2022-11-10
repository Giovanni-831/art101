/*
* Author: Giovanni Lomeli <glomelim@ucsc.edu>
* License: Public Domain
*/
// getting the html
var content = document.getElementById("content").innerHTML;

// setting the html
document.getElementById("box").innerHTML = content;

// add event handler for red Button
$("button.red").click(function(){
  // remove possibe existing class
  $("#target").removeClass("green");
// now toggle red class
$("#target").toggleClass("red")
});

// add event handler for green Button
$("button.green").click(function(){
  // remove possible existing class ClassName
  $("#target").removeClass("red");
  // now toggle red class
  $("target").toggleClass("green")
});

k.fn.init {div#headshot}()
  0: div# headshot
  length: 1
  [ [Prototype]]: object (0)

  // new element on the page
k.fn.inity[button#my-button];
  0: button#my-button
  length: 1
  [[Prototype]]: Object(0)

// change Css proerties
$(".wrap").css("padding", "100px");

Click(function(){
  .append("<button>No, press me!");
});
